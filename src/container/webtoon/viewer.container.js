import { useLocation, useParams } from 'react-router-dom';
import { Viewer } from '../../page/webtoon/viewer';
import { useDispatch, useSelector } from 'react-redux';
import { setEpisode, setWebtoon } from '../../redux/webtoon/webtoon.action';
import queryString from 'query-string';
import {
  setEpisodeComments,
  setWebtoonComments,
} from '../../redux/comment/comment.action';

export const ViewerContainer = () => {
  const { episode, episodeComments, webtoonComments } = useSelector(
    (state) => ({
      episode: state?.webtoonReducer.episode,
      episodeComments: state?.commentReducer.episodeComments,
    }),
  );

  const params = useParams();
  const dispatch = useDispatch();
  const location = useLocation();

  const parsed = queryString.parse(location.search);

  const onSetEpisode = (episode) => dispatch(setEpisode(episode));
  const onSetWebtoon = (webtoon, episodes) =>
    dispatch(setWebtoon(webtoon, episodes));

  // comments
  const onSetEpisodeComments = (episodeComments) =>
    dispatch(setEpisodeComments(episodeComments));

  return (
    <Viewer
      orderNum={params.id}
      episode={episode}
      onSetEpisode={onSetEpisode}
      onSetWebtoon={onSetWebtoon}
      webtoonId={parsed.webtoonId}
      onSetEpisodeComments={onSetEpisodeComments}
      episodeComments={episodeComments}
    />
  );
};
