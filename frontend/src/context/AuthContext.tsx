import { createContext, useReducer, ReactNode } from 'react';
import {
  IUserData,
  IAuthContext,
  IAuthAction,
  IAuthState,
} from '../helpers/interfaces';

const initialState: IAuthState = {
  user: null,
  isLoggedIn: false,
};

if (localStorage.getItem('token')) {
  initialState.user.token = localStorage.getItem('token');
  console.log('ADD TOKEN FROM LOCAL STORAGE');
}

// if (getItem('token')) {
//   const decodedToken = jwtDecode(localStorage.getItem('token'));
//   if (decodedToken.exp * 1000 < Date.now()) {
//     localStorage.removeItem('token');
//   } else {
//     initialState.user = decodedToken;
//     initialState.isLoggedIn = true;
//   }
// }

export const AuthContext = createContext<IAuthContext>({
  user: null,
  isLoggedIn: false,
  login: (userData: IUserData) => {},
  logout: () => {},
});

function authReducer(state: IAuthState, action: IAuthAction): IAuthState {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload || null };
    case 'LOGOUT':
      return { ...state, user: null };

    default:
      return state;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const isLoggedIn = state.user?.token !== null;

  const login = (userData: IUserData) => {
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
      value={{ user: state.user, isLoggedIn, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
