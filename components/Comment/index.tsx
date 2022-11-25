import React, { MouseEventHandler } from "react";
import { Typography, IconButton, MenuItem, Menu } from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreHorizOutlined";

import classes from "./Comment.module.scss";

interface CommentPostProps {
  user: {
    fullname: string;
    avatarUrl: string;
  };
  text: string;
  createdAt: string;
}

export const Comment: React.FC<CommentPostProps> = ({
  user,
  text,
  createdAt,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.comment}>
      <div className={classes.userInfo}>
        <img src={user.avatarUrl} alt="Avatar" />
        <b>{user.fullname}</b>
        <span>Wed Nov 23 2022 18:11:46</span>
      </div>
      <Typography className={classes.text}>{text}</Typography>
      <span className={classes.replyBtn}>Ответить</span>
      <IconButton onClick={handleClick}>
        <MoreIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        elevation={2}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted
      >
        <MenuItem onClick={handleClose}>Удалить</MenuItem>
        <MenuItem onClick={handleClose}>Редактировать</MenuItem>
      </Menu>
    </div>
  );
};
