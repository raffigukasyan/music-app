import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { signUpSchema } from '../../consts/signUpSchema';
import { useDispatch } from 'react-redux';
import { onSignUpThunk } from '@/features/Auth/model/thunks/signUpThunk';

interface SignUpForm {
  username: string;
  email: string;
  password: string;
}

export const useSignUpForm = () => {
  const signUpForm = useForm<SignUpForm>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(signUpSchema),
    mode: 'onSubmit',
  });
  const dispatch = useDispatch();

  const onSubmit = signUpForm.handleSubmit(async (data) => {
    dispatch(onSignUpThunk(data));
  });

  return { form: signUpForm, functions: { onSubmit } };
};
