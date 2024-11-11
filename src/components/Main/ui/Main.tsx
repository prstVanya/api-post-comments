import { Cards } from 'components/Cards/ui/Cards';
import cls from './Main.module.css';
import { classNames } from 'utils/classNames/classNames';

interface IMainData {
  className?: string;
}

const Main = ({ className }: IMainData) => {
  return (
    <main className={classNames(cls.main, {}, [className])}>
      <Cards />
    </main>
  )
}

export default Main;