import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { TextField } from 'formik-mui';
import { Formik, Form, Field } from 'formik';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../qraphql/mutations/user.mutations';
import { loginUserSchema } from '../../validation/validationYup';
import { initLoginFormValues } from '../../constants/constants';

import { Button, LinearProgress } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [loginUser] = useMutation(LOGIN_USER);

  return (
    <Formik
      initialValues={initLoginFormValues}
      validationSchema={loginUserSchema}
      onSubmit={async (values, { setErrors }) => {
        try {
          const { data } = await loginUser({
            variables: {
              loginUserInput: values,
            },
          });
          if (data?.login) {
            const { user, token } = data?.login;
            login({ user, token });
          }
        } catch (error: any) {
          console.log('LOGIN VALUES', error.id);
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
            Log In
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
