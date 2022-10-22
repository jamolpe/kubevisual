import { Route, Routes } from 'react-router-dom';
import PodsContainer from '../pods/PodsContainer';
import WraperContainer from '../wrapper/WrapperContainer';

import './MainContainer.scss';
const MainContainer = () => {
  return (
    <>
      <div className="body-content body-container">
        <Routes>
          <Route
            path="/"
            element={<WraperContainer component={<div> main component</div>} />}
          />
          <Route
            path="/pods"
            element={<WraperContainer component={<PodsContainer />} />}
          />
          <Route
            path="*"
            element={
              <WraperContainer component={<div>nothing to see here</div>} />
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default MainContainer;
