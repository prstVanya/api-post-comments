import { classNames } from 'utils/classNames/classNames';
import { Comments } from 'components/Comments';
import { useEffect, useState } from 'react';
import { ICommentsItem, IPostItem } from 'types';
import { useParams } from 'react-router-dom';
import { apiPost } from 'utils/Api/WebApi';
import { Card } from 'components/Card/ui/Card';
import { Loading } from 'components/Loading';
import cls from './Post.module.css';

interface IPostData {
  className?: string;
}

const Post = ({ className }: IPostData) => {
  const [post, setPost] = useState<IPostItem | null>(null);
  const [comments, setComments] = useState<ICommentsItem[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const loadData = async () => {
      try {
        const postData = await apiPost.getPost(Number(id));
        const commentsData = await apiPost.getComments(id);
        const sortComments = commentsData.filter((c) => c.postId === Number(id));

        setComments(sortComments);
        setPost(postData as IPostItem);
      } catch (err) {
        console.error('Ошибка загрузки данных:', err);
      }
    };

    loadData();
  }, [id]);

  return (
    <main className={classNames(cls.post, {}, [className])}>
      {post && <Card post={post} />}
      {comments.length > 0 ? <Comments comments={comments} /> : (
        <div className={classNames(cls.load, {}, [])}>
          <Loading />
        </div>
      )}
    </main>
  );
};

export default Post;
