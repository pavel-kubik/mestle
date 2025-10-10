import React from 'react';
import { getCountry, switchCountry, COUNTRIES, getCountryFlag } from '../Util/countryUtil';
import { t } from '../Util/translate';

const CountrySwitch = () => {
  const currentCountry = getCountry();

  return (
    <div className='button left' onClick={switchCountry}>
      {currentCountry === COUNTRIES.CZECH && (
        <>
          {getCountryFlag(COUNTRIES.CZECH)} {t('components.countrySwitch.button.czech')}
        </>
      )}
      {currentCountry === COUNTRIES.GERMAN && (
        <>
          {getCountryFlag(COUNTRIES.GERMAN)} {t('components.countrySwitch.button.german')}
        </>
      )}
    </div>
  );
};

export default CountrySwitch;
