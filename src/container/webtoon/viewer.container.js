import { useLocation, useParams } from 'react-router-dom';
import { Viewer } from '../../page/webtoon/viewer';
import { useDispatch, useSelector } from 'react-redux';
import { setEpisode } from '../../redux/webtoon/webtoon.action';
import { useState } from 'react';
import queryString from 'query-string';

export const ViewerContainer = () => {
  const { viewer, episode } = useSelector((state) => ({
    viewer: state?.webtoonReducer.viewer,
    episode: state?.webtoonReducer.episode,
  }));

  const params = useParams();
  const dispatch = useDispatch();
  const location = useLocation();

  const parsed = queryString.parse(location.search);

  const onSetEpisode = (episode) => dispatch(setEpisode(episode));

  return (
    <Viewer
      webtoonId={parsed.webtoonId}
      episodeId={params.id}
      episode={episode}
      onSetEpisode={onSetEpisode}
    />
  );
};
