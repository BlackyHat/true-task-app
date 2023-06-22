export interface ICategory {
  id: number;
  name: string | null | undefined;
  tasksCount: number;
  dateCreated: Date;
}
export interface CategoryItemProps {
  category: ICategory;
}

export interface ICategoryActionsProps {
  id: number;
}

export interface ICategoryFormProps {
  handleClose: () => void;
  type: 'add' | 'edit';
  categoryId?: number;
}
export interface ICategoryEditProps extends ICategoryFormProps {
  closeNested?: () => void;
}
export interface ICategoryDeleteProps {
  categoryId: number;
  closeNested: () => void;
  handleClose: () => void;
}

export interface ITask {
  id: number;
  name: string;
  description?: string | null | undefined;
  dateStart: Date;
  dateEnd: Date;
}
export interface ITaskFormProps {
  handleClose: () => void;
  categoryId?: number;
  task?: ITask;
  type: 'add' | 'edit';
}
export interface ITaskDeleteProps {
  handleClose: () => void;
  categoryId: number;
  taskId: number;
}
export interface ITaskEditProps extends ITaskFormProps {
  closeNested?: () => void;
}

export interface ITaskListProp {
  categoryId: number;
}

export interface ITaskListItemProps extends ITaskListProp {
  task: ITask;
}

export interface IUser {
  id?: number;
  email: string;
  role: string;
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

export interface IModalProps {
  name: string;
  action: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    toggle: () => void;
  };
  children: React.ReactNode;
}

export interface IPopoverProps {
  children: React.ReactNode;
  action: {
    id: string | undefined;
    open: boolean;
    anchorEl: HTMLButtonElement | null;
    handleClose: () => void;
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  };
}
export interface IReactDatePickerProps {
  name: string;
  initialValue?: Date;
}
export interface IRoutes {
  component: JSX.Element;
  redirectTo: string;
}
