import { classNames } from 'utils/classNames/classNames';
import Like from 'assets/icons/like.svg';
import Trash from 'assets/icons/dislike.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { startTransition } from 'react';
import cls from './Card.module.css';

interface ICardData {
  className?: string;
}

export const Card = ({ className }: ICardData) => {
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
          His mother had always taught him
        </h2>
        <p className={classNames(cls.subtitle, {}, [])}>
          His mother had always taught him not to ever think
          of himself as better than others. Hed tried to live
          by this motto. He never looked down on those who were
          less fortunate or who had less money than him. But
          the stupidity of the group of people he was talking
          to made him change his mind.
        </p>
      </div>
      <div className={classNames(cls.status, {}, [])}>
        <div className={classNames(cls.buttons, {}, [])}>
          <button className={classNames(cls.like, {}, [])}>
            <Like />
            <p className={classNames(cls.text, {}, [])}>Like</p>
            <p className={classNames(cls.number, {}, [])}>192</p>
          </button>
          <button className={classNames(cls.like, {}, [])}>
            <Trash />
            <p className={classNames(cls.text, {}, [])}>Trash</p>
            <p className={classNames(cls.number, {}, [])}>25</p>
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
          <li className={classNames(cls.item, {}, [])}>
            <p className={classNames(cls.itext, {}, [])}>history</p>
          </li>
          <li className={classNames(cls.item, {}, [])}>
            <p className={classNames(cls.itext, {}, [])}>american</p>
          </li>
          <li className={classNames(cls.item, {}, [])}>
            <p className={classNames(cls.itext, {}, [])}>crime</p>
          </li>
        </ul>
      </div>
    </li>
  );
};
