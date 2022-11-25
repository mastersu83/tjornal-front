import React from "react";
import Link from "next/link";
import { Paper, Typography } from "@material-ui/core";
import Image from "next/image";

import classes from "./Post.module.scss";
import { PostActions } from "../PostActions";

export const Post: React.FC = () => {
  return (
    <Paper elevation={0} className="p-20" classes={{ root: classes.paper }}>
      <Typography variant="h5" className={classes.title}>
        <Link href="/news/test-123">
          Кот прилёг отдохнуть в английском парке миниатюр — и стал героем шуток
          и фотожаб о «гигантском пушистом захватчике»
        </Link>
      </Typography>
      <Typography className={classes.description}>
        Пока одни не могли соотнести размеры животного и окружения, другие
        начали создавать апокалиптические сюжеты с котом в главной роли.
      </Typography>
      <Image
        src="https://leonardo.osnova.io/a21ca5a9-d95b-560d-9a6f-9fa87eff7fcd/-/preview/600/-/format/webp/"
        height={500}
        width={600}
        alt="img"
      />
      <PostActions />
    </Paper>
  );
};
