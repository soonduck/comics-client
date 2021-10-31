import { useParams } from 'react-router-dom';
import { Viewer } from '../../component/webtoon/viewer';
import { useDispatch, useSelector } from 'react-redux';
import { setEpisode } from '../../redux/webtoon/webtoon.action';
import { useState } from 'react';

export const ViewerContainer = () => {
  const { viewer, episode } = useSelector((state) => ({
    viewer: state?.webtoonReducer.viewer,
    episode: state?.webtoonReducer.episode,
  }));

  const params = useParams();
  const dispatch = useDispatch();

  const onSetEpisode = (episode) => dispatch(setEpisode(episode));

  return (
    <Viewer
      episodeId={params.id}
      episode={episode}
      onSetEpisode={onSetEpisode}
    />
  );
};
