import cs from './cs.json';
import en from './en.json';

export const LANGUAGES = { en: 'en', cs: 'cs' };
const DEFAULT_LANGUAGE = LANGUAGES.cs;
const LANGUAGE_STORAGE_KEY = 'lang';

export const getLanguage = () => {
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
