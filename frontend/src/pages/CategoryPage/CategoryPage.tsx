import { useContext } from 'react';
import * as React from 'react';
import { useToggle } from '../../hooks/useToggle';
import { AuthContext } from '../../context/AuthContext';

import Copyright from '../../components/Copyright/Copyright';
import CategoryList from '../../components/CategoryList/CategoryList';
import BasicModal from '../../components/BasicModal/BasicModal';
import CategoryEdit from '../../components/CategoryEdit/CategoryEdit';

import LogoutIcon from '@mui/icons-material/Logout';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export const CategoryPage = () => {
  const { logout } = useContext(AuthContext);
  const addModal = useToggle();

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative" sx={{ textAlign: 'center', mx: 'auto' }}>
        <Toolbar sx={{ textAlign: 'center', mx: 'auto', gap: '128px' }}>
          <Typography variant="h5" noWrap>
            CATEGORIES
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container sx={{ py: 4 }} maxWidth="md">
          <Box
            sx={{
              mx: 'auto',
              my: 4,
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '12px',
              alignItems: 'center',
            }}
          >
            <BasicModal name="Add Category" action={addModal}>
              <CategoryEdit handleClose={addModal.onClose} type="add" />
            </BasicModal>
            <Button
              size="medium"
              variant="contained"
              onClick={logout}
              endIcon={<LogoutIcon />}
            >
              Log out
            </Button>
          </Box>

          <CategoryList />
        </Container>
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom></Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
    </ThemeProvider>
  );
};
