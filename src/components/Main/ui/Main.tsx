import { Cards } from 'components/Cards/ui/Cards';
import { classNames } from 'utils/classNames/classNames';
import cls from './Main.module.css';

interface IMainData {
  className?: string;
}

const Main = ({ className }: IMainData) => {
  return (
    <main className={classNames(cls.main, {}, [className])}>
      <Cards />
    </main>
  );
};

export default Main;
