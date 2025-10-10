import cs from './cs.json';
import en from './en.json';
import de from './de.json';
import { getLanguageFromPath } from '../urlUtil';

export const LANGUAGES = { en: 'en', cs: 'cs', de: 'de' };
const DEFAULT_LANGUAGE = LANGUAGES.cs;
const LANGUAGE_STORAGE_KEY = 'lang';

export const getLanguage = () => {
  // First try to get language from URL path
  if (typeof window !== 'undefined' && window.location) {
    const languageFromUrl = getLanguageFromPath(window.location.pathname);
    if (languageFromUrl && Object.values(LANGUAGES).includes(languageFromUrl)) {
      return languageFromUrl;
    }
  }

  // Fallback to localStorage for backward compatibility
  const language = localStorage.getItem(LANGUAGE_STORAGE_KEY);

  if (!language) {
    return DEFAULT_LANGUAGE;
  }

  return language;
};

export const setLanguage = (language) => {
  if (!Object.keys(LANGUAGES).includes(language)) {
    console.error(`[TRAN] Trying to set unsupported language ${language}.`);
    return;
  }

  localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
};

const getMessages = () => {
  const language = getLanguage();

  if (language === LANGUAGES.cs) {
    return cs;
  }
  if (language === LANGUAGES.de) {
    return de;
  }
  // default language
  return en;
};

export const t = (key, replaceValues = {}) => {
  const messages = getMessages();
  const message = messages[key];

  if (!message) {
    const language = getLanguage();
    console.warn(`[TRAN] Translated key ${key} not found in language ${language}.`);
    return '';
  }

  // Replace inserted keys by their values
  return Object.keys(replaceValues).reduce(
    (editedMessage, currentKey) => editedMessage.replace(`{{${currentKey}}}`, replaceValues[currentKey]),
    message
  );
};
