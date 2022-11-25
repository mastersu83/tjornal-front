import Link from "next/link";
import classes from "./Profile.module.scss";
import {
  Paper,
  Avatar,
  Typography,
  Button,
  Tabs,
  Tab,
} from "@material-ui/core";
import {
  SettingsOutlined as SettingsIcon,
  TextsmsOutlined as MessageIcon,
} from "@material-ui/icons";
import { MainLayout } from "../../layouts/MainLayout";
import { Post } from "../../components/Post/Post";

export default function Profile() {
  return (
    <MainLayout contentFullWidth hideComments>
      <Paper className={classes.profile} elevation={0}>
        <div className={classes.profile__infoTop}>
          <div>
            <Avatar
              style={{ width: 120, height: 120, borderRadius: 6 }}
              src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
            />
            <Typography
              style={{ fontWeight: "bold" }}
              className="mt-10"
              variant="h4"
            >
              Amon Bower
            </Typography>
          </div>
          <div>
            <Link href="/profile/settings">
              <Button
                style={{ height: 42, minWidth: 45, width: 45, marginRight: 10 }}
                variant="contained"
              >
                <SettingsIcon />
              </Button>
            </Link>
            <Button style={{ height: 42 }} variant="contained" color="primary">
              <MessageIcon className="mr-10" />
              Написать
            </Button>
          </div>
        </div>
        <div className={classes.profile__infoBottom}>
          <Typography className={classes.profile__view}>+208</Typography>
          <Typography>2 подписчика</Typography>
        </div>
        <Typography>На проекте с 15 сен 2016</Typography>

        <Tabs
          className="mt-20"
          value={0}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Статьи" />
          <Tab label="Комментарии" />
          <Tab label="Закладки" />
        </Tabs>
      </Paper>
      <div className={classes.profile__content}>
        <Post />
        <Paper className={classes.profile__followers} elevation={0}>
          <b>Подписчики</b>
          <div className={classes.profile__followerList}>
            <Avatar
              className="mr-10"
              src="https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/"
            />
            <Avatar
              className="mr-10"
              src="https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/"
            />
            <Avatar
              className="mr-10"
              src="https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/"
            />
            <Avatar
              className="mr-10"
              src="https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/"
            />
          </div>
        </Paper>
      </div>
    </MainLayout>
  );
}
