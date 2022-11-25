import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  TextField,
  Typography,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import classes from "./AuthDialog.module.scss";
import { LoginForm } from "./forms/LoginForm";
import { MainForm } from "./forms/MainForm";
import { RegisterForm } from "./forms/RegisterForm";

interface AuthDialogProps {
  onClose: () => void;
  visible: boolean;
}

export const AuthDialog: React.FC<AuthDialogProps> = ({ onClose, visible }) => {
  const [formType, setFormType] = React.useState<"main" | "login" | "register">(
    "main"
  );

  return (
    <Dialog open={visible} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogContent>
        <div className={classes.content}>
          <Typography className={classes.title}>
            {formType === "main" ? (
              "Вход в TJ"
            ) : (
              <span
                onClick={() => setFormType("main")}
                className={classes.backTitle}
              >
                <ArrowBackIcon /> К авторизации
              </span>
            )}
          </Typography>
          {formType === "main" && (
            <MainForm setFormType={() => setFormType("login")} />
          )}
          {formType === "login" && (
            <LoginForm setFormType={() => setFormType("register")} />
          )}
          {formType === "register" && (
            <RegisterForm setFormType={() => setFormType("login")} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
