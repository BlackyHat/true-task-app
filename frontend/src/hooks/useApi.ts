// // import React from 'react';
// import axios from 'axios';
// import { UseQueryResult, useQuery } from 'react-query';
// // import { UserRoles } from '../helpers/enums';
// // import { GRAPHQL_API, REGISTER } from '../constants/constants';
// import { IUser } from '../helpers/interfaces';
// // import { IUser } from '../helpers/interfaces';

// export const useApi = () => {
// //   const endpoint = 'https://localhost:3001/graphql/';
// //   const USERS_RIGISTER = `
// //   register(
// //         registerUserInput: {email: "18768627120@gmail.com", password: "876867", role: ADMIN}
// //     ) {
// //         token
// //         user {
// //             email
// //             id
// //             password
// //             role
// //         }
// //     }
// // `;

//   // const {
//   //   data: user,
//   //   isLoading,
//   //   error,
//   // }: UseQueryResult<IUser, unknown> = useQuery('launches', () => {
//   //   return axios
//   //     .post(GRAPHQL_API, { mutation: REGISTER })
//   //     .then((response) => response.data.data);
//   // });

//   // mutation Register {
//   //     register(
//   //         registerUserInput: {email: "876862710@gmail.com", password: "876867", role: ADMIN}
//   //     ) {
//   //         token
//   //         user {
//   //             email
//   //             id
//   //             password
//   //             role
//   //         }
//   //     }
//   // }

//   //   const { categories, isLoading, error } = useQuery('launches', () => {
//   //     return axios({
//   //       url: endpoint,
//   //       method: 'POST',
//   //       data: {
//   //         query: FILMS_QUERY,
//   //       },
//   //     }).then((response) => response.data.data);
//   //   });
//   //   const { data, isLoading, error } = useQuery('launches', () => {
//   //     return axios({
//   //       url: endpoint,
//   //       method: 'POST',
//   //       data: {
//   //         query: FILMS_QUERY,
//   //       },
//   //     }).then((response) => response.data.data);
//   //   });
//   //   const { tasks, isLoading, error } = useQuery('launches', () => {
//   //     return axios({
//   //       url: endpoint,
//   //       method: 'POST',
//   //       data: {
//   //         query: FILMS_QUERY,
//   //       },
//   //     }).then((response) => response.data.data);
//   //   });
//   //   const { user, isLoading, error } = useQuery('launches', () => {
//   //     return axios({
//   //       url: endpoint,
//   //       method: 'POST',
//   //       data: {
//   //         query: FILMS_QUERY,
//   //       },
//   //     }).then((response) => response.data.data);
//   //   });

//   // return { user, isLoading, error };
// };
