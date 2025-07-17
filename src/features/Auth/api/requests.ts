import { api } from '@/shared';

export const fetchSignUp = (data) => {
  return api.post('/auth/register', data);
};
