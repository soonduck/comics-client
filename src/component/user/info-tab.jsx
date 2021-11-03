export const InfoTab = ({ setTabLeft }) => {
  return (
    <ul className="list-tab-info flex">
      <li className="item-tab-info">
        <button
          onClick={() => {
            setTabLeft(true);
          }}
        >
          내가 본 작품
        </button>
      </li>
      <li className="item-tab-info">
        <button onClick={() => setTabLeft(false)}>내 연재 웹툰</button>
      </li>
    </ul>
  );
};
