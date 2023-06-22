import React from 'react';
import moment from 'moment';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_TASK, UPDATE_TASK } from '../../qraphql/mutations/tasks.mutations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import DatePickerField from '../DatePickerField/DatePickerField';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import { taskSchema } from '../../validation/validationYup';
import { Button, LinearProgress } from '@mui/material';
import Box from '@mui/material/Box';
import { GET_ALL_TASKS } from '../../qraphql/queries/tasks.queries';
import { ITaskFormProps } from '../../helpers/interfaces';

const TaskForm: React.FC<ITaskFormProps> = ({
  type,
  handleClose,
  categoryId,
  task,
}) => {
  const [updateTask] = useMutation(UPDATE_TASK);
  const [addTask] = useMutation(ADD_TASK);
  const { refetch } = useQuery(GET_ALL_TASKS, {
    variables: { categoryId: Number(categoryId) },
    fetchPolicy: 'no-cache',
  });

  const isAdd = type === 'add';

  const getInitData = () => {
    let initValues = {
      name: '',
      dateStart: new Date(),
      dateEnd: new Date(),
      description: '',
    };
    if (!isAdd && task) {
      const { name, dateStart, dateEnd, description } = task;
      const init = {
        ...initValues,
        name,
        dateStart: moment(dateStart).toDate(),
        dateEnd: moment(dateEnd).toDate(),
        description,
      };
      return init;
    }
    return initValues;
  };

  return (
    <Formik
      initialValues={getInitData()}
      validationSchema={taskSchema}
      onSubmit={async (values, { setErrors }) => {
        try {
          if (!isAdd && categoryId && task) {
            await updateTask({
              variables: {
                updateTask: {
                  categoryId: categoryId,
                  id: task.id,
                  dateEnd: values.dateEnd,
                  dateStart: values.dateStart,
                  description: values.description,
                  name: values.name,
                },
              },
            });
            Notify.success('Success. The task updated!');
          }
          if (isAdd && categoryId) {
            await addTask({
              variables: {
                createTask: {
                  categoryId: Number(categoryId),
                  dateEnd: moment(values.dateEnd).format('YYYY-MM-DD HH:mm:ss'),
                  dateStart: moment(values.dateStart).format(
                    'YYYY-MM-DD HH:mm:ss'
                  ),
                  description: values.description,
                  name: values.name,
                },
              },
            });
            Notify.success('Success. The new task added!');
          }
          await refetch();
          handleClose();
        } catch (error: any) {
          setErrors(error.message);
          Notify.failure('Sorry.Try some another name');
        }
      }}
    >
      {({ submitForm, setFieldValue, values, isSubmitting }) => (
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
            component={TextField}
            minRows={3}
            maxRows={6}
            fullWidth={true}
            id="outlined-multiline-static"
            multiline
            margin="dense"
            name="description"
            autoComplete="category description"
            autoFocus
            placeholder="Enter some description..."
          />
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
            <DatePickerField name="startDate" initialValue={values.dateStart} />
            <DatePickerField name="endDate" initialValue={values.dateEnd} />
          </Box>
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
