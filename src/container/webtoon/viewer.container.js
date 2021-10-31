import { useLocation, useParams } from 'react-router-dom';
import { Viewer } from '../../page/webtoon/viewer';
import { useDispatch, useSelector } from 'react-redux';
import { setEpisode, setWebtoon } from '../../redux/webtoon/webtoon.action';
import queryString from 'query-string';

export const ViewerContainer = () => {
  const { episode, webtoon } = useSelector((state) => ({
    viewer: state?.webtoonReducer.viewer,
    episode: state?.webtoonReducer.episode,
    webtoon: state?.webtoonReducer.webtoon,
  }));

  const params = useParams();
  const dispatch = useDispatch();
  const location = useLocation();

  const parsed = queryString.parse(location.search);

  const onSetEpisode = (episode) => dispatch(setEpisode(episode));
  const onSetWebtoon = (webtoon, episodes) =>
    dispatch(setWebtoon(webtoon, episodes));

  return (
    <Viewer
      orderNum={params.id}
      episode={episode}
      onSetEpisode={onSetEpisode}
      onSetWebtoon={onSetWebtoon}
      webtoonId={parsed.webtoonId}
    />
  );
};
