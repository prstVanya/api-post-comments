import cls from './Comments.module.css';
import { classNames } from 'utils/classNames/classNames';
import avatar from 'assets/images/image.jpeg';

interface ICommentsData {
  className?: string;
};

export const Comments = ({ className }: ICommentsData) => {
  return (
    <section className={classNames(cls.comments, {}, [className])}>
      <h2 className={classNames(cls.heading, {}, [])}>2 comments</h2>
      <ul className={classNames(cls.list, {}, [])}>
        <li className={classNames(cls.item, {}, [])}>
          <img 
            className={classNames(cls.avatar, {}, [])}
            alt='аватарка'
            src={avatar}
          />
          <div className={classNames(cls.info, {}, [])}>
            <h3 className={classNames(cls.name, {}, [])}>Stas</h3>
            <p className={classNames(cls.text, {}, [])}>
              His mother had always taught him
            </p>
            <div className={classNames(cls.buttons, {}, [])}>
              <p className={classNames(cls.date, {}, [])}>Today</p>
              <button className={classNames(cls.delete, {}, [])}>Delete</button>
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}