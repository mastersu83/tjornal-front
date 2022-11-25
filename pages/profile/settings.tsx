import classes from "./Settings.module.scss";

import {
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { MainLayout } from "../../layouts/MainLayout";

export default function Settings() {
  return (
    <MainLayout hideComments>
      <Paper className={classes.settings} elevation={0}>
        <Typography variant="h6">Основные настройки</Typography>
        <form className={classes.settings__form}>
          <TextField label="Никнейм" fullWidth required />
          <TextField label="Эл. почта" fullWidth required />
          <TextField label="Пароль" fullWidth required />
          <Button color="primary" variant="contained">
            Сохранить изменения
          </Button>
        </form>
      </Paper>
    </MainLayout>
  );
}
