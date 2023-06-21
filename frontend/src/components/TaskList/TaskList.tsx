import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_TASKS } from '../../qraphql/queries/tasks.queries';

import Grid from '@mui/material/Grid';
import TaskItem from '../TaskItem/TaskItem';

export interface TaskListProp {
  categoryId: string;
}

const TaskList: React.FC<TaskListProp> = ({ categoryId }) => {
  const { data } = useQuery(GET_ALL_TASKS, {
    variables: { categoryId: Number(categoryId) },
  });

  return (
    <Grid container spacing={4}>
      {data &&
        data.allTasks.map((item) => (
          <TaskItem key={item.id} categoryId={categoryId} task={item} />
        ))}
    </Grid>
  );
};

export default TaskList;
