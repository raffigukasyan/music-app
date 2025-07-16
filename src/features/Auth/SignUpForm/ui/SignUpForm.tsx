import { Button } from '@/shared/ui/Button';
import { Form, FormField, Page } from '@/shared/ui/Form';
import { useSignUpForm } from '../index';

export const SignUpForm = () => {
  const { form, functions } = useSignUpForm();

  return (
    <Page>
      <h2 className='mb-5 text-2xl text-center text-white'>Регистрация</h2>
      <Form {...form}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            functions.onSubmit();
          }}
        >
          <div className='flex flex-col my-10 gap-y-2'>
            <FormField
              name='username'
              control={form.control}
              label='Введите имя'
            />
            <FormField
              name='email'
              control={form.control}
              label='Введите почту'
            />
            <FormField
              name='password'
              control={form.control}
              label='Введите пароль'
            />
          </div>
          <Button className='bg-green-600 text-myWhite' type='submit'>
            Зарегистрироваться
          </Button>
        </form>
      </Form>
    </Page>
  );
};
