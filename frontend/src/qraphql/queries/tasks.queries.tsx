import { gql } from '../../__generated__';

export const GET_ALL_TASKS = gql(`query AllTasks($categoryId: Int!) {
    allTasks (categoryId: $categoryId){
        id
        name
        description
        dateStart
        dateEnd
  }
  }
`);

export const GET_ONE_TASK =
  gql(`query TaskById ($categoryId: Int!,$taskId: Int!){
    taskById (categoryId: $categoryId, taskId: $taskId){
        id
        name
        description
        dateStart
        dateEnd
    }
  }
`);
