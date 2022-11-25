import React from "react";
import Link from "next/link";
import { Button } from "@material-ui/core";
import {
  WhatshotOutlined as FireIcon,
  SmsOutlined as MessageIcon,
  TrendingUpOutlined as TrendingIcon,
  FormatListBulletedOutlined as ListIcon,
} from "@material-ui/icons";

import classes from "./LeftMenu.module.scss";
import { useRouter } from "next/router";

const menu = [
  { text: "Лента", icon: <FireIcon />, path: "/" },
  { text: "Сообщения", icon: <MessageIcon />, path: "/messages" },
  { text: "Рейтинг RJ", icon: <TrendingIcon />, path: "/rating" },
  { text: "Подписки", icon: <ListIcon />, path: "/follows" },
];

export const LeftMenu: React.FC = () => {
  const router = useRouter();

  return (
    <div className={classes.menu}>
      <ul>
        {menu.map((obj) => (
          <li key={obj.path}>
            <Link href={obj.path}>
              <Button
                variant={router.asPath === obj.path ? "contained" : "text"}
              >
                {obj.icon}
                {obj.text}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
