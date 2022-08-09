import React from 'react';
import { isBeta, switchToBeta } from '../Util/betaUtil';

const BetaSwitch = () => {
  return (
    <div className='button' onClick={switchToBeta}>
      {isBeta() && <>Switch to main version</>}
      {!isBeta() && <>Switch to beta version</>}
    </div>
  );
};

export default BetaSwitch;
