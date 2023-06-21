import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useMutation } from '@apollo/client';
import { DELETE_CATEGORY } from '../../qraphql/mutations/categories.mutations';

interface Props {
  handleClose: () => void;
  categoryId: string;
  closeNested: () => void;
}

const CategoryDeletePopup: React.FC<Props> = ({
  categoryId,
  handleClose,
  closeNested,
}) => {
  const [deleteCategory] = useMutation(DELETE_CATEGORY);

  const handleDelete = () => {
    //TODO: check fixes by @RESPONCE DOES NOT WORK BEFORE service from bd
    deleteCategory({
      variables: { categoryId: Number(categoryId) },
    });
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

export default CategoryDeletePopup;
