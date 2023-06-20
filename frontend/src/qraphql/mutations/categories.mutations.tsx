import { gql } from '../../__generated__';

export const ADD_CATEGORY =
  gql(`mutation AddCategory($createCategory: CreateCategoryInput!) {
   addCategory(createCategory: $createCategory) {
        id
        name
        dateCreated
    }
  }
`);
export const UPDATE_CATEGORY =
  gql(`mutation UpdateCategory($updateCategory: UpdateCategoryInput!) {
    updateCategory(updateCategory: $updateCategory) {
          dateCreated
          id
          name
    }
  }
`);
export const DELETE_CATEGORY =
  gql(`mutation DeleteCategory($categoryId: Float!) {
    deleteCategory(categoryId: $categoryId)
  }
`);
