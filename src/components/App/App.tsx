import { Header } from 'components/Header';
import '../../pages/index.css';
import { classNames } from 'utils/classNames/classNames';
import { Main } from 'components/Main';
import { Route, Routes } from 'react-router-dom';
import { Post } from 'components/Post';

const App = () => {
  return (
    <div className={classNames('app', {}, [])}>
      <div className={classNames('wrapper', {}, [])}>
        <Header />
        <>
          <Routes>
            <Route path='/' element={
              <Main />
            } />
            <Route path='/post' element={
              <Post />
            } />
          </Routes>
        </>
      </div>
    </div>
  );
};

export default App;