export interface IRoutes {
  component: JSX.Element;
  redirectTo: string;
}
export interface CategoryItemProps {
  category: {
    id: number;
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

export interface ICategoryActionsProps {
  id: number;
}

export interface ICategoryDeleteProps {
  handleClose: () => void;
  categoryId: number;
  closeNested: () => void;
}

export interface ICategoryEditProps {
  handleClose: () => void;
  categoryId?: number;
  type: 'add' | 'edit';
  closeNested?: () => void;
}

export interface ICategoryFormProps {
  handleClose: () => void;
  categoryId?: number;
  type: 'add' | 'edit';
}

export interface IReactDatePickerProps {
  name: string;
  initialValue?: Date;
}

export interface ITaskDeleteProps {
  handleClose: () => void;
  categoryId: number;
  taskId: number;
}

export interface ITaskEditProps {
  handleClose: () => void;
  categoryId?: number;
  type: 'add' | 'edit';
  closeNested?: () => void;
  task?: {
    id: number;
    name: string;
    description?: string | null | undefined;
    dateStart?: any;
    dateEnd?: any;
  };
}

export interface ITaskFormProps {
  handleClose: () => void;
  categoryId?: number;
  task?: {
    id: number;
    name: string;
    description?: string | null | undefined;
    dateStart?: any;
    dateEnd?: any;
  };
  type: 'add' | 'edit';
}

export interface ITaskListProp {
  categoryId: number;
}

export interface ITaskListItemProps {
  task: {
    id: number;
    name: string;
    description?: string | null | undefined;
    dateStart?: any;
    dateEnd?: any;
  };
  categoryId: number;
}
