import { useEffect, useState } from 'react';
import { ItemCategory } from '../../component/webtoon/item-category';
import { ItemGenre } from '../../component/webtoon/item-genre';
import api from '../../lib/api';
import history from '../../lib/history';

export const Register = ({ genres, onSetGenres }) => {
  const [categories, setCategories] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(1);
  const [name, setName] = useState('');

  const [oversize, setOversize] = useState(false);
  const [lessInfo, setLessInfo] = useState(false);

  const [pic, setPic] = useState();
  const [upload, setUpload] = useState();

  // 3MB 사이즈
  const maxSize = 3 * 1024 * 1024;

  const registerWebtoon = () => {
    if (!name || !selectedGenre || !upload) {
      setLessInfo(true);
      return;
    }
    const formData = new FormData();
    formData.append('file', upload);
    api
      .post('webtoon/register', {
        name,
        genreId: selectedGenre,
        categoryIds: categories
          .filter((category) => category.selected)
          .map((category) => category.category.id),
      })
      .then((res) => {
        if (res.data.ok) {
          api
            .post('webtoon/thumbnailUpload/' + res.data.webtoonId, formData)
            .then((res) => {
              // if(!res.ok) 위에서 만든 웹툰 삭제!
              history.push('/my-webtoon/' + res.data.webtoonId);
            });
        }
      });
  };

  const setPreview = (event) => {
    const reader = new FileReader();
    reader.onload = function (event) {
      console.log(upload);
      setPic(event.target.result);
    };
    if (event.target.files[0] && event.target.files[0].size < maxSize) {
      setOversize(false);
      reader.readAsDataURL(event.target.files[0]);
      setUpload(event.target.files[0]);
    } else if (event.target.files[0] && event.target.files[0].size > maxSize) {
      setOversize(true);
      setPic('');
      setUpload('');
    } else if (!event.target.files[0]) {
      setOversize(false);
      setPic('');
      setUpload('');
    }
  };

  useEffect(() => {
    api.get('webtoon/genres').then((res) => {
      onSetGenres(res.data);
    });
  }, []);
  // 카테고리들 불러오기
  useEffect(() => {
    api.get('webtoon/categories/' + selectedGenre).then((res) => {
      if (res.data) {
        const result = [];
        for (let i = 0; i < res.data.length; i++) {
          result[i] = { selected: false, category: res.data[i] };
        }
        setCategories(result);
      }
    });
  }, [selectedGenre]);

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  return (
    <section className="wrap">
      <h2>새 웹툰 등록</h2>
      <form className="registration">
        <h3>작품 제목</h3>
        <input
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <h3>장르</h3>
        <ul>
          {genres.map(({ name, id }) => {
            return (
              <ItemGenre
                name={name}
                key={id}
                id={id}
                setSelectedGenre={setSelectedGenre}
              />
            );
          })}
        </ul>
        <h3>카테고리</h3>
        <ul>
          {categories.map(({ category }, index) => (
            <ItemCategory
              name={category.name}
              id={category.id}
              index={index}
              key={category.id}
              categories={categories}
              setCategories={setCategories}
            />
          ))}
        </ul>
        <h3>썸네일 이미지</h3>
        <input
          type="file"
          id="webtoonThumbnail"
          className="a11yHidden"
          onChange={setPreview}
          accept="image/*"
        />
        <button className="btn-thumbnail-upload">
          <label htmlFor="webtoonThumbnail" className="label-upload-thumbnail">
            <img src={pic} alt="" />
            upload
          </label>
        </button>
        <div className="buttons-submit-webtoon">
          <button type="button">취소</button>
          <button type="button" onClick={registerWebtoon}>
            등록
          </button>
        </div>
      </form>
    </section>
  );
};
