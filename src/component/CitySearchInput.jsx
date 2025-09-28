import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cities from '../Data/data.js';
import { normalize } from '../Util/util';
import { t } from '../Util/translate';

function CitySearchInput({ cityPart, setCityPart, guessEnabled, onGuess, excludedCities = [] }) {
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    if (cityPart.length >= 2) {
      const availableCities = cities.filter((c) => !excludedCities.includes(c));
      const matchedCities = new Set([
        ...availableCities.filter((c) => normalize(c.name).startsWith(normalize(cityPart.trim()))),
        ...availableCities.filter((c) => normalize(c.name).includes(normalize(cityPart.trim())))
      ]);
      setFilteredCities([...matchedCities]);
    } else {
      setFilteredCities([]);
    }
  }, [cityPart, excludedCities]);

  const handleInputChange = (newCityPart) => {
    setCityPart(newCityPart);
  };

  const handleSelectCity = (cityName) => {
    setCityPart(cityName);
    setFilteredCities([]);
  };

  const handleGuess = () => {
    const guessedCity = cities.find((c) => normalize(c.name) === normalize(cityPart.trim()));
    if (guessedCity && !excludedCities.includes(guessedCity)) {
      setCityPart('');
      setFilteredCities([]);
      onGuess(guessedCity);
    }
  };

  return (
    <div className='guess-box'>
      <input
        value={cityPart}
        type='search'
        placeholder={t('components.guessBoard.guessInput.placeholder')}
        onChange={(event) => handleInputChange(event.target.value)}
      />
      {filteredCities.length > 0 && (
        <div className='city-list'>
          {filteredCities.map((c) => (
            <div key={c.name} onClick={() => handleSelectCity(c.name)}>
              {c.name}
            </div>
          ))}
        </div>
      )}
      <div className='button-group'>
        <div className={`big button ${guessEnabled ? 'enabled' : 'disabled'}`} onClick={handleGuess}>
          {t('components.guessBoard.guessInput.submit')}
        </div>
      </div>
    </div>
  );
}

CitySearchInput.propTypes = {
  cityPart: PropTypes.string.isRequired,
  setCityPart: PropTypes.func.isRequired,
  guessEnabled: PropTypes.bool.isRequired,
  onGuess: PropTypes.func.isRequired,
  excludedCities: PropTypes.array
};

export default CitySearchInput;
