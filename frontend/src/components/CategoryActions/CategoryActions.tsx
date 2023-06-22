import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useToggle } from '../../hooks/useToggle';
import { usePopup } from '../../hooks/usePopup';

import BasicPopover from '../BasicPopover/BasicPopover';
import BasicModal from '../BasicModal/BasicModal';
import CategoryDelete from '../CategoryDelete/CategoryDelete';

import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CategoryEdit from '../CategoryEdit/CategoryEdit';
import { ICategoryActionsProps } from '../../helpers/interfaces';

const CategoryActions: React.FC<ICategoryActionsProps> = ({ id }) => {
  const navigate = useNavigate();
  const editModal = useToggle();
  const deleteModal = useToggle();
  const popup = usePopup();

  const handleCategoryMore = (id: number) => {
    navigate(`/tasks-manager/${id}`);
  };

  return (
    <CardActions sx={{ gap: '8px' }}>
      <BasicPopover action={popup}>
        <BasicModal name="edit" action={editModal}>
          <CategoryEdit
            handleClose={editModal.onClose}
            type="edit"
            categoryId={id}
            closeNested={popup.handleClose}
          />
        </BasicModal>
        <BasicModal name="delete" action={deleteModal}>
          <CategoryDelete
            handleClose={deleteModal.onClose}
            categoryId={id}
            closeNested={popup.handleClose}
          />
        </BasicModal>
      </BasicPopover>
      <Button
        onClick={() => handleCategoryMore(id)}
        size="small"
        variant="outlined"
      >
        More
      </Button>
    </CardActions>
  );
};

export default CategoryActions;
