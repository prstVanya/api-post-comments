import { Card } from 'components/Card/ui/Card';
import { classNames } from 'utils/classNames/classNames';
import cls from './Cards.module.css';

interface ICardsData {
  className?: string;
}

export const Cards = ({ className }: ICardsData) => {
  return (
    <ul className={classNames(cls.cards, {}, [className])}>
      <Card />
    </ul>
  );
};
