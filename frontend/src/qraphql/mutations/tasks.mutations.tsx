import { gql } from '../../__generated__';

export const ADD_TASK =
  gql(`mutation AddTask($createTaskInput: CreateTaskInput!) {
    addTask(createTaskInput: $createTaskInput) {
        dateEnd
        dateStart
        description
        id
        name
    }
  }
`);
export const UPDATE_TASK =
  gql(`mutation UpdateTask($updateTaskInput: UpdateTaskInput!) {
    updateTask(updateTaskInput: $updateTaskInput) {
        dateEnd
        dateStart
        id
        name
    }
  }
`);

export const DELETE_TASK =
  gql(`mutation DeleteTask($categoryId: Float!, $taskId: Float!): Float! {
    deleteTask(categoryId: $categoryId, taskId: $taskId)
  }
`);
