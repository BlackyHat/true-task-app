import { UserRoles } from './enums';

export interface IRoutes {
  component: JSX.Element;
  redirectTo: string;
}

export interface IUser {
  id: string;
  email: string;
  token?: string;
  role: UserRoles;
}

export interface IAuthContext {
  user: IUser | null;
  login: (user: IUser) => void;
  logout: () => void;
}
