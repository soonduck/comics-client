import { ItemComment } from './item-comment';

export const Comments = ({ episodeComments }) => {
  return (
    <ul>
      {episodeComments.comments
        ? episodeComments.comments.map(({ content, id }) => {
            return <ItemComment content={content} key={id} id={id} />;
          })
        : ''}
    </ul>
  );
};
