export interface BaseOptions {
  onSuccess?: (data?: any) => void;
  onError?: (data?: any) => void;
}

export interface baseUser {
  name: string;
  pswd: string;
}

export interface User extends baseUser {}
export interface newUser extends BaseOptions, baseUser {}
export interface RegisterUser extends BaseOptions, baseUser {}
export interface LoginUser extends BaseOptions, baseUser {}

export interface Userslice {
  user: User | null;
  loading: boolean;
  error: Error | null;
}

export const initialState: Userslice = {
  user: null,
  loading: false,
  error: null,
};
