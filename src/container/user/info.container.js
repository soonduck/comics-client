import { MyWebtoonInfo } from '../../page/user/my-webtoon-info';
import { useDispatch, useSelector } from 'react-redux';
import {
  setMyViewRecords,
  setMyWebtoons,
} from '../../redux/webtoon/webtoon.action';

export const InfoContainer = () => {
  const { myWebtoons, myViewRecords } = useSelector((state) => ({
    myWebtoons: state?.webtoonReducer.myWebtoons,
    myViewRecords: state?.webtoonReducer.myViewRecords,
  }));

  const dispatch = useDispatch();

  const onSetMyWebtoons = (myWebtoon) => dispatch(setMyWebtoons(myWebtoon));
  const onSetMyViewRecords = (myViewRecords) =>
    dispatch(setMyViewRecords(myViewRecords));

  return (
    <MyWebtoonInfo
      myWebtoons={myWebtoons}
      myViewRecords={myViewRecords}
      onSetMyWebtoons={onSetMyWebtoons}
      onSetMyViewRecords={onSetMyViewRecords}
    />
  );
};
