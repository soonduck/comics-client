import { Webtoons } from '../../component/webtoon/webtoons';
import { useDispatch, useSelector } from 'react-redux';
import {
  setActiveCategories,
  setCategories,
  setMainWebtoons,
  setPage,
  setTotalPage,
} from '../../redux/webtoon/webtoon.action';
import { Categories } from '../../component/webtoon/categories';

export const WebtoonsContainer = () => {
  const { mainWebtoons, genre, page, totalPage, categories, activeCategories } =
    useSelector((state) => ({
      mainWebtoons: state?.webtoonReducer.mainWebtoons,
      genre: state?.webtoonReducer.genre,
      page: state?.webtoonReducer.page,
      totalPage: state?.webtoonReducer.totalPage,
      categories: state?.webtoonReducer.categories,
      activeCategories: state?.webtoonReducer.activeCategories,
    }));
  const dispatch = useDispatch();

  // dispatch for webtoons component
  const onSetMainWebtoons = (webtoons) => dispatch(setMainWebtoons(webtoons));
  const onSetTotalPage = (totalPage) => dispatch(setTotalPage(totalPage));
  const onSetPage = (page) => dispatch(setPage(page));

  // dispatch for categories component
  const onSetCategories = (categories) => dispatch(setCategories(categories));
  const onSetActiveCategories = (activeCategories) =>
    dispatch(setActiveCategories(activeCategories));

  return (
    <>
      <Categories
        categories={categories}
        activeCategories={activeCategories}
        onSetCategories={onSetCategories}
        onSetActiveCategories={onSetActiveCategories}
        genre={genre}
      />
      <Webtoons
        mainWebtoons={mainWebtoons}
        onSetMainWebtoons={onSetMainWebtoons}
        genre={genre}
        page={page}
        onSetPage={onSetPage}
        totalPage={totalPage}
        onSetTotalPage={onSetTotalPage}
      />
    </>
  );
};
