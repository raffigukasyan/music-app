import { api } from '@/shared';

interface SignUpForm {
  username: string;
  email: string;
  password: string;
}

export const fetchSignUp = (data: SignUpForm) => {
  return api.post('/auth/register', data);
};
