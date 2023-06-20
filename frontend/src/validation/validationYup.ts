import * as Yup from 'yup';
import moment from 'moment';
import { UserRoles } from '../helpers/enums';

export const registerUserSchema = Yup.object().shape({
  role: Yup.mixed().oneOf(Object.values(UserRoles), 'Invalid role!'),
  email: Yup.string().email('Invalid email!').required('Required!'),
  password: Yup.string()
    .min(6, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol')
    .required('Required!'),
});

export const loginUserSchema = Yup.object().shape({
  email: Yup.string().email('This is an ERROR email').required('Required!'),
  password: Yup.string()
    .min(6, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol')
    .required('Required!'),
});

export const createTaskSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(120, 'Too Long!')
    .required('Type something title')
    .trim(),
  dateStart: Yup.string().required('Set start time'),
  dateEnd: Yup.string()
    .required('Set end time')
    .test(
      'is-greater',
      'End time must be greater than or equal start date',
      function (value, { parent }) {
        const dateStart = parent.dateStart;
        if (!dateStart || !value) {
          return true;
        }
        const dateEnd = moment(value, 'DD:MM:YYYY');
        const diff = dateEnd.diff(moment(dateStart, 'DD:MM:YY'), 'days');
        return diff >= 0;
      }
    ),
  description: Yup.string().min(6, 'Too Short!').max(480, 'Too Long!'),
});
