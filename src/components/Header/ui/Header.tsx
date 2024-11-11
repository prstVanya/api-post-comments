import { classNames } from 'utils/classNames/classNames';
import cls from './Header.module.css';

export const Header = () => {
  return (
    <header className={classNames(cls.header, {}, [])}>
      <h1 className={classNames(cls.title, {}, [])}>ikakprosto.ru</h1>
    </header>
  );
};
