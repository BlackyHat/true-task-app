// import { useAuth } from '../../hooks/useAuth';
// import { UserRoles } from '../../helpers/enums';
//   const { login } = useAuth();
//       role: UserRoles.USER,

//       <button onClick={handleLogin}>Login</button>

import { Link as RouterLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../../components/Copyright/Copyright';
import LoginForm from '../../components/LoginForm/LoginForm';
// import { useApi } from '../../hooks/useApi';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export const LoginPage = () => {
  // const { user, isLoading, error } = useApi();
  // console.log('🚀 ~ LoginPage ~ error:', error);
  // console.log('🚀 ~ LoginPage ~ user:', user);
  // console.log('🚀 ~ LoginPage ~ isLoading:', isLoading);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log In
            </Typography>
            <Box sx={{ mt: 1 }}>
              <LoginForm />
              <Grid container>
                <Grid item>
                  <Link component={RouterLink} to="/register" variant="body2">
                    {"Don't have an account? Register"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
