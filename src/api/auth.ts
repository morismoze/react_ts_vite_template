import axios from 'axios';
import { initReactQueryAuth } from 'react-query-auth';

import {
  AuthUser,
  LoginCredentialsDTO,
  RegisterCredentialsDTO,
  UserResponse,
} from './types';

const handleUserResponse = (data: UserResponse) => {
  const { jwt, user } = data;
  // set jwt to LS
  return user;
};

const loadUser = async () => {
  // if jwt exists in LS
  if (false) {
    const currentUser = await axios.get('/auth/current');
    return currentUser.data;
  }
  return null;
};

const loginFn = async (data: LoginCredentialsDTO) => {
  const response = await axios.post('/auth/login', data);
  const user = handleUserResponse(response.data);
  return user;
};

const registerFn = async (data: RegisterCredentialsDTO) => {
  const response = await axios.post('/auth/register', data);
  const user = handleUserResponse(response.data);
  return user;
};

const logoutFn = async () => {
  // clear jwt from LS
  window.location.assign(window.location.origin as unknown as string);
};

const authConfig = {
  loadUser,
  loginFn,
  registerFn,
  logoutFn,
};

export const { AuthProvider, useAuth } = initReactQueryAuth<
  AuthUser | null,
  unknown,
  LoginCredentialsDTO,
  RegisterCredentialsDTO
>(authConfig);
