import React, { FC } from "react";
import classes from "../AuthDialog.module.scss";

import { Button } from "@material-ui/core";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILoginForm, LoginSchema } from "../../../utils/validation";
import { FormInput } from "../../FormInput";

interface LoginPropsTypes {
  setFormType: () => void;
}

export const LoginForm: FC<LoginPropsTypes> = ({ setFormType }) => {
  const form = useForm<ILoginForm>({
    mode: "onChange",
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = (data: ILoginForm) => {
    console.log(data);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormInput name="email" label="Почта" />
        <FormInput name="password" label="Пароль" />
        <div className={classes.buttonsBox}>
          <Button
            disabled={!form.formState.isValid}
            color="primary"
            variant="contained"
            type="submit"
          >
            Войти
          </Button>
          <Button onClick={setFormType} color="primary" variant="text">
            Регистрация
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
