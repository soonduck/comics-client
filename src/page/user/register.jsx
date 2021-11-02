import { useEffect, useState } from 'react';
import { ItemCategory } from '../../component/webtoon/item-category';
import { ItemGenre } from '../../component/webtoon/item-genre';
import api from '../../lib/api';

export const Register = ({ genres, onSetGenres }) => {
  const [categories, setCategories] = useState(['1', '2']);
  const [selectedGenre, setSelectedGenre] = useState(1);

  useEffect(() => {
    api.get('webtoon/genres').then((res) => {
      onSetGenres(res.data);
    });
  }, []);

  return (
    <section className="wrap">
      <h2>새 웹툰 등록</h2>
      <form className="registration">
        <h3>작품 제목</h3>
        <input type="text" />
        <h3>장르</h3>
        <ul>
          {genres.map(({ name, id }) => {
            return (
              <ItemGenre
                name={name}
                key={id}
                id={id}
                setSelectedGenre={selectedGenre}
              />
            );
          })}
        </ul>
        <h3>카테고리</h3>
        <input type="text" />
        <button type="button">추가</button>
        <ul>
          {categories.map((category, id) => (
            <ItemCategory category={category} id={id} key={id} />
          ))}
        </ul>
        <h3>썸네일 이미지</h3>
        <input type="file" id="webtoonThumbnail" className="a11yHidden" />
        <button className="btn-thumbnail-upload">
          <label htmlFor="webtoonThumbnail" className="label-upload-thumbnail">
            <img src="" alt="" />
            upload
          </label>
        </button>
        <button className="buttons-submit-webtoon">
          <button type="button">취소</button>
          <button type="button">등록</button>
        </button>
      </form>
    </section>
  );
};
