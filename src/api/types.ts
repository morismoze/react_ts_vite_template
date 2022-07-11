export type AuthUser = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'ADMIN' | 'USER';
};

export type UserResponse = {
  jwt: string;
  user: AuthUser;
};

export type LoginCredentialsDTO = {
  email: string;
  password: string;
};

export type RegisterCredentialsDTO = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type User = {
  name: string;
  surname: string;
};
