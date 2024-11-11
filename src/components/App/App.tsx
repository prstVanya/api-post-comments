import { Header } from 'components/Header';
import '../../pages/index.css';
import { classNames } from 'utils/classNames/classNames';
import Main from 'components/Main/Main';

const App = () => {
  return (
    <div className={classNames('app', {}, [])}>
      <div className={classNames('wrapper', {}, [])}>
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default App;