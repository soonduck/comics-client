import { ItemComment } from './item-comment';

export const Comments = ({ episodeComments }) => {
  return (
    <ul className="list-comments wrap flex">
      {episodeComments.comments
        ? episodeComments.comments.map(
            ({
              content,
              id,
              isLiked,
              likeCount,
              user,
              createdAt,
              myComment,
            }) => {
              return (
                <ItemComment
                  myComment={myComment}
                  createdAt={createdAt}
                  user={user}
                  likeCount={likeCount}
                  content={content}
                  key={id}
                  id={id}
                  isLiked={isLiked}
                />
              );
            },
          )
        : ''}
    </ul>
  );
};
