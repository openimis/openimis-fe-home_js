import React from "react";

import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import {
  Contributions,
  useUserQuery,
  ProgressOrError,
  useModulesManager,
} from "@openimis/fe-core";
import { DEFAULT, MESSAGE_TITLE } from "../constants";
import { useFetchData } from "../hooks/useFetchData";

const useStyles = makeStyles((theme) => ({
  container: theme.page,
  messageTitle: {
    textAlign: "center",
    color: "red",
  },
  messageDate: {
    textAlign: "center",
  },
}));

const HomePageContainer = () => {
  const modulesManager = useModulesManager();
  const showHomeMessage = modulesManager.getConf(
    "fe-home",
    "HomePageContainer.showHomeMessage",
    DEFAULT.SHOW_HOME_MESSAGE
  );
  const homeMessageURL = modulesManager.getConf(
    "fe-home",
    "HomePageContainer.homeMessageURL",
    DEFAULT.HOME_MESSAGE_URL
  );

  const { user } = useUserQuery();
  const classes = useStyles();
  const {
    data: messageData,
    loading: messageLoading,
    error: messageError,
  } = showHomeMessage ? useFetchData(homeMessageURL) : {};

  if (!user) {
    return null;
  }

  return (
    <Grid container className={classes.container} spacing={2}>
      <Grid item xs={12}>
        <Box mt={2}>
          <Typography variant="h4">
            Welcome {user.otherNames} {user.lastName}!
          </Typography>
        </Box>
      </Grid>
      {showHomeMessage && (
        <Grid item xs={12}>
          <ProgressOrError progress={messageLoading} error={messageError} />
          <h3 className={classes.messageTitle}> {MESSAGE_TITLE} </h3>
          <p className={classes.messageDate}> {messageData?.date} </p>
          <div dangerouslySetInnerHTML={{ __html: messageData?.notice }} />
        </Grid>
      )}
      <Contributions contributionKey="home.HomePage.Blocks" user={user} />
    </Grid>
  );
};

export default HomePageContainer;
