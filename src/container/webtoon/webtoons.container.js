import { Webtoons } from '../../component/webtoon/webtoons';
import { useDispatch, useSelector } from 'react-redux';
import {
  setActiveCategories,
  setCategories,
  setMainWebtoons,
} from '../../redux/webtoon/webtoon.action';
import { Categories } from '../../component/webtoon/categories';

export const WebtoonsContainer = ({ selectedGenre }) => {
  const { mainWebtoons, categories, activeCategories } = useSelector(
    (state) => ({
      mainWebtoons: state?.webtoonReducer.mainWebtoons,
      categories: state?.webtoonReducer.categories,
      activeCategories: state?.webtoonReducer.activeCategories,
    }),
  );
  const dispatch = useDispatch();

  // dispatch for webtoons component
  const onSetMainWebtoons = (webtoons) => dispatch(setMainWebtoons(webtoons));

  // dispatch for categories component
  const onSetCategories = (categories) => dispatch(setCategories(categories));
  const onSetActiveCategories = (activeCategories) =>
    dispatch(setActiveCategories(activeCategories));

  return (
    <>
      <Categories
        selectedGenre={selectedGenre}
        categories={categories}
        activeCategories={activeCategories}
        onSetCategories={onSetCategories}
        onSetActiveCategories={onSetActiveCategories}
      />
      <Webtoons
        selectedGenre={selectedGenre}
        mainWebtoons={mainWebtoons}
        onSetMainWebtoons={onSetMainWebtoons}
      />
    </>
  );
};
