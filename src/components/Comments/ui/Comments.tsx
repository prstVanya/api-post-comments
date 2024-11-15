import { classNames } from 'utils/classNames/classNames';
import avatar from 'assets/images/image.jpeg';
import { ICommentsItem } from 'types';
import cls from './Comments.module.css';

export const Comments = (
  { comments, className }: { comments: ICommentsItem[]; className?: string },
) => {
  return (
    <section className={classNames(cls.comments, {}, [className])}>
      <h2 className={classNames(cls.heading, {}, [])}>{`${comments.length} comments`}</h2>
      <ul className={classNames(cls.list, {}, [])}>
        {comments.map((c) => {
          return (
            <li key={c.id} className={classNames(cls.item, {}, [])}>
              <img
                className={classNames(cls.avatar, {}, [])}
                alt='аватарка'
                src={avatar}
              />
              <div className={classNames(cls.info, {}, [])}>
                <h3 className={classNames(cls.name, {}, [])}>{c.user.username}</h3>
                <p className={classNames(cls.text, {}, [])}>
                  {c.body}
                </p>
                <div className={classNames(cls.buttons, {}, [])}>
                  <p className={classNames(cls.date, {}, [])}>Today</p>
                  <button className={classNames(cls.delete, {}, [])}>Delete</button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

/*
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
*/
