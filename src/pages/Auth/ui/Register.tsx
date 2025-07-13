import { Input } from '@/shared';
import { Button } from '@/shared/ui/Button';
import { FormField, FormLabel, Page } from '@/shared/ui/Form';

export const Register = () => {
  return (
    <Page>
      <h2 className='text-white text-center text-2xl mb-5'>Регистрация</h2>
      <div className='flex flex-col gap-y-5 my-10'>
        <FormField
          render={({ field }) => {
            <FormLabel>Логин</FormLabel>;
            <Input placeholder='Логин' {...field} />;
          }}
        ></FormField>
      </div>
      <Button className='bg-green-600 text-myWhite'>Зарегистрироваться</Button>
    </Page>
  );
};
