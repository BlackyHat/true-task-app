import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { Button } from '@mui/material';

const LogoutButton = () => {
  const { logout } = useContext(AuthContext);

  return (
    <>
      <Button onClick={logout}>LOGOUT</Button>
    </>
  );
};

export default LogoutButton;
