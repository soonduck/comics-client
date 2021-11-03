import history from '../../lib/history';

export const Logo = ({ goHome }) => {
  return (
    <h1 className="logo-title">
      <button type="button" onClick={goHome}>
        soonduck-page
      </button>
    </h1>
  );
};
