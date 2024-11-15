import { classNames } from 'utils/classNames/classNames';
import avatar from 'assets/images/image.jpeg';
import { ICommentsItem } from 'types';
import cls from './Comments.module.css';
import { useState } from 'react';

export const Comments = (
  { comments, className }: 
  { comments: ICommentsItem[]; className?: string; },
) => {
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [deletedCommentId, setDeletedCommentId] = useState<number | null>(null);

  const handleDeleteComment = (id: number) => {
    setIsDelete(true);
    setDeletedCommentId(id);
  }

  const handleReturnComment = () => {
    setIsDelete(false);
    setDeletedCommentId(null);
  }

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
                {isDelete && deletedCommentId === c.id ? (
                  <>
                    <p className={classNames(cls.text, {}, [])}>
                      {c.body}
                    </p>
                    <div className={classNames(cls.buttons, {}, [])}>
                      <p className={classNames(cls.date, {}, [])}>Today</p>
                      <button 
                        className={classNames(cls.delete, {}, [])}
                        onClick={() => handleDeleteComment(c.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <p className={classNames(cls.text, {}, [])}>
                      His mother had always taught him
                    </p>
                    <button
                      className={classNames(cls.return, {}, [])}
                      onClick={handleReturnComment}
                    >
                      Return
                    </button>
                  </>
                )}
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
