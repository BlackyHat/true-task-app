import * as React from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { IPopoverProps } from '../../helpers/interfaces';

const BasicPopover: React.FC<IPopoverProps> = ({ action, children }) => {
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
