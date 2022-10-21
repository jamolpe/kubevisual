import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import TopBar from '../../components/topbar/TopBar';
import { UserData } from '../../services/auth';
import { useAppDispatch } from '../../store/hooks';
import { loginUser } from '../../store/reducers/auth/auth-actions';
import { authSelector } from '../../store/reducers/auth/auth-reducer';
import LoginContainer from '../login/LoginContainer';

import './mainContainer.scss';
const MainContainer = () => {
  const { logged, user } = useSelector(authSelector);
  const dispatch = useAppDispatch();

  return (
    <>
      <TopBar logged={logged} />

      <div className="body-content body-container">
        <Routes>
          <Route path="/" element={<div> main component</div>} />
          {!logged && (
            <Route
              path="/login"
              element={
                <LoginContainer
                  loginUser={(userData: UserData) => {
                    dispatch(loginUser(userData));
                  }}
                />
              }
            />
          )}
          {logged && (
            <>
              <Route path="/welcome" element={<div>welcome {user}</div>} />
              {/* <Route path="/projects" element={<ListAllProjectsContainer />} />
              <Route
                path="/project/create"
                element={<CreateProjectContainer />}
              />
              <Route
                path="/project/:projectId"
                element={<PTranslationsContainer />}
              /> */}
            </>
          )}
          <Route path="*" element={<div>nothing to see here</div>} />
        </Routes>
      </div>
    </>
  );
};

export default MainContainer;
