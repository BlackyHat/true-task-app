import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { UserRoles } from '../../helpers/enums';

export const LoginPage = () => {
  const { login } = useAuth();

  const handleLogin = () => {
    login({
      id: '1',
      email: 'john.doe@email.com',
      role: UserRoles.USER,
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
