import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { useMutation, useQuery } from '@apollo/client';
import { DELETE_CATEGORY } from '../../qraphql/mutations/categories.mutations';
import { GET_ALL_CATEGORIES } from '../../qraphql/queries/categories.queries';
import { ICategoryDeleteProps } from '../../helpers/interfaces';

const CategoryDelete: React.FC<ICategoryDeleteProps> = ({
  categoryId,
  handleClose,
  closeNested,
}) => {
  const [deleteCategory] = useMutation(DELETE_CATEGORY);
  const { refetch } = useQuery(GET_ALL_CATEGORIES, { fetchPolicy: 'no-cache' });

  const handleDelete = async () => {
    await deleteCategory({
      variables: { categoryId: categoryId },
    });
    await refetch();
    Notify.warning('Success. The task deleted!');
    handleClose && handleClose();
    closeNested && closeNested();
  };
  return (
    <Box>
      <Typography variant="h5" sx={{ textAlign: 'center' }}>
        Are you sure you want to delete this category? All tasks in this
        category will be also be deleted!
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
        <Button variant="contained" onClick={handleDelete}>
          Delete
        </Button>
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default CategoryDelete;
