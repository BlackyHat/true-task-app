import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {
  ADD_CATEGORY,
  UPDATE_CATEGORY,
} from '../../qraphql/mutations/categories.mutations';
import {
  GET_ALL_CATEGORIES,
  GET_ONE_CATEGORY,
} from '../../qraphql/queries/categories.queries';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { categorySchema } from '../../validation/validationYup';
import { Button, LinearProgress } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import Box from '@mui/material/Box';
import { ICategoryFormProps } from '../../helpers/interfaces';

const CategoryForm: React.FC<ICategoryFormProps> = ({
  type,
  handleClose,
  categoryId,
}) => {
  const [updateCategory] = useMutation(UPDATE_CATEGORY);
  const [addCategory] = useMutation(ADD_CATEGORY);
  const { refetch } = useQuery(GET_ALL_CATEGORIES);

  const isAdd = type === 'add';

  const { data } = useQuery(GET_ONE_CATEGORY, {
    variables: { categoryId: Number(categoryId) },
    skip: isAdd,
  });

  const getInitData = () => {
    if (!isAdd) {
      const categoryById = data?.categoryById;
      return { name: (categoryById && categoryById.name) || '' };
    }
    return { name: '' };
  };

  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={getInitData()}
        enableReinitialize={true}
        validationSchema={categorySchema}
        onSubmit={async (values, { setErrors }) => {
          try {
            if (!isAdd && categoryId) {
              await updateCategory({
                variables: {
                  updateCategory: {
                    id: categoryId,
                    name: values.name,
                  },
                },
              });
              toast.success('Success. The category updated!');
            }
            if (isAdd) {
              await addCategory({
                variables: { createCategory: { name: values.name } },
              });
              toast.success('Success. The new category added!');
            }
            toast.success('Success. The new category added!');
            await refetch();
            handleClose();
          } catch (error: any) {
            setErrors(error.message);
            toast.error('Sorry.Try some another name');
          }
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Field
              component={TextField}
              margin="dense"
              required
              fullWidth={true}
              type="text"
              name="name"
              autoComplete="category name"
              autoFocus
              placeholder={'Enter new category name'}
            />
            {isSubmitting && <LinearProgress />}
            <Box
              sx={{
                mx: 'auto',
                my: 3,
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={isSubmitting}
                onClick={submitForm}
                fullWidth
              >
                {isAdd ? 'Add' : 'Update'}
              </Button>
              <Button fullWidth variant="outlined" onClick={handleClose}>
                Cancel
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CategoryForm;
