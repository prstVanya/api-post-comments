import { Card } from 'components/Card/ui/Card';
import { classNames } from 'utils/classNames/classNames';
import cls from './Cards.module.css';
import { IPostItem } from 'types';
import { apiPost } from 'utils/Api/WebApi';
import { useEffect, useState } from 'react';
import { Loading } from 'components/Loading';

interface ICardsData {
  className?: string;
}

export const Cards = ({ className }: ICardsData) => {
  const [post, setPost] = useState<IPostItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadingPost = async () => {
      setLoading(true);
      try {
        const data = await apiPost.getCards();
        console.log(data)
        setPost(data);
        setLoading(false);
      } catch (err) {
        console.error('Ошибка загрузки постов:', err);
      }
    };

    loadingPost();
  }, [])

  return (
    <ul className={classNames(cls.cards, {}, [className])}>
      {post.length > 0 ? (
        post.map((post) => {
          return (
            <Card 
              key={post.id}
              post={post}
            />
          )
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