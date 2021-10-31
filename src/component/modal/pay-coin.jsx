import history from '../../lib/history';

export const PayCoin = ({ setPay, viewer }) => {
  const goBack = () => {
    if (viewer) history.goBack();
    setPay(false);
  };
  return (
    <div className="modal-pay-coin">
      코인을 지불하시겠습니까?
      <div className="buttons-pay">
        <button type="button" onClick={goBack}>
          아니오
        </button>
        <button>예</button>
      </div>
    </div>
  );
};
