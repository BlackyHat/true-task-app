export interface IRoutes {
  component: JSX.Element;
  redirectTo: string;
}

export interface IUserData {
  token: string | null;
  user: IUser;
}

export interface IUser {
  id?: string;
  email: string;
  role?: string | null | undefined;
}
export interface INewUser {
  email: string;
  password: string;
  role: string;
}

export interface IAuthContext {
  user: IUserData | null;
  isLoggedIn: boolean;
  login: (userData: IUserData) => void;
  logout: () => void;
}

export interface IAuthAction {
  type: 'LOGIN' | 'LOGOUT';
  payload?: IUserData;
}

export interface IAuthState {
  user: IUserData | null;
  isLoggedIn: boolean;
}
