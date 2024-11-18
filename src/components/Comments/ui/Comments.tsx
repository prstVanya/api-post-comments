import { classNames } from 'utils/classNames/classNames';
import avatar from 'assets/images/image.jpeg';
import { ICommentsItem } from 'types';
import { useState } from 'react';
import cls from './Comments.module.css';

export const Comments = (
  { comments, className }:
  { comments: ICommentsItem[]; className?: string; },
) => {
  const [deletedComments, setDeletedComments] = useState<{ [key: number]: boolean }>({});

  const handleDeleteComment = (id: number) => {
    setDeletedComments((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  const handleReturnComment = (id: number) => {
    setDeletedComments((prev) => ({
      ...prev,
      [id]: false,
    }));
  };

  return (
    <section className={classNames(cls.comments, {}, [className])}>
      <h2 className={classNames(cls.heading, {}, [])}>{`${comments.length} comments`}</h2>
      <ul className={classNames(cls.list, {}, [])}>
      {comments.map((c) => {
        const isDeleted = deletedComments[c.id];

        return (
            <li key={c.id} className={classNames(cls.item, {}, [])}>
              <img
                className={classNames(cls.avatar, {}, [])}
                alt='аватарка'
                src={avatar}
              />
              <div className={classNames(cls.info, {}, [])}>
                <h3 className={classNames(cls.name, {}, [])}>{c.user.username}</h3>

                {!isDeleted ? (
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
                  <div className={classNames(cls.block, {}, [])}>
                    <p className={classNames(cls.text, {}, [])}>
                      This comment has been deleted.
                    </p>
                    <button
                      className={classNames(cls.return, {}, [])}
                      onClick={() => handleReturnComment(c.id)}
                    >
                      Return
                    </button>
                  </div>
                )}
              </div>
            </li>
        );
      })}
      </ul>
    </section>
  );
};
