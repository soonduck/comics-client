import { useEffect, useState } from 'react';
import api from '../../lib/api';

export const ItemComment = ({ content, id, isLiked }) => {
  const [liked, setLiked] = useState(isLiked);
  const like = () => {
    api.get('comment/like/' + id).then((res) => {
      console.log(res);
      setLiked(res.data.isLiked);
    });
  };
  return (
    <>
      <li key={id}>
        {content}
        <button onClick={like}>
          <i className={'fa-' + (liked ? 'solid' : 'regular') + ' fa-heart'} />
        </button>
      </li>
    </>
  );
};
