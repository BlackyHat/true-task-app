import { gql } from '../../__generated__';

export const ADD_TASK = gql(`mutation AddTask($createTask: CreateTaskInput!) {
    addTask(createTask: $createTask) {
        dateEnd
        dateStart
        description
        id
        name
    }
  }
`);
export const UPDATE_TASK =
  gql(`mutation UpdateTask($updateTask: UpdateTaskInput!) {
    updateTask(updateTask: $updateTask) {
        dateEnd
        dateStart
        id
        name
    }
  }
`);

export const DELETE_TASK =
  gql(`mutation DeleteTask($categoryId: Int!, $taskId: Int!) {
    deleteTask(categoryId: $categoryId, taskId: $taskId)
  }
`);
