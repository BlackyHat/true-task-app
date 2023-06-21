import * as Yup from 'yup';
import { UserRoles } from '../helpers/enums';

export const loginUserSchema = Yup.object().shape({
  email: Yup.string().email('This is an ERROR email').required('Required!'),
  password: Yup.string()
    .min(6, 'Password must be 6 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol')
    .required('Required!'),
});

export const registerUserSchema = loginUserSchema.concat(
  Yup.object().shape({
    role: Yup.mixed().oneOf(Object.values(UserRoles), 'Invalid role!'),
  })
);

export const taskSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(120, 'Too Long!')
    .required('Type something name')
    .trim(),
  dateStart: Yup.string().required('Set start time'),
  dateEnd: Yup.string().required('Set end time'),
  description: Yup.string().min(6, 'Too Short!').max(480, 'Too Long!'),
});

export const categorySchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(120, 'Too Long!')
    .required('Type something title')
    .trim(),
});
