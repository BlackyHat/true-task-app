import * as React from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

interface Props {
  children: React.ReactNode;
  action: {
    id: string | undefined;
    open: boolean;
    anchorEl: HTMLButtonElement | null;
    handleClose: () => void;
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  };
}

const BasicPopover: React.FC<Props> = ({ action, children }) => {
  const { id, open, anchorEl, handleClose, handleClick } = action;

  return (
    <div>
      <Button
        aria-describedby={id}
        size="small"
        variant="contained"
        onClick={handleClick}
      >
        Actions
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        sx={{ p: 2 }}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        {' '}
        <Box sx={{ p: 2 }}>{children}</Box>
      </Popover>
    </div>
  );
};

export default BasicPopover;
