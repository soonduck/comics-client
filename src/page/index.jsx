import { WebtoonsContainer } from '../container/webtoon/webtoons.container';

export const Index = ({ selectedGenre }) => {
  return <WebtoonsContainer selectedGenre={selectedGenre} />;
};
