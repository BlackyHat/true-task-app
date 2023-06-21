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
export interface TaskItemProps {
  task: {
    id: string;
    name?: string | null | undefined;
    dateStart?: any;
    dateEnd?: any;
    description: string;
  };
}
export interface ITask {
  name: string;
  dateStart: string;
  dateEnd: string;
  description?: string;
}
export interface ITaskProp extends ITask {
  id: string;
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
