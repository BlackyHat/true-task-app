import React from 'react';
import moment from 'moment';
import { CategoryItemProps } from '../../helpers/interfaces';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CategoryActions from '../CategoryActions/CategoryActions';

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  const { id, name, tasksCount, dateCreated } = category;

  return (
    <Grid item xs={12} sm={6} md={6}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexGrow: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography variant="h5" noWrap>
              {name}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5">{tasksCount} tasks</Typography>
            <Typography variant="h5">
              {moment(dateCreated).format('DD-MM-YYYY')}
            </Typography>
          </Box>
        </CardContent>
        <CategoryActions id={id} />
      </Card>
    </Grid>
  );
};

export default CategoryItem;
