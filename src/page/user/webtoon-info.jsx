import { InfoTab } from '../../component/user/info-tab';
import { ViewRecodes } from '../../component/user/view-recodes';
import { MyWebtoons } from '../../component/user/my-webtoons';
import { useState } from 'react';

export const WebtoonInfo = () => {
  const [tabLeft, setTabLeft] = useState(true);
  return (
    <section className="wrap">
      <InfoTab setTabLeft={setTabLeft} />
      {tabLeft ? <ViewRecodes /> : <MyWebtoons />}
    </section>
  );
};
