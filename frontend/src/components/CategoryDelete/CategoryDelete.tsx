import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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
  const { refetch } = useQuery(GET_ALL_CATEGORIES);

  const handleDelete = async () => {
    await deleteCategory({
      variables: { categoryId: Number(categoryId) },
    });
    await refetch();
    handleClose && handleClose();
    closeNested && closeNested();
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
