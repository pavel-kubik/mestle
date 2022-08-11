import React from 'react';
import { isBeta, switchToBeta } from '../Util/betaUtil';

const BetaSwitch = () => {
  return (
    <div className='button left' onClick={switchToBeta}>
      {isBeta() && <>ANO</>}
      {!isBeta() && <>NE</>}
    </div>
  );
};

export default BetaSwitch;
