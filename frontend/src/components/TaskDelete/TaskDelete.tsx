import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { useMutation, useQuery } from '@apollo/client';
import { DELETE_TASK } from '../../qraphql/mutations/tasks.mutations';
import { GET_ALL_TASKS } from '../../qraphql/queries/tasks.queries';
import { ITaskDeleteProps } from '../../helpers/interfaces';

const TaskDelete: React.FC<ITaskDeleteProps> = ({
  categoryId,
  taskId,
  handleClose,
}) => {
  const [deleteTask] = useMutation(DELETE_TASK);
  const { refetch } = useQuery(GET_ALL_TASKS, {
    variables: { categoryId: categoryId },
    fetchPolicy: 'no-cache',
  });

  const handleDelete = async () => {
    deleteTask({
      variables: {
        categoryId: categoryId,
        taskId: taskId,
      },
    });
    await refetch();
    Notify.warning('Success. The task deleted!');
    handleClose && handleClose();
  };
  return (
    <Box>
      <Typography variant="h5" sx={{ textAlign: 'center' }}>
        Are you sure for deleting this task?
      </Typography>
      <Box
        sx={{
          mx: 'auto',
          my: 3,
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <Button size="small" variant="contained" onClick={handleDelete}>
          Delete
        </Button>
        <Button size="small" variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default TaskDelete;
