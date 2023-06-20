import { createContext, useReducer, ReactNode } from 'react';
import {
  IUserData,
  IAuthContext,
  IAuthAction,
  ILoginData,
} from '../helpers/interfaces';

const initialState: IUserData = {
  user: null,
  token: null,
  isLoggedIn: false,
};

if (localStorage.getItem('token')) {
  initialState.token = localStorage.getItem('token');
  initialState.isLoggedIn = true;
}

export const AuthContext = createContext<IAuthContext>({
  user: null,
  token: null,
  isLoggedIn: false,
  login: (userData: ILoginData) => {},
  logout: () => {},
});

function authReducer(state: IUserData, action: IAuthAction): IUserData {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload?.user || null,
        token: action.payload?.token || null,
        isLoggedIn: true,
      };
    case 'LOGOUT':
      return { ...state, user: null, token: null, isLoggedIn: false };

    default:
      return state;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (userData: ILoginData) => {
    localStorage.setItem('token', userData.token);
    dispatch({
      type: 'LOGIN',
      payload: userData,
    });
  };
  const logout = () => {
    localStorage.removeItem('token');
    dispatch({
      type: 'LOGOUT',
    });
  };
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isLoggedIn: state.isLoggedIn,
        token: state.token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
