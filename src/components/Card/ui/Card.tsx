import { classNames } from 'utils/classNames/classNames';
import { useLocation, useNavigate } from 'react-router-dom';
import { startTransition, useState } from 'react';
import { IPostItem } from 'types';
import { LikeDisslike } from 'components/LikeDisslike';
import cls from './Card.module.css';

export const Card = ({ post, className }: { post: IPostItem | null; className?: string }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState<'like' | 'dislike' | null>(null);
  const [likes, setLikes] = useState(post?.reactions.likes || 0);
  const [trash, setTrash] = useState(post?.reactions.dislikes || 0);

  const handleLikeClick = () => {
    if (activeButton === 'like') {
      setActiveButton(null);
      setLikes(likes - 1);
    } else if (activeButton === 'dislike') {
      setActiveButton('like');
      setTrash(trash - 1);
      setLikes(likes + 1);
    } else {
      setActiveButton('like');
      setLikes(likes + 1);
    }
  };

  const handleDislikeClick = () => {
    if (activeButton === 'dislike') {
      setActiveButton(null);
      setTrash(trash - 1);
    } else if (activeButton === 'like') {
      setActiveButton('dislike');
      setLikes(likes - 1);
      setTrash(trash + 1);
    } else {
      setActiveButton('dislike');
      setTrash(trash + 1);
    }
  };

  const handleClickToLink = () => {
    startTransition(() => {
      navigate(`/post/${post?.id}`);
    });
  };

  return (
    <li className={classNames(cls.card, {}, [className])}>
      <div className={classNames(cls.block, {}, [])}>
        <h2 className={classNames(cls.heading, {}, [])}>
          {post.title}
        </h2>
        <p className={classNames(cls.subtitle, {}, [])}>
          {post.body}
        </p>
      </div>
      <div className={classNames(cls.status, {}, [])}>
        <div className={classNames(cls.buttons, {}, [])}>
          <LikeDisslike
            isOnClick={activeButton === 'like'}
            isLike={true}
            isClick={handleLikeClick}
            like={likes}
          />
          <LikeDisslike
            isOnClick={activeButton === 'dislike'}
            isLike={false}
            isClick={handleDislikeClick}
            like={trash}
          />
        </div>
        { location.pathname === '/' ? (
          <button
            onClick={handleClickToLink}
            className={classNames(cls.link, {}, [])}>
              Open comments
            </button>
        ) : (
          null
        )}
        <p className={classNames(cls.date, {}, [])}>Today</p>
        <ul className={classNames(cls.list, {}, [])}>
          {post.tags.map((tags, i) => {
            return (
              <li key={i} className={classNames(cls.item, {}, [])}>
                <p className={classNames(cls.itext, {}, [])}>{tags}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
};
