import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import AddTaskIcon from '@mui/icons-material/AddTask';

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

interface Props {
  name: string;
  action: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    toggle: () => void;
  };
  children: React.ReactNode;
}

const BasicModal: React.FC<Props> = ({ name, action, children }) => {
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
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
};
export default BasicModal;
