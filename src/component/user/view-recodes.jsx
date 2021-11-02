import { ItemWebtoon } from '../webtoon/item-webtoon';
import { useEffect } from 'react';
import api from '../../lib/api';

export const ViewRecodes = ({ myViewRecords, onSetMyViewRecords }) => {
  useEffect(() => {
    api.get('webtoon/get/my-view-record').then((res) => {
      console.log(res);
      onSetMyViewRecords(res.data.viewRecords);
    });
  }, []);

  return (
    <div className="view-records">
      <ul className="list-view-record">
        {myViewRecords.map(({ id, name, thumbnailUrl }) => (
          <ItemWebtoon id={id} key={id} title={name} url={thumbnailUrl} />
        ))}
      </ul>
    </div>
  );
};
