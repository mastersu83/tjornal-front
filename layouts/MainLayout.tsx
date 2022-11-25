import React, { ReactNode } from "react";
import clsx from "clsx";
import classes from "./MainLayouts.module.scss";
import { SideComments } from "../components/SideComments/SideComments";
import { LeftMenu } from "../components/LeftMenu/LeftMenu";
import { Header } from "../components/Header";

interface MainLayoutProps {
  hideComments?: boolean;
  hideMenu?: boolean;
  contentFullWidth?: boolean;
  className?: string;
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  contentFullWidth,
  hideComments,
  hideMenu,
  className,
}) => {
  return (
    <>
      <Header props={""} />
      <div className={classes.wrapper}>
        {!hideMenu && <LeftMenu />}
        <div className={clsx("content", { "content--full": contentFullWidth })}>
          {children}
        </div>
        {!hideComments && <SideComments />}
      </div>
    </>
  );
};
