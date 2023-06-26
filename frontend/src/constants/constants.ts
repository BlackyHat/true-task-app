import { UserRoles } from '../helpers/enums';

export const initLoginFormValues = {
  email: '',
  password: '',
};
export const initRegisterFormValues = {
  email: '',
  password: '',
  role: UserRoles.USER,
};
