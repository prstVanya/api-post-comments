import { classNames } from 'utils/classNames/classNames';
import { Cards } from 'components/Cards/ui/Cards';
import { Comments } from 'components/Comments';
import cls from './Post.module.css';

interface IPostData {
  className?: string;
}

const Post = ({ className }: IPostData) => {
  return (
    <main className={classNames(cls.post, {}, [className])}>
      <Cards />
      <Comments />
    </main>
  );
};

export default Post;
