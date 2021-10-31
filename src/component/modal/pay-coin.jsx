export const PayCoin = ({ setPay }) => {
  return (
    <div className="modal-pay-coin">
      코인을 지불하시겠습니까?
      <div className="buttons-pay">
        <button
          type="button"
          onClick={() => {
            setPay(false);
          }}
        >
          아니오
        </button>
        <button>예</button>
      </div>
    </div>
  );
};
