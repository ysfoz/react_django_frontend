import React from "react";

import {
  fade,
  ThemeProvider,
  withStyles,
  createMuiTheme,
} from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import LocalMallIcon from "@material-ui/icons/LocalMall";

const CssTextField = withStyles({
  root: {
    width: "40%",
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://picsum.photos/640/480)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  linkWrapper: {
    textAlign: "center",
    margin: theme.spacing(1.5),
  },
}));

const ProfilePage = () => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={12} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LocalMallIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Profile
          </Typography>
          <form>
              
            <CssTextField
              className={classes.margin}
              variant="outlined"
              id="firstname"
              name="firstname"
              label="First Name"
            />
            <CssTextField
              className={classes.margin}
              id="last_name"
              name="last_name"
              label="Last Name"
              variant="outlined"
            />

            <CssTextField
              className={classes.margin}
              variant="outlined"
              id="country"
              name="country"
              label="Country"
            />

            <CssTextField
              className={classes.margin}
              variant="outlined"
              id="phone"
              name="phone"
              label="phone"
            />
            <CssTextField
              className={classes.margin}
              variant="outlined"
              id="adress"
              name="address"
              label="Address"
            />

            <CssTextField
              className={classes.margin}
              variant="outlined"
              id="bio"
              name="bio"
              label="Biografy"
            />

            <Button
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              className={classes.submit}
              
            >
              Update
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};
export default ProfilePage;
