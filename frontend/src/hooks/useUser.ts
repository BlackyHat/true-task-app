import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useLocalStorage } from './useLocalStorage';
import { IUser } from '../helpers/interfaces';

export const useUser = () => {
  const { user, login, logout } = useContext(AuthContext);
  const { setItem } = useLocalStorage();

  const addUser = (user: IUser) => {
    login(user);
    setItem('user', JSON.stringify(user));
  };

  const removeUser = () => {
    logout();
    setItem('user', '');
  };

  return { user, addUser, removeUser };
};
