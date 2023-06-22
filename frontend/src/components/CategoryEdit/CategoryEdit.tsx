import * as React from 'react';
import CategoryForm from '../CategoryForm/CategoryForm';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ICategoryEditProps } from '../../helpers/interfaces';

const CategoryEdit: React.FC<ICategoryEditProps> = ({
  type,
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
        {isAdd ? 'Add new' : 'Edit this'} category
      </Typography>
      <CategoryForm type={type} handleClose={onClose} categoryId={categoryId} />
    </Box>
  );
};

export default CategoryEdit;
