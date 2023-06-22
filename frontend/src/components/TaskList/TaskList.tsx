import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_TASKS } from '../../qraphql/queries/tasks.queries';

import Grid from '@mui/material/Grid';
import TaskListItem from '../TaskListItem/TaskListItem';
import { ITaskListProp } from '../../helpers/interfaces';

const TaskList: React.FC<ITaskListProp> = ({ categoryId }) => {
  const { data } = useQuery(GET_ALL_TASKS, {
    variables: { categoryId: categoryId },
  });

  return (
    <Grid container spacing={4}>
      {data &&
        data.allTasks.map((item) => (
          <TaskListItem key={item.id} categoryId={categoryId} task={item} />
        ))}
    </Grid>
  );
};

export default TaskList;
