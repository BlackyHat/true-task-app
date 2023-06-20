import { gql } from '../../__generated__';

export const REGISTER_USER =
  gql(`mutation Register($registerUserInput: RegisterUserInput!) {
    register(registerUserInput: $registerUserInput) {
      token
      user {
        email
        id
        role
      }
    }
  }
`);
export const LOGIN_USER =
  gql(`mutation Login($loginUserInput: LoginUserInput!) {
    login(loginUserInput: $loginUserInput) {
      token
      user {
        email
        id
        role
      }
    }
  }
`);
