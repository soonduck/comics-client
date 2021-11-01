import { InfoTab } from '../../component/user/info-tab';
import { ViewRecodes } from '../../component/user/view-recodes';
import { MyWebtoons } from '../../component/user/my-webtoons';
import { useState } from 'react';

export const MyWebtoonInfo = ({
  myViewRecords,
  myWebtoons,
  onSetMyViewRecords,
  onSetMyWebtoons,
}) => {
  const [tabLeft, setTabLeft] = useState(true);
  return (
    <section className="wrap">
      <InfoTab setTabLeft={setTabLeft} />
      {tabLeft ? (
        <ViewRecodes
          myViewRecords={myViewRecords}
          onSetMyViewRecords={onSetMyViewRecords}
        />
      ) : (
        <MyWebtoons myWebtoons={myWebtoons} onSetMyWebtoons={onSetMyWebtoons} />
      )}
    </section>
  );
};
