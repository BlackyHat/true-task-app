import { gql } from '../../__generated__';

export const GET_ALL_CATEGORIES = gql(`query AllCategories{
    allCategories{
        id
        name
        tasksCount
        dateCreated
    }
  }
`);

export const GET_ONE_CATEGORY = gql(`query CategoryById ($categoryId: Float!){
    categoryById (categoryId: $categoryId){
        dateCreated
        id
        name
    }
  }
`);
