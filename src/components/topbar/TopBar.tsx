import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { statusSelector } from '../../store/reducers/status/status-reducer';
import Status from '../status/Status';
import './topBar.scss';

interface TopBarState {
  logged: boolean;
}

const TopBar = ({ logged }: TopBarState) => {
  const { ok, ko, warning, message } = useSelector(statusSelector);
  const getStatusType = (): string => {
    if (ok) {
      return 'ok';
    }
    if (ko) {
      return 'ko';
    }
    if (warning) {
      return 'warning';
    }
    return '';
  };
  return (
    <div className="top-bar-main">
      <nav className="top-bar">
        <Link className="linkto" to="/">
          Home
        </Link>
        {!logged && (
          <Link className="linkto" to="/login">
            Login
          </Link>
        )}
        {logged && (
          <Link className="linkto" to="/projects">
            my proyects
          </Link>
        )}
      </nav>
      <Status type={getStatusType()} message={message} />
    </div>
  );
};

export default TopBar;
