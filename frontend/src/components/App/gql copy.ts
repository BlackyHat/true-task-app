/* eslint-disable */
import * as types from '../../__generated__/graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  'mutation AddCategory($createCategory: CreateCategoryInput!) {\n   addCategory(createCategory: $createCategory) {\n        id\n        name\n        dateCreated\n    }\n  }\n':
    types.AddCategoryDocument,
  'mutation UpdateCategory($updateCategory: UpdateCategoryInput!) {\n    updateCategory(updateCategory: $updateCategory) {\n          dateCreated\n          id\n          name\n    }\n  }\n':
    types.UpdateCategoryDocument,
  'mutation DeleteCategory($categoryId: Float!) {\n    deleteCategory(categoryId: $categoryId)\n  }\n':
    types.DeleteCategoryDocument,
  'mutation AddTask($createTask: CreateTaskInput!) {\n    addTask(createTask: $createTask) {\n        dateEnd\n        dateStart\n        description\n        id\n        name\n    }\n  }\n':
    types.AddTaskDocument,
  'mutation UpdateTask($updateTask: UpdateTaskInput!) {\n    updateTask(updateTask: $updateTask) {\n        dateEnd\n        dateStart\n        id\n        name\n    }\n  }\n':
    types.UpdateTaskDocument,
  'mutation DeleteTask($categoryId: Float!, $taskId: Float!) {\n    deleteTask(categoryId: $categoryId, taskId: $taskId)\n  }\n':
    types.DeleteTaskDocument,
  'mutation Register($registerUserInput: RegisterUserInput!) {\n    register(registerUserInput: $registerUserInput) {\n      token\n      user {\n        email\n        id\n        role\n      }\n    }\n  }\n':
    types.RegisterDocument,
  'mutation Login($loginUserInput: LoginUserInput!) {\n    login(loginUserInput: $loginUserInput) {\n      token\n      user {\n        email\n        id\n        role\n      }\n    }\n  }\n':
    types.LoginDocument,
  'query AllCategories{\n    allCategories{\n        id\n        name\n        tasksCount\n        dateCreated\n    }\n  }\n':
    types.AllCategoriesDocument,
  'query CategoryById ($categoryId: Float!){\n    categoryById (categoryId: $categoryId){\n        dateCreated\n        id\n        name\n    }\n  }\n':
    types.CategoryByIdDocument,
  'query AllTasks($categoryId: Float!) {\n    allTasks (categoryId: $categoryId){\n        id\n        name\n        description\n        dateStart\n        dateEnd\n  }\n  }\n':
    types.AllTasksDocument,
  'query TaskById ($categoryId: Float!,$taskId: Float!){\n    taskById (categoryId: $categoryId, taskId: $taskId){\n        id\n        name\n        description\n        dateStart\n        dateEnd\n    }\n  }\n':
    types.TaskByIdDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'mutation AddCategory($createCategory: CreateCategoryInput!) {\n   addCategory(createCategory: $createCategory) {\n        id\n        name\n        dateCreated\n    }\n  }\n'
): (typeof documents)['mutation AddCategory($createCategory: CreateCategoryInput!) {\n   addCategory(createCategory: $createCategory) {\n        id\n        name\n        dateCreated\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'mutation UpdateCategory($updateCategory: UpdateCategoryInput!) {\n    updateCategory(updateCategory: $updateCategory) {\n          dateCreated\n          id\n          name\n    }\n  }\n'
): (typeof documents)['mutation UpdateCategory($updateCategory: UpdateCategoryInput!) {\n    updateCategory(updateCategory: $updateCategory) {\n          dateCreated\n          id\n          name\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'mutation DeleteCategory($categoryId: Float!) {\n    deleteCategory(categoryId: $categoryId)\n  }\n'
): (typeof documents)['mutation DeleteCategory($categoryId: Float!) {\n    deleteCategory(categoryId: $categoryId)\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'mutation AddTask($createTask: CreateTaskInput!) {\n    addTask(createTask: $createTask) {\n        dateEnd\n        dateStart\n        description\n        id\n        name\n    }\n  }\n'
): (typeof documents)['mutation AddTask($createTask: CreateTaskInput!) {\n    addTask(createTask: $createTask) {\n        dateEnd\n        dateStart\n        description\n        id\n        name\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'mutation UpdateTask($updateTask: UpdateTaskInput!) {\n    updateTask(updateTask: $updateTask) {\n        dateEnd\n        dateStart\n        id\n        name\n    }\n  }\n'
): (typeof documents)['mutation UpdateTask($updateTask: UpdateTaskInput!) {\n    updateTask(updateTask: $updateTask) {\n        dateEnd\n        dateStart\n        id\n        name\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'mutation DeleteTask($categoryId: Float!, $taskId: Float!) {\n    deleteTask(categoryId: $categoryId, taskId: $taskId)\n  }\n'
): (typeof documents)['mutation DeleteTask($categoryId: Float!, $taskId: Float!) {\n    deleteTask(categoryId: $categoryId, taskId: $taskId)\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'mutation Register($registerUserInput: RegisterUserInput!) {\n    register(registerUserInput: $registerUserInput) {\n      token\n      user {\n        email\n        id\n        role\n      }\n    }\n  }\n'
): (typeof documents)['mutation Register($registerUserInput: RegisterUserInput!) {\n    register(registerUserInput: $registerUserInput) {\n      token\n      user {\n        email\n        id\n        role\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'mutation Login($loginUserInput: LoginUserInput!) {\n    login(loginUserInput: $loginUserInput) {\n      token\n      user {\n        email\n        id\n        role\n      }\n    }\n  }\n'
): (typeof documents)['mutation Login($loginUserInput: LoginUserInput!) {\n    login(loginUserInput: $loginUserInput) {\n      token\n      user {\n        email\n        id\n        role\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'query AllCategories{\n    allCategories{\n        id\n        name\n        tasksCount\n        dateCreated\n    }\n  }\n'
): (typeof documents)['query AllCategories{\n    allCategories{\n        id\n        name\n        tasksCount\n        dateCreated\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'query CategoryById ($categoryId: Float!){\n    categoryById (categoryId: $categoryId){\n        dateCreated\n        id\n        name\n    }\n  }\n'
): (typeof documents)['query CategoryById ($categoryId: Float!){\n    categoryById (categoryId: $categoryId){\n        dateCreated\n        id\n        name\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'query AllTasks($categoryId: Float!) {\n    allTasks (categoryId: $categoryId){\n        id\n        name\n        description\n        dateStart\n        dateEnd\n  }\n  }\n'
): (typeof documents)['query AllTasks($categoryId: Float!) {\n    allTasks (categoryId: $categoryId){\n        id\n        name\n        description\n        dateStart\n        dateEnd\n  }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'query TaskById ($categoryId: Float!,$taskId: Float!){\n    taskById (categoryId: $categoryId, taskId: $taskId){\n        id\n        name\n        description\n        dateStart\n        dateEnd\n    }\n  }\n'
): (typeof documents)['query TaskById ($categoryId: Float!,$taskId: Float!){\n    taskById (categoryId: $categoryId, taskId: $taskId){\n        id\n        name\n        description\n        dateStart\n        dateEnd\n    }\n  }\n'];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
