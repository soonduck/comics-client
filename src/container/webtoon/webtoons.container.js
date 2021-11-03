import { Webtoons } from '../../component/webtoon/webtoons';
import { useDispatch, useSelector } from 'react-redux';
import {
  setActiveCategories,
  setCategories,
  setMainWebtoons,
} from '../../redux/webtoon/webtoon.action';
import { Categories } from '../../component/webtoon/categories';
import webtoonReducer from '../../redux/webtoon/webtoon.reducer';

export const WebtoonsContainer = () => {
  const { mainWebtoons, categories, activeCategories, selectedGenre } =
    useSelector((state) => ({
      mainWebtoons: state?.webtoonReducer.mainWebtoons,
      categories: state?.webtoonReducer.categories,
      activeCategories: state?.webtoonReducer.activeCategories,
      selectedGenre: state?.webtoonReducer.selectedGenre,
    }));
  const dispatch = useDispatch();

  // dispatch for webtoons component
  const onSetMainWebtoons = (webtoons) => dispatch(setMainWebtoons(webtoons));

  // dispatch for categories component
  const onSetCategories = (categories) => dispatch(setCategories(categories));
  const onSetActiveCategories = (activeCategories) =>
    dispatch(setActiveCategories(activeCategories));

  return (
    <div className="wrap">
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
    </div>
  );
};
