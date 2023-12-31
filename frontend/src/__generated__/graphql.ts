/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

/** The Categories object */
export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  dateCreated: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  tasks?: Maybe<TaskEntity>;
  user: UserEntity;
};

/** The Categories object */
export type CategoryResponse = {
  __typename?: 'CategoryResponse';
  dateCreated: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  tasks?: Maybe<TaskEntity>;
  tasksCount: Scalars['Int']['output'];
  user: UserEntity;
};

export type CreateCategoryInput = {
  name: Scalars['String']['input'];
};

export type CreateTaskInput = {
  categoryId: Scalars['Float']['input'];
  dateEnd: Scalars['DateTime']['input'];
  dateStart: Scalars['DateTime']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

/** The Login object */
export type LoginResponse = {
  __typename?: 'LoginResponse';
  token: Scalars['String']['output'];
  user: UserEntity;
};

export type LoginUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCategory: CategoryEntity;
  addTask: TaskEntity;
  deleteCategory: Scalars['Float']['output'];
  deleteTask: Scalars['Float']['output'];
  login: LoginResponse;
  register: RegisterResponse;
  updateCategory: CategoryEntity;
  updateTask: TaskEntity;
};


export type MutationAddCategoryArgs = {
  createCategory: CreateCategoryInput;
};


export type MutationAddTaskArgs = {
  createTask: CreateTaskInput;
};


export type MutationDeleteCategoryArgs = {
  categoryId: Scalars['Int']['input'];
};


export type MutationDeleteTaskArgs = {
  categoryId: Scalars['Int']['input'];
  taskId: Scalars['Int']['input'];
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationRegisterArgs = {
  registerUserInput: RegisterUserInput;
};


export type MutationUpdateCategoryArgs = {
  updateCategory: UpdateCategoryInput;
};


export type MutationUpdateTaskArgs = {
  updateTask: UpdateTaskInput;
};

export type Query = {
  __typename?: 'Query';
  allCategories: Array<CategoryResponse>;
  allTasks: Array<TaskEntity>;
  categoryById: CategoryEntity;
  profile: UserEntity;
  taskById: TaskEntity;
};


export type QueryAllTasksArgs = {
  categoryId: Scalars['Int']['input'];
};


export type QueryCategoryByIdArgs = {
  categoryId: Scalars['Int']['input'];
};


export type QueryTaskByIdArgs = {
  categoryId: Scalars['Int']['input'];
  taskId: Scalars['Int']['input'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  token: Scalars['String']['output'];
  user: UserEntity;
};

export type RegisterUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role?: Scalars['String']['input'];
};

/** The Tasks object */
export type TaskEntity = {
  __typename?: 'TaskEntity';
  category: CategoryEntity;
  dateEnd: Scalars['DateTime']['output'];
  dateStart: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type UpdateCategoryInput = {
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type UpdateTaskInput = {
  categoryId: Scalars['Float']['input'];
  dateEnd: Scalars['DateTime']['input'];
  dateStart: Scalars['DateTime']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

/** The Users object */
export type UserEntity = {
  __typename?: 'UserEntity';
  categories: CategoryEntity;
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  password: Scalars['String']['output'];
  role: Scalars['String']['output'];
};

export type AddCategoryMutationVariables = Exact<{
  createCategory: CreateCategoryInput;
}>;


export type AddCategoryMutation = { __typename?: 'Mutation', addCategory: { __typename?: 'CategoryEntity', id: number, name: string, dateCreated: any } };

export type UpdateCategoryMutationVariables = Exact<{
  updateCategory: UpdateCategoryInput;
}>;


export type UpdateCategoryMutation = { __typename?: 'Mutation', updateCategory: { __typename?: 'CategoryEntity', dateCreated: any, id: number, name: string } };

export type DeleteCategoryMutationVariables = Exact<{
  categoryId: Scalars['Int']['input'];
}>;


export type DeleteCategoryMutation = { __typename?: 'Mutation', deleteCategory: number };

export type AddTaskMutationVariables = Exact<{
  createTask: CreateTaskInput;
}>;


export type AddTaskMutation = { __typename?: 'Mutation', addTask: { __typename?: 'TaskEntity', dateEnd: any, dateStart: any, description?: string | null, id: number, name: string } };

export type UpdateTaskMutationVariables = Exact<{
  updateTask: UpdateTaskInput;
}>;


export type UpdateTaskMutation = { __typename?: 'Mutation', updateTask: { __typename?: 'TaskEntity', dateEnd: any, dateStart: any, id: number, name: string } };

export type DeleteTaskMutationVariables = Exact<{
  categoryId: Scalars['Int']['input'];
  taskId: Scalars['Int']['input'];
}>;


export type DeleteTaskMutation = { __typename?: 'Mutation', deleteTask: number };

export type RegisterMutationVariables = Exact<{
  registerUserInput: RegisterUserInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'RegisterResponse', token: string, user: { __typename?: 'UserEntity', email: string, id: number, role: string } } };

export type LoginMutationVariables = Exact<{
  loginUserInput: LoginUserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', token: string, user: { __typename?: 'UserEntity', email: string, id: number, role: string } } };

export type AllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCategoriesQuery = { __typename?: 'Query', allCategories: Array<{ __typename?: 'CategoryResponse', id: number, name: string, tasksCount: number, dateCreated: any }> };

export type CategoryByIdQueryVariables = Exact<{
  categoryId: Scalars['Int']['input'];
}>;


export type CategoryByIdQuery = { __typename?: 'Query', categoryById: { __typename?: 'CategoryEntity', dateCreated: any, id: number, name: string } };

export type AllTasksQueryVariables = Exact<{
  categoryId: Scalars['Int']['input'];
}>;


export type AllTasksQuery = { __typename?: 'Query', allTasks: Array<{ __typename?: 'TaskEntity', id: number, name: string, description?: string | null, dateStart: any, dateEnd: any }> };

export type TaskByIdQueryVariables = Exact<{
  categoryId: Scalars['Int']['input'];
  taskId: Scalars['Int']['input'];
}>;


export type TaskByIdQuery = { __typename?: 'Query', taskById: { __typename?: 'TaskEntity', id: number, name: string, description?: string | null, dateStart: any, dateEnd: any } };


export const AddCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createCategory"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCategoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createCategory"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createCategory"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"dateCreated"}}]}}]}}]} as unknown as DocumentNode<AddCategoryMutation, AddCategoryMutationVariables>;
export const UpdateCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateCategory"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCategoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateCategory"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateCategory"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dateCreated"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UpdateCategoryMutation, UpdateCategoryMutationVariables>;
export const DeleteCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"categoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}}}]}]}}]} as unknown as DocumentNode<DeleteCategoryMutation, DeleteCategoryMutationVariables>;
export const AddTaskDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddTask"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createTask"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTaskInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addTask"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createTask"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createTask"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dateEnd"}},{"kind":"Field","name":{"kind":"Name","value":"dateStart"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<AddTaskMutation, AddTaskMutationVariables>;
export const UpdateTaskDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTask"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateTask"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTaskInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTask"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateTask"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateTask"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dateEnd"}},{"kind":"Field","name":{"kind":"Name","value":"dateStart"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UpdateTaskMutation, UpdateTaskMutationVariables>;
export const DeleteTaskDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTask"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"taskId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTask"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"categoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}}},{"kind":"Argument","name":{"kind":"Name","value":"taskId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"taskId"}}}]}]}}]} as unknown as DocumentNode<DeleteTaskMutation, DeleteTaskMutationVariables>;
export const RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"registerUserInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"registerUserInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"registerUserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]}}]} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginUserInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginUserInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginUserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const AllCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tasksCount"}},{"kind":"Field","name":{"kind":"Name","value":"dateCreated"}}]}}]}}]} as unknown as DocumentNode<AllCategoriesQuery, AllCategoriesQueryVariables>;
export const CategoryByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CategoryById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categoryById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"categoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dateCreated"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CategoryByIdQuery, CategoryByIdQueryVariables>;
export const AllTasksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllTasks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allTasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"categoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"dateStart"}},{"kind":"Field","name":{"kind":"Name","value":"dateEnd"}}]}}]}}]} as unknown as DocumentNode<AllTasksQuery, AllTasksQueryVariables>;
export const TaskByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TaskById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"taskId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taskById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"categoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}}},{"kind":"Argument","name":{"kind":"Name","value":"taskId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"taskId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"dateStart"}},{"kind":"Field","name":{"kind":"Name","value":"dateEnd"}}]}}]}}]} as unknown as DocumentNode<TaskByIdQuery, TaskByIdQueryVariables>;