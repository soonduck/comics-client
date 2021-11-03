import { useEffect, useState } from 'react';
import api from '../../lib/api';

export const ItemComment = ({
  content,
  id,
  isLiked,
  likeCount,
  user,
  createdAt,
}) => {
  const [liked, setLiked] = useState(isLiked);
  const [count, setCount] = useState(likeCount);
  const like = () => {
    api.get('comment/like/' + id).then((res) => {
      console.log(res);
      setLiked(res.data.isLiked);
      setCount(res.data.likeCount);
    });
  };
  return (
    <>
      <li key={id} className="item-comment flex">
        <div className="container-comment-pic">
          <img src={user.pic} alt="" className="comment-pic" />
        </div>
        <div className="comment-contents flex">
          <div>
            <span className="comment-username bold">{user.username}</span>
            <span className="date-comment">
              {createdAt.slice(0, 10).split('-').join('.')}
            </span>
          </div>
          <p>{content}</p>
          <div className="hearts">
            <button onClick={like}>
              <i
                className={'fa-' + (liked ? 'solid' : 'regular') + ' fa-heart'}
              />
            </button>
            <span className={liked ? 'red' : ''}>{count}</span>
          </div>
        </div>
      </li>
    </>
  );
};
