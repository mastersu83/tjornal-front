import React, { FC } from "react";
import classes from "./AuthDialog/AuthDialog.module.scss";

import { TextField } from "@material-ui/core";
import { useFormContext } from "react-hook-form";

interface FormInputPropsTypes {
  name: string;
  label: string;
}

export const FormInput: FC<FormInputPropsTypes> = ({ name, label }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextField
      {...register(name)}
      className={classes.input}
      size="small"
      label={label}
      variant="outlined"
      type={name}
      fullWidth
      error={!!errors[name]?.message}
      helperText={<>{errors[name]?.message}</>}
    />
  );
};
