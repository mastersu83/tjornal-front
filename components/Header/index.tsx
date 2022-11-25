import React, { FC } from "react";
import classes from "./Header.module.scss";
import logo from "../../static/img/logo.png";
import { Avatar, Button, IconButton, Paper } from "@material-ui/core";
import {
  SearchOutlined as SearchIcon,
  SmsOutlined as MessageIcon,
  Menu as MenuIcon,
  ExpandMoreOutlined as ArrowBottom,
  NotificationsNoneOutlined as NotificationIcon,
  AccountCircleOutlined as UserIcon,
} from "@material-ui/icons";
import Link from "next/link";
import Image from "next/image";
import { AuthDialog } from "../AuthDialog";

interface HeaderPropsTypes {
  props: any;
}

export const Header: FC<HeaderPropsTypes> = (props) => {
  const isAuth = false;
  const id = 1;
  const [authVisible, setAuthVisible] = React.useState(false);

  const openAuthDialog = () => {
    setAuthVisible(true);
  };

  const closeAuthDialog = () => {
    setAuthVisible(false);
  };
  return (
    <Paper classes={{ root: classes.root }} elevation={0}>
      <div className={classes.headerBlock}>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Link href="/" className={classes.logo}>
          <Image height={35} width={35} src={logo} alt="Logo" />
        </Link>

        <div className={classes.searchBlock}>
          <SearchIcon width={24} />
          <input placeholder="Поиск" />
        </div>

        <Link href="/write">
          <Button variant="contained" className={classes.penButton}>
            Новая запись
          </Button>
        </Link>
      </div>
      <div className={classes.headerBlock}>
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        {isAuth ? (
          <Link href={"/profile/1"} className={classes.avatar__box}>
            <Avatar
              className={classes.avatar}
              alt="Remy Sharp"
              src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
            />
            <ArrowBottom />
          </Link>
        ) : (
          <div className={classes.loginButton} onClick={openAuthDialog}>
            <UserIcon />
            Войти
          </div>
        )}
      </div>
      <AuthDialog onClose={closeAuthDialog} visible={authVisible} />
    </Paper>
  );
};
