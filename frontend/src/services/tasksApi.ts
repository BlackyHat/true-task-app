// import axios from 'axios';
// import { REGISTER } from '../qraphql/mutations/user.mutations';
// import { INewUser } from '../helpers/interfaces';

// export const taskApi = axios.create({
//   baseURL: 'http://localhost:3001/graphql',
//   headers: {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Credentials': 'true',
//     'Access-Control-Max-Age': '1800',
//     'Access-Control-Allow-Headers': 'content-type',
//     'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, PATCH, OPTIONS',
//   },
// });

// export const tokenService = {
//   set(token: string) {
//     taskApi.defaults.headers.Authorization = `Bearer ${token}`;
//     taskApi.defaults.headers['Content-Type'] = 'application/json';
//   },
//   unset() {
//     taskApi.defaults.headers.Authorization = null;
//   },
// };

// export const registerUser = async (newUser: INewUser) => {
//   const { data } = await axios.post('http://localhost:3001/graphql', {
//     query: REGISTER(newUser),
//   });

//   return data;
// };
export {};
