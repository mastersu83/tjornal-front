import React, { FC } from "react";
import { Button, TextField } from "@material-ui/core";
import classes from "../AuthDialog.module.scss";
import { useForm, FormProvider } from "react-hook-form";
import {
  ILoginForm,
  LoginSchema,
  RegisterSchema,
} from "../../../utils/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInput } from "../../FormInput";

interface RegisterPropsTypes {
  setFormType: () => void;
}

export const RegisterForm: FC<RegisterPropsTypes> = ({ setFormType }) => {
  const form = useForm<ILoginForm>({
    mode: "onChange",
    resolver: yupResolver(RegisterSchema),
  });

  const onSubmit = (data: ILoginForm) => console.log(data);

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormInput name="fullName" label="Имя и Фамилия" />
        <FormInput name="email" label="Почта" />
        <FormInput name="password" label="Пароль" />
        <div className={classes.buttonsBox}>
          <Button
            disabled={!form.formState.isValid}
            type="submit"
            color="primary"
            variant="contained"
          >
            Зарегистрироваться
          </Button>
          <Button onClick={setFormType} color="primary" variant="text">
            Войти
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
