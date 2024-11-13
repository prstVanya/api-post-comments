import { classNames } from 'utils/classNames/classNames';
import Like from 'assets/icons/like.svg';
import Trash from 'assets/icons/dislike.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { startTransition } from 'react';
import cls from './Card.module.css';
import { IPostItem } from 'types';

export const Card = ({ post, className }: { post: IPostItem; className?: string }) => {
  const location = useLocation();
  const navigate = useNavigate();

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
          <button className={classNames(cls.like, {}, [])}>
            <Like />
            <p className={classNames(cls.text, {}, [])}>Like</p>
            <p className={classNames(cls.number, {}, [])}>{post.reactions.likes}</p>
          </button>
          <button className={classNames(cls.like, {}, [])}>
            <Trash />
            <p className={classNames(cls.text, {}, [])}>Trash</p>
            <p className={classNames(cls.number, {}, [])}>{post.reactions.dislikes}</p>
          </button>
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
            )
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