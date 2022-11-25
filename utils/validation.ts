import * as yup from "yup";

export interface ILoginForm {
  email: string;
  password: string;
  fullName?: string;
}

export const LoginSchema = yup.object({
  email: yup.string().email("Неверная почта").required("Почта обязательна"),
  password: yup
    .string()
    .min(6, "Минимум 6 символов")
    .required("Пароль обязатлен"),
});

export const RegisterSchema = yup
  .object({
    fullName: yup
      .string()
      .min(3, "Минимум 6 символов")
      .required("Имя и Фамилия обязательны"),
  })
  .concat(LoginSchema);
