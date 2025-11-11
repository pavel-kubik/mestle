import React from 'react';
import { isPreciseArrow, togglePreciseArrow } from '../Util/preciseArrowUtil';
import { t } from '../Util/translate';

const PreciseArrowSwitch = () => {
  return (
    <div className='button left' onClick={togglePreciseArrow}>
      {isPreciseArrow() && t('components.preciseArrowSwitch.button.yes')}
      {!isPreciseArrow() && t('components.preciseArrowSwitch.button.no')}
    </div>
  );
};

export default PreciseArrowSwitch;
