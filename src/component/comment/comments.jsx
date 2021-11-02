import { ItemComment } from './item-comment';

export const Comments = ({ episodeComments }) => {
  console.log(episodeComments);
  return (
    <ul>
      {episodeComments.comments
        ? episodeComments.comments.map(({ content, id, isLiked }) => {
            return (
              <ItemComment
                content={content}
                key={id}
                id={id}
                isLiked={isLiked}
              />
            );
          })
        : ''}
    </ul>
  );
};
