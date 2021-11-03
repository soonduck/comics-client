import { useState } from 'react';
import api from '../../lib/api';

export const WriteComment = ({ episode, onSetEpisodeComments }) => {
  const [content, setContent] = useState('');
  const postComment = () => {
    api
      .post('comment/create', { content, episodeId: episode.id })
      .then((res) => {
        console.log('result: ', res);
        setContent('');
        if (res.data.ok) onSetEpisodeComments(res.data.result);
      });
  };

  return (
    <section className="wrap write-comment-wrap">
      <div className="write-comment flex">
        <h3>댓글 쓰기</h3>
        <form className="flex">
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            value={content}
            onChange={({ target }) => {
              setContent(target.value);
            }}
          />
          <button type="button" onClick={postComment}>
            등록
          </button>
        </form>
      </div>
    </section>
  );
};
