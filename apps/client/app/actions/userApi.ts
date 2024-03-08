import {
  GetUserAPIResponse,
  HistoryAPIResponse,
  SignInAPIResponse,
  SignInFormData,
  SignUpFormData,
  UserDocument,
} from '@repo/shared';
import customFetch from './customFetch';
import APP_ROUTER from '../lib/config/router';
import { revalidateTag } from 'next/cache';

export const signIn = (formData: SignInFormData) => {
  return customFetch<SignInAPIResponse>('/auth/sign-in', {
    method: 'POST',
    body: JSON.stringify(formData),
    cache: 'no-cache',
  });
};

export const signUp = (formData: SignUpFormData) => {
  return customFetch('/auth/sign-up', {
    method: 'POST',
    body: JSON.stringify(formData),
    cache: 'no-cache',
  });
};

export const getUser = () => {
  return customFetch<GetUserAPIResponse>(
    '/user/profile',
    {
      method: 'GET',
      next: {
        path: APP_ROUTER.PROFILE,
      },
    },
    true
  );
};

export const verifyAccount = (verify_code: string, email: string) => {
  return customFetch('/auth/verify/' + verify_code + '/' + email, {
    method: 'GET',
    cache: 'no-cache',
  });
};

export const getHistory = async (query = '') => {
  let url = `/user/history?${query}`;

  return await customFetch<HistoryAPIResponse>(
    url,
    {
      method: 'GET',
      next: {
        tags: ['history'],
      },
    },
    true
  );
};
