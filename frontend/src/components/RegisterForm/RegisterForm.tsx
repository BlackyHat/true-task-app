import { Button, LinearProgress, MenuItem, Select } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import { loginUserSchema } from '../../validation/validationYup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { UserRoles } from '../../helpers/enums';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../../qraphql/mutations/user.mutations';
import { initRegisterFormValues } from '../../constants/constants';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

const RegisterForm = () => {
  const { login } = useContext(AuthContext);
  const [registerUser] = useMutation(REGISTER_USER);

  return (
    <Formik
      initialValues={initRegisterFormValues}
      validationSchema={loginUserSchema}
      onSubmit={async (values, { setErrors }) => {
        try {
          const { data } = await registerUser({
            variables: {
              registerUserInput: values,
            },
          });
          console.log('RESPONSE', data?.register);

          if (data?.register) {
            const { user, token } = data?.register;
            login({ user, token });
          }
          // login(response?.user);
          // await dispatch(authLoginThunk(values)).unwrap();
          // Notify.success(t("notify.It's ok!"));
          // Notify.info(t('notify.Welcome to your virtual Planning Calendar'));
        } catch (error: any) {
          console.log('REGISTER VALUES', error.id);
          if (error.id === 'Auth.form.error.email.taken')
            setErrors({ email: 'auth:error.email_taken' });
          else if (error.id === 'Auth.form.error.password.taken') {
            setErrors({ password: 'auth:error.password' });
          }
        }
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Field
            component={TextField}
            margin="dense"
            required
            fullWidth={true}
            type="email"
            name="email"
            label="Email Address"
            autoComplete="email"
            autoFocus
            placeholder={'Enter email'}
          />
          <Field
            component={TextField}
            margin="dense"
            required
            fullWidth={true}
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            placeholder={'Enter password'}
          />
          <Field
            component={Select}
            margin="dense"
            required
            fullWidth={true}
            name="User role"
            placeholder="Select user role"
            defaultValue={UserRoles.USER}
          >
            <MenuItem value={UserRoles.ADMIN}>{UserRoles.ADMIN}</MenuItem>
            <MenuItem value={UserRoles.USER}>{UserRoles.USER}</MenuItem>
          </Field>
          {isSubmitting && <LinearProgress />}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth={true}
            disabled={isSubmitting}
            sx={{ mt: 3, mb: 2 }}
            onClick={submitForm}
          >
            Register{' '}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
