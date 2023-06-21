import * as React from 'react';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import TaskForm from '../TaskForm/TaskForm';

interface Props {
  handleClose: () => void;
  categoryId?: string;
  type: 'add' | 'edit';
  closeNested?: () => void;
  task?: {
    id: string;
    name: string;
    description?: string | null | undefined;
    dateStart?: any;
    dateEnd?: any;
  };
}

const TaskEdit: React.FC<Props> = ({
  type,
  task,
  categoryId,
  handleClose,
  closeNested,
}) => {
  const onClose = () => {
    handleClose && handleClose();
    closeNested && closeNested();
  };
  const isAdd = type === 'add';

  return (
    <Box>
      <Typography variant="h5" sx={{ my: 3 }}>
        {isAdd ? 'Add new' : 'Edit'} task category
      </Typography>
      <TaskForm
        type={type}
        task={task}
        handleClose={onClose}
        categoryId={categoryId}
      />
    </Box>
  );
};

export default TaskEdit;
