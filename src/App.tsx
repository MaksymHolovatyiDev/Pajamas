import {GitLab} from './components/Gitlab';
import {Title} from './components/Title';
import './index.scss';

function App({dark}: {dark?: boolean}) {
  return (
    <div className={`root ${dark && 'root-dark'}`}>
      <Title dark={dark} />
      <GitLab dark={dark} />
    </div>
  );
}

export default App;
