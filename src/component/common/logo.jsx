import history from '../../lib/history';
import { useLocation } from 'react-router-dom';

export const Logo = () => {
  const location = useLocation();
  const pathname = location.pathname.split('/')[1];
  const goHome = () => {
    pathname ? history.push('/') : document.location.reload();
  };

  return (
    <h1 className="logo-title">
      <button type="button" onClick={goHome}>
        <img
          src="https://soonduck301509.s3.ap-northeast-2.amazonaws.com/logo.png"
          alt="soonduck"
        />
      </button>
    </h1>
  );
};
