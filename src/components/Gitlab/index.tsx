import {ReactSVG} from 'react-svg';

import Tanuki from '../../assets/Tanuki.svg';
import Chin from '../../assets/Chin.svg';
import LCheek from '../../assets/Cheek L.svg';
import RCheek from '../../assets/Cheek R.svg';

export function GitLab({dark}: {dark?: boolean}) {
  return (
    <div className="gitlab">
      <div className="gitlab__svg">
        <ReactSVG
          src={Tanuki}
          className={`gitlab__svg-tanuki ${dark && 'gitlab__svg-tanuki-dark'}`}
        />
        <ReactSVG
          src={Chin}
          className={`gitlab__svg-chin ${dark && 'gitlab__svg-chin-dark'}`}
        />
        <ReactSVG
          src={LCheek}
          className={`gitlab__svg-cheek-r ${
            dark && 'gitlab__svg-cheek-r-dark'
          }`}
        />
        <ReactSVG
          src={RCheek}
          className={`gitlab__svg-cheek-l ${
            dark && 'gitlab__svg-cheek-l-dark'
          }`}
        />
      </div>
      <p className={`gitlab__text ${dark && 'gitlab__text-dark'}`}>GitLab</p>
    </div>
  );
}
