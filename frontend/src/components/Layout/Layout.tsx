import { Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

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
      <AppBar position="relative" sx={{ textAlign: 'center', mx: 'auto' }}>
        <Toolbar sx={{ textAlign: 'center', mx: 'auto', gap: '128px' }}>
          <Typography variant="h5" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 4 }} maxWidth="md">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
