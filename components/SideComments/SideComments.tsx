import React from "react";
import ArrowRightIcon from "@material-ui/icons/NavigateNextOutlined";

import classes from "./SideComments.module.scss";
import { CommentItem } from "./CommentItem";
import clsx from "clsx";
import { data } from "../../consts/data";

export const SideComments = () => {
  const [visible, setVisible] = React.useState(true);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className={clsx(classes.root, !visible && classes.rotated)}>
      <h3 onClick={toggleVisible}>
        Комментарии <ArrowRightIcon />
      </h3>
      {visible &&
        data.comments.popular.map((obj) => (
          <CommentItem key={obj.id} {...obj} />
        ))}
    </div>
  );
};
