import { Card } from 'components/Card/ui/Card';
import { classNames } from 'utils/classNames/classNames';
import { IPostItem } from 'types';
import { Loading } from 'components/Loading';
import cls from './Cards.module.css';

interface ICardsData {
  className?: string;
  post: IPostItem[];
}

export const Cards = ({ className, post }: ICardsData) => {
  return (
    <ul className={classNames(cls.cards, {}, [className])}>
      {post.length > 0 ? (
        post.map((post) => {
          return (
            <Card
              key={post.id}
              post={post}
            />
          );
        })
      ) : (
        <div className={classNames(cls.load, {}, [])}>
          <Loading />
        </div>
      )}
    </ul>
  );
};

/*

*/
