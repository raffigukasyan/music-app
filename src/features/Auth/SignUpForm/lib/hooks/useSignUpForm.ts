import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { signUpSchema } from '../../consts/signUpSchema';

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

  const onSubmit = signUpForm.handleSubmit(async (data) => {
    //const resp = await fetchRegister(data);
    //console.log(resp);
  });

  return { form: signUpForm, functions: { onSubmit } };
};
