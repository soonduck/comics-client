import { InfoTab } from '../../component/user/info-tab';
import { ViewRecodes } from '../../component/user/view-recodes';
import { MyWebtoons } from '../../component/user/my-webtoons';
import { useState } from 'react';
import history from '../../lib/history';

export const MyWebtoonInfo = ({
  myViewRecords,
  myWebtoons,
  onSetMyViewRecords,
  onSetMyWebtoons,
}) => {
  const [tabLeft, setTabLeft] = useState(true);

  const goRegisterWebtoonPage = () => {
    history.push('/webtoon/register');
  };
  return (
    <section className="wrap">
      <div className="my-tabs flex">
        <InfoTab tabLeft={tabLeft} setTabLeft={setTabLeft} />
        <button
          type="button"
          onClick={goRegisterWebtoonPage}
          className="btn-go-register"
        >
          웹툰 등록
        </button>
      </div>
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
