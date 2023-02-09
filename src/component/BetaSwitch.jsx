import React from 'react';
import { isBeta, switchToBeta } from '../Util/betaUtil';
import { t } from '../Util/translate';

const BetaSwitch = () => {
  return (
    <div className='button left' onClick={switchToBeta}>
      {isBeta() && t('components.betaSwitch.button.yes')}
      {!isBeta() && t('components.betaSwitch.button.no')}
    </div>
  );
};

export default BetaSwitch;
