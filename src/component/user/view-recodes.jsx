import { useEffect } from 'react';
import api from '../../lib/api';
import { ItemRecord } from '../webtoon/item-record';

export const ViewRecodes = ({ myViewRecords, onSetMyViewRecords }) => {
  useEffect(() => {
    api.get('webtoon/get/my-view-record').then((res) => {
      console.log(res);
      onSetMyViewRecords(res.data.viewRecords);
    });
  }, []);

  return (
    <div className="view-records">
      <ul className="list-view-record flex">
        {myViewRecords.map(({ id, name, thumbnailUrl, updatedAt }) => (
          <ItemRecord
            id={id}
            key={id}
            title={name}
            url={thumbnailUrl}
            updatedAt={updatedAt}
          />
        ))}
      </ul>
    </div>
  );
};
