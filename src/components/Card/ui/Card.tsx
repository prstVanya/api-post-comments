import { classNames } from 'utils/classNames/classNames';
import { useLocation, useNavigate } from 'react-router-dom';
import { startTransition, useState } from 'react';
import { IPostItem } from 'types';
import { LikeDisslike } from 'components/LikeDisslike';
import cls from './Card.module.css';

export const Card = ({ post, className }: { post: IPostItem; className?: string }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState<'like' | 'dislike' | null>(null);

  const handleLikeClick = () => {
    setActiveButton(activeButton === 'like' ? null : 'like');
  };

  const handleDislikeClick = () => {
    setActiveButton(activeButton === 'dislike' ? null : 'dislike');
  };

  const handleClickToLink = () => {
    startTransition(() => {
      navigate('/post');
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
            like={post.reactions.likes}
          />
          <LikeDisslike
            isOnClick={activeButton === 'dislike'}
            isLike={false}
            isClick={handleDislikeClick}
            like={post.reactions.dislikes}
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

/*
  {post.tags.map((tag) => ()
            <li  className={classNames(cls.item, {}, [])}>
              <p className={classNames(cls.itext, {}, [])}>{tag}</p>
            </li>
          )}
*/
