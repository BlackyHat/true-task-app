export interface IRoutes {
  component: JSX.Element;
  redirectTo: string;
}
export interface CategoryItemProps {
  category: {
    id: string;
    name?: string | null | undefined;
    tasksCount: number;
    dateCreated?: any;
  };
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

export interface IAuthContext extends IUserData {
  login: (userData: ILoginData) => void;
  logout: () => void;
}

export interface IAuthAction {
  type: 'LOGIN' | 'LOGOUT';
  payload?: IUserData;
}

export interface IUserData {
  token: string | null;
  user: IUser | null;
  isLoggedIn?: boolean;
}
export interface ILoginData {
  token: string;
  user: IUser;
}
