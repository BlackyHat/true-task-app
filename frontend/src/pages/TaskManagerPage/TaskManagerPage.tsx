import { useContext } from 'react';
import * as React from 'react';
import { useToggle } from '../../hooks/useToggle';
import { AuthContext } from '../../context/AuthContext';

import Copyright from '../../components/Copyright/Copyright';
import BasicModal from '../../components/BasicModal/BasicModal';
import { useParams, useNavigate } from 'react-router-dom';

import LogoutIcon from '@mui/icons-material/Logout';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TaskList from '../../components/TaskList/TaskList';
import TaskEdit from '../../components/TaskEdit/TaskEdit';
const defaultTheme = createTheme();

export const TaskManagerPage = () => {
  const { logout } = useContext(AuthContext);
  const addTask = useToggle();

  const { categoryId } = useParams();
  console.log('🚀 ~ TaskManagerPage ~ categoryId:', categoryId);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative" sx={{ textAlign: 'center', mx: 'auto' }}>
        <Toolbar sx={{ textAlign: 'center', mx: 'auto', gap: '128px' }}>
          <Typography variant="h5" noWrap>
            TASKS
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
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
            <BasicModal name="Add Task" action={addTask}>
              <TaskEdit
                handleClose={addTask.onClose}
                type="add"
                categoryId={categoryId}
              />
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
          {categoryId && <TaskList categoryId={categoryId} />}
        </Container>
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
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
