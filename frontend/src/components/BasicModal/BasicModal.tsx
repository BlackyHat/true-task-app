import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { IModalProps } from '../../helpers/interfaces';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const iconStyle = {
  position: 'absolute',
  top: '2rem',
  right: '0',
  transform: 'translate(-50%, -50%)',
};

const BasicModal: React.FC<IModalProps> = ({ name, action, children }) => {
  const isAdd = name.includes('Add');
  return (
    <div>
      <Button
        onClick={action.onOpen}
        variant={isAdd ? 'contained' : 'text'}
        startIcon={isAdd ? <AddTaskIcon /> : undefined}
        fullWidth
      >
        {name}
      </Button>
      <Modal
        open={action.isOpen}
        onClose={action.onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ borderColor: '#0000003b' }}
      >
        <Box sx={style}>
          <IconButton
            onClick={action.onClose}
            sx={iconStyle}
            aria-label="delete"
          >
            <CloseIcon />
          </IconButton>
          {children}
        </Box>
      </Modal>
    </div>
  );
};
export default BasicModal;
