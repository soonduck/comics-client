import { ItemComment } from './item-comment';

export const Comments = ({ episodeComments }) => {
  console.log('123', episodeComments);
  return (
    <ul className="list-comments wrap flex">
      {episodeComments.comments
        ? episodeComments.comments.map(
            ({ content, id, isLiked, likeCount, user, createdAt }) => {
              return (
                <ItemComment
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
