import { Card } from 'components/Card/ui/Card';
import cls from './Cards.module.css';
import { classNames } from 'utils/classNames/classNames';

interface ICardsData {
  className?: string;
}

export const Cards = ({ className }: ICardsData) => {
  return (
    <ul className={classNames(cls.cards, {}, [className])}>
      <Card />
    </ul>
  )
}