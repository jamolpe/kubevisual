import React from 'react';
import Login from '../../components/login/Login';
import { UserData } from '../../services/auth';
import './loginContainer.scss';

interface LoginContainerProps {
  loginUser: (userData: UserData) => void;
}

const LoginContainer = ({ loginUser }: LoginContainerProps) => {
  return (
    <div className="login-container">
      <Login loginUser={loginUser} />
    </div>
  );
};

export default LoginContainer;
