import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useMutation } from '@apollo/client';
import { DELETE_TASK } from '../../qraphql/mutations/tasks.mutations';

interface Props {
  handleClose: () => void;
  categoryId: string;
  taskId: string;
}

const TaskDelete: React.FC<Props> = ({ categoryId, taskId, handleClose }) => {
  const [deleteTask] = useMutation(DELETE_TASK);

  const handleDelete = () => {
    deleteTask({
      variables: {
        categoryId: Number(categoryId),
        taskId: Number(taskId),
      },
    });
    handleClose && handleClose();
  };
  return (
    <Box>
      <Typography variant="h5" sx={{ textAlign: 'center' }}>
        Are you sure for deleting this category?
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
