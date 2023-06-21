import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useToggle } from '../../hooks/useToggle';
import { AuthContext } from '../../context/AuthContext';
import TaskList from '../../components/TaskList/TaskList';
import TaskEdit from '../../components/TaskEdit/TaskEdit';
import Copyright from '../../components/Copyright/Copyright';
import BasicModal from '../../components/BasicModal/BasicModal';

import LogoutIcon from '@mui/icons-material/Logout';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const TaskManagerPage = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const addTask = useToggle();

  const { categoryId } = useParams();

  const handleBackNavigate = () => {
    navigate(`/tasks-manager`);
  };

  return (
    <>
      <Box
        sx={{
          my: 4,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Button
          size="medium"
          variant="contained"
          startIcon={<ReplyAllIcon />}
          onClick={handleBackNavigate}
        >
          Back to categories
        </Button>
        <Box sx={{ gap: '12px', display: 'flex', flexDirection: 'row' }}>
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
      </Box>
      {categoryId && <TaskList categoryId={categoryId} />}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          'Success is the ability to move from failure to failure without losing
          enthusiasm. W. Churchill'
        </Typography>
        <Copyright />
      </Box>
    </>
  );
};
