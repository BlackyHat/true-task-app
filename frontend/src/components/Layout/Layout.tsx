import { Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { LinearProgress } from '@mui/material';
import Copyright from '../Copyright/Copyright';

const Layout = () => {
  const location = useLocation();
  const { categoryId } = useParams();
  let title;
  if (location.pathname === '/tasks-manager') {
    title = 'Categories';
  }
  if (categoryId) {
    title = 'Task Manager';
  }
  return (
    <>
      <CssBaseline />
      <AppBar position="relative" sx={{ textAlign: 'center' }}>
        <Toolbar sx={{ textAlign: 'center', mx: 'auto', gap: '128px' }}>
          <Typography variant="h5" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ minHeight: '100vh', py: '64px' }}>
        <Suspense
          fallback={
            <LinearProgress
              sx={{ position: 'absolute', top: 0, left: 0, width: '100%' }}
            />
          }
        >
          <Outlet />
        </Suspense>
      </Container>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Success is the ability to move from failure to failure without losing
          enthusiasm. W. Churchill
        </Typography>
        <Copyright />
      </Box>
    </>
  );
};

export default Layout;
