import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
// import { GET_ONE_TASK } from '../../qraphql/queries/tasks.queries';
import moment from 'moment';
import { TextareaAutosize } from '@mui/material';
import { Button, LinearProgress } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import Box from '@mui/material/Box';
import { ADD_TASK } from '../../qraphql/mutations/tasks.mutations';
import { ITask, ITaskProp } from '../../helpers/interfaces';
interface Props {
  handleClose: () => void;
  categoryId?: string;
  task?: ITaskProp;
  type: 'add' | 'edit';
}
const TaskForm: React.FC<Props> = ({ type, handleClose, categoryId }) => {
  const isAdd = type === 'add';

  //   const [updateTask] = useMutation(UPDATE_TASK, {
  //     variables: { categoryId: Number(categoryId) },
  //
  //   });

  const [addTask] = useMutation(ADD_TASK);

  //   const { data } = useQuery(GET_ONE_TASK, {
  //     variables: { categoryId: Number(categoryId) },
  //     skip: isAdd,
  //   });

  //   const getInitData = () => {
  //     if (!isAdd) {
  //       //   const categoryById = data?.categoryById;
  //       //   return { name: (categoryById && categoryById.name) || '' };
  //     }
  //     return {
  //       name: '',
  //       tasksCount: '',
  //       dateStart: moment(Date.now()).format('DD-MM-YYYY'),
  //       dateEnd: moment(Date.now()).format('DD-MM-YYYY'),
  //       description: '',
  //     };
  //   };

  const init = {
    name: '',
    tasksCount: '',
    dateStart: moment(Date.now()).format('DD-MM-YYYY'),
    dateEnd: moment(Date.now()).format('DD-MM-YYYY'),
    description: '',
  };
  return (
    <Formik
      initialValues={init}
      //   enableReinitialize={true}
      //   validationSchema={updateCategorySchema}
      onSubmit={async (values: ITask) => {
        try {
          if (!isAdd && categoryId) {
            // await updateTask({
            //   variables: {
            //     updateCategory: { id: categoryId, name: values.name },
            //   },
            // });
          }
          if (isAdd && categoryId) {
            await addTask({
              variables: {
                createTask: {
                  categoryId: Number(categoryId),
                  dateEnd: values.dateEnd,
                  dateStart: values.dateStart,
                  description: values.description,
                  name: values.name,
                },
              },
            });
          }
          handleClose();
        } catch (error: any) {}
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
          <Field
            component={TextareaAutosize}
            minRows={3}
            maxRows={6}
            margin="dense"
            required
            fullWidth
            name="description"
            autoComplete="category description"
            autoFocus
            placeholder="Enter some description..."
          />
           <Form>
    <Field
      as="input"
      type="date"
      name="startDate"
      margin="dense"
      required
      fullWidth
      autoComplete="start date"
      autoFocus
      label="Start Date"
      inputFormat="dd-MM-yyyy" // Задаємо власний формат відображення
    />

    <Field
      as="input"
      type="date"
      name="endDate"
      margin="dense"
      required
      fullWidth
      autoComplete="end date"
      label="End Date"
      inputFormat="dd-MM-yyyy" // Задаємо власний формат відображення
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
  );
};

export default TaskForm;
