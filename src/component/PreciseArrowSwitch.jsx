import React from 'react';
import { usePreciseArrow, togglePreciseArrow } from '../Util/preciseArrowUtil';
import { t } from '../Util/translate';

const PreciseArrowSwitch = () => {
  const isEnabled = usePreciseArrow();

  return (
    <div className='button left' onClick={togglePreciseArrow}>
      {isEnabled && t('components.preciseArrowSwitch.button.yes')}
      {!isEnabled && t('components.preciseArrowSwitch.button.no')}
    </div>
  );
};

export default PreciseArrowSwitch;
