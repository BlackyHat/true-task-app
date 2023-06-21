import * as React from 'react';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import CategoryForm from '../CategoryForm/CategoryForm';

interface Props {
  handleClose: () => void;
  categoryId?: string;
  type: 'add' | 'edit';
  closeNested?: () => void;
}
const CategoryEdit: React.FC<Props> = ({
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

  console.log('TYPE', type);
  return (
    <Box>
      <Typography variant="h5" sx={{ my: 3 }}>
        {isAdd ? 'Add' : 'Edit'} Developers category
      </Typography>
      <CategoryForm type={type} handleClose={onClose} categoryId={categoryId} />
    </Box>
  );
};

export default CategoryEdit;
