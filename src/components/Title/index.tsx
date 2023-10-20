import {ReactSVG} from 'react-svg';

import MainLogo from '../../assets/Logo - Pajamas.svg';

import {TitleText} from '../TitleText';

export function Title({dark}: {dark?: boolean}) {
  return (
    <div className="logo__base-container">
      <ReactSVG src={MainLogo} />

      <TitleText dark={dark} />
    </div>
  );
}
