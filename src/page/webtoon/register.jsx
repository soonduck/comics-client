import { useEffect, useState } from 'react';
import { ItemCategory } from '../../component/webtoon/item-category';
import { ItemGenre } from '../../component/webtoon/item-genre';
import api from '../../lib/api';
import history from '../../lib/history';
import { useDispatch, useSelector } from 'react-redux';
import {
  setActiveCategories,
  setCategories,
  setSelectedGenre,
} from '../../redux/webtoon/webtoon.action';

export const Register = ({ genres, onSetGenres }) => {
  // 이거 전부 컨테이너로 옮기는 리팩토링 필요!!!
  const { activeCategories, categories, selectedGenre } = useSelector(
    (state) => ({
      activeCategories: state?.webtoonReducer.activeCategories,
      categories: state?.webtoonReducer.categories,
      selectedGenre: state?.webtoonReducer.selectedGenre,
    }),
  );
  const dispatch = useDispatch();
  const onSetActiveCategories = (activeCategories) =>
    dispatch(setActiveCategories(activeCategories));
  const onSetCategories = (categories) => dispatch(setCategories(categories));
  const onSetSelectedGenre = (id) => dispatch(setSelectedGenre(id));
  // 여기까지!!
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
    const result = [];
    for (const key in activeCategories) {
      if (activeCategories[key]) result.push(key);
    }
    api
      .post('webtoon/register', {
        name,
        genreId: selectedGenre,
        categoryIds: result,
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
        onSetCategories(res.data);
        const tempActive = {};
        for (let i = 0; i < res.data.length; i++) {
          tempActive[res.data[i]['id']] = false;
        }
        onSetActiveCategories(tempActive);
      }
    });
  }, [selectedGenre]);

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  return (
    <section className="wrap register-webtoon flex">
      {lessInfo ? (
        <div>
          <h4>정보를 입력해주세요.</h4>
          <button>확인</button>
        </div>
      ) : (
        ''
      )}
      <h2 className="bold">새 웹툰 등록</h2>
      <form className="registration flex">
        <div className="flex">
          <h4>작품 제목</h4>
          <input
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div className="flex">
          <h4>장르</h4>
          <ul className="list-genre-register flex">
            {genres.map(({ name, id }) => {
              return (
                <ItemGenre
                  name={name}
                  key={id}
                  id={id}
                  selectedGenre={selectedGenre}
                  onSetSelectedGenre={onSetSelectedGenre}
                />
              );
            })}
          </ul>
        </div>
        <div className="flex categories">
          <h4>카테고리</h4>
          <ul className="list-category">
            {categories.map(({ category, id, name }, index) => (
              <ItemCategory
                onSetActiveCategories={onSetActiveCategories}
                activeCategories={activeCategories}
                name={name}
                id={id}
                index={index}
                key={id}
                categories={categories}
                setCategories={setCategories}
              />
            ))}
          </ul>
        </div>
        <div
          className={'flex upload-thumbnail' + (upload ? '' : ' unselected')}
        >
          <input
            type="file"
            id="webtoonThumbnail"
            className="a11yHidden"
            onChange={setPreview}
            accept="image/*"
          />
          <button className="btn-thumbnail-upload" type="button">
            <label
              htmlFor="webtoonThumbnail"
              className="label-upload-thumbnail"
            >
              {pic ? (
                <img src={pic} alt="" />
              ) : (
                <>
                  <div>Thumbnail</div>
                  <div>100x130</div>
                </>
              )}
            </label>
          </button>
          {oversize ? <span>3MB 이하의 파일을 업로드 해주세요.</span> : ''}
        </div>
        <div className="buttons-submit-webtoon flex">
          <button type="button">취소</button>
          <button type="button" onClick={registerWebtoon} className="bold">
            등록
          </button>
        </div>
      </form>
    </section>
  );
};
