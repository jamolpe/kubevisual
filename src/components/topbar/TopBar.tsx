import { Link } from 'react-router-dom';
import './TopBar.scss';

const TopBar = () => {
  return (
    <div className="top-bar-main">
      <nav className="top-bar">
        <Link className="linkto" to="/">
          Home
        </Link>
        <Link className="linkto" to="/pods">
          Pods
        </Link>
      </nav>
    </div>
  );
};

export default TopBar;
