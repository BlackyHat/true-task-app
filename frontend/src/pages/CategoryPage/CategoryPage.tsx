import { useContext } from 'react';
import { useToggle } from '../../hooks/useToggle';
import { AuthContext } from '../../context/AuthContext';

import CategoryList from '../../components/CategoryList/CategoryList';
import BasicModal from '../../components/BasicModal/BasicModal';
import CategoryEdit from '../../components/CategoryEdit/CategoryEdit';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

export const CategoryPage = () => {
  const { logout } = useContext(AuthContext);
  const addModal = useToggle();

  return (
    <Container
      sx={{
        py: 4,
        height: '70vh',
      }}
      maxWidth="md"
    >
      <Box
        sx={{
          mx: 'auto',
          my: 4,
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '12px',
          alignItems: 'center',
        }}
      >
        <BasicModal name="Add Category" action={addModal}>
          <CategoryEdit handleClose={addModal.onClose} type="add" />
        </BasicModal>
        <Button
          size="medium"
          variant="contained"
          onClick={logout}
          endIcon={<LogoutIcon />}
        >
          Log out
        </Button>
      </Box>

      <CategoryList />
    </Container>
  );
};
