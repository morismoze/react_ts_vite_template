export type AuthUser = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  bio: string;
  role: 'ADMIN' | 'USER';
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
