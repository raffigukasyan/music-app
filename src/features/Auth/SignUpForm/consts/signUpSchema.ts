import * as zod from 'zod';

export const signUpSchema = zod.object({
  username: zod
    .string()
    .min(3, { message: 'Минимум 3 символа' })
    .max(30, { message: 'Слишком длинный текст' }),
  email: zod.email({ message: 'Почта недействительный' }),
  password: zod.string().min(5, { message: 'Должно быть мин 5 символов' }),
});
