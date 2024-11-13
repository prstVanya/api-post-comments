import { classNames } from 'utils/classNames/classNames';
import Trash from 'assets/icons/dislike.svg';
import TrashActive from 'assets/icons/dislike_active.svg';
import Like from 'assets/icons/like.svg';
import LikeActive from 'assets/icons/like_active.svg';
import cls from './LikeDisslike.module.css';

interface ILikeDisslikeProp {
  className?: string;
  like: number;
  isLike: boolean;
  isClick: () => void;
  isOnClick: boolean;
}

export const LikeDisslike = ({
  className, like, isLike, isClick, isOnClick,
}: ILikeDisslikeProp) => {
  return (
    isLike ? (
      <button
        onClick={isClick}
        className={classNames(cls.like, { [cls.activeLight]: isOnClick }, [className])}>
        {isOnClick ? <LikeActive /> : <Like />}
        <p className={classNames(cls.text, {}, [])}>Likes</p>
        <p className={classNames(cls.number, { [cls.light]: isOnClick }, [])}>{like}</p>
      </button>
    ) : (
      <button
        onClick={isClick}
        className={classNames(cls.like, { [cls.activeDark]: isOnClick }, [className])}>
        {isOnClick ? <TrashActive /> : <Trash /> }
        <p className={classNames(cls.text, {}, [])}>Trash</p>
        <p className={classNames(cls.number, { [cls.light]: isOnClick }, [])}>{like}</p>
      </button>
    )
  );
};
