import React from 'react';
import Grid from '@mui/material/Grid';
import { useQuery } from '@apollo/client';
import { GET_ALL_TASKS } from '../../qraphql/queries/tasks.queries';

export interface TaskListProp {
  categoryId: string;
}

const TaskList: React.FC<TaskListProp> = ({ categoryId }) => {
  const { data } = useQuery(GET_ALL_TASKS, {
    variables: { categoryId: Number(categoryId) },
  });

  console.log('TASKS', data);

  return (
    <Grid container spacing={4}>
      {/* {data &&
        data.allCategories.map((item) => (
          <TaskItem key={item.id} task={item} />
        ))} */}
    </Grid>
  );
};

export default TaskList;
