import { Cards } from 'components/Cards/ui/Cards';
import { classNames } from 'utils/classNames/classNames';
import { useEffect, useState } from 'react';
import { IPostItem } from 'types';
import { apiPost } from 'utils/Api/WebApi';
import cls from './Main.module.css';

interface IMainData {
  className?: string;
}

const Main = ({ className }: IMainData) => {
  const [post, setPost] = useState<IPostItem[]>([]);

  useEffect(() => {
    const loadingPost = async () => {
      try {
        const data = await apiPost.getCards();
        setPost(data);
      } catch (err) {
        console.error('Ошибка загрузки постов:', err);
      }
    };

    loadingPost();
  }, []);

  return (
    <main className={classNames(cls.main, {}, [className])}>
      <Cards post={post} />
    </main>
  );
};

export default Main;
