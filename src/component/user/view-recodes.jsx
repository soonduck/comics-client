import { ItemEpisode } from '../webtoon/item-episode';

export const ViewRecodes = ({ myViewRecords, onSetMyViewRecords }) => {
  return (
    <div className="view-records">
      <ul className="list-view-record">
        {myViewRecords.map(() => (
          <ItemEpisode />
        ))}
      </ul>
    </div>
  );
};
