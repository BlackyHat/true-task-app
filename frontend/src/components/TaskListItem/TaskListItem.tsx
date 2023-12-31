import React from 'react';
import moment from 'moment';
import { useToggle } from '../../hooks/useToggle';

import BasicModal from '../BasicModal/BasicModal';
import TaskEdit from '../TaskEdit/TaskEdit';
import TaskDelete from '../TaskDelete/TaskDelete';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ITaskListItemProps } from '../../helpers/interfaces';

const TaskListItem: React.FC<ITaskListItemProps> = ({ task, categoryId }) => {
  const { id: taskId, name, dateStart, dateEnd } = task;
  const editModal = useToggle();
  const deleteModal = useToggle();

  return (
    <Grid item xs={12} sm={6} md={6}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: ' #adc0950f',
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexGrow: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography variant="h5" noWrap sx={{ mb: 3 }}>
              {name}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              gap: '8px',
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                background: '#5a5a7282',
                color: 'white',
                padding: 1,
                borderRadius: '8px',
              }}
            >
              Date Start {moment(dateStart).format('DD-MM-YYYY')}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                background: '#5a5a7282',
                color: 'white',
                padding: 1,
                borderRadius: '8px',
              }}
            >
              Date End {moment(dateEnd).format('DD-MM-YYYY')}
            </Typography>
          </Box>
        </CardContent>
        <Box
          sx={{
            mx: 'auto',
            my: 3,
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'flex-end',
            gap: '12px',
            background: '#c7c7c782',
            padding: 1,
            borderRadius: '8px',
          }}
        >
          <BasicModal name="edit" action={editModal}>
            <TaskEdit
              handleClose={editModal.onClose}
              type="edit"
              categoryId={categoryId}
              task={task}
            />
          </BasicModal>
          <BasicModal name="delete" action={deleteModal}>
            <TaskDelete
              handleClose={deleteModal.onClose}
              categoryId={categoryId}
              taskId={taskId}
            />
          </BasicModal>
        </Box>
      </Card>
    </Grid>
  );
};

export default TaskListItem;
