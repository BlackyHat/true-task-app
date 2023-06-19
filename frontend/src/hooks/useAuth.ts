import { useEffect } from 'react';
import { useUser } from './useUser';
import { useLocalStorage } from './useLocalStorage';
import { IUser } from '../helpers/interfaces';

export const useAuth = () => {
  const { user, addUser, removeUser } = useUser();
  const { getItem } = useLocalStorage();

  useEffect(() => {
    const user = getItem('user');
    if (user) {
      addUser(JSON.parse(user));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = (user: IUser) => {
    addUser(user);
  };

  const logout = () => {
    removeUser();
  };

  const isLoggedIn = user ? true : false;

  return { isLoggedIn, user, login, logout };
};
//   return { isLoggedIn, token, user, isRefreshing };
