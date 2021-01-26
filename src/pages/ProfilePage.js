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
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
        borderColor: "#cfccdf",
      },
      "&:hover fieldset": {
        borderColor: "#e9967a",
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
    justifyContent: "center",
    // backgroundColor: "yellow",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    marginTop : "4rem",

  },
  linkWrapper: {
    textAlign: "center",
    margin: theme.spacing(1.5),
  },
  form: {
    marginTop : "3rem",
    alignItems: "center",
    // backgroundColor: "green",
    paddingLeft : '20%',
    paddingRight : '5%',
  },
  form2: {
    marginTop : "3rem",
    alignItems: "center",
  },
  margin : {
    margin : 2,  
    marginTop : 13,  
  },
  address : {
    marginTop : 13,  
    margin : 2,    
    width : "80.5%",   
  },
  bio : {
    margin : 2,    
    // width : "80.5%",   
    marginTop : 13,  
  },
  button : {
    marginTop : 13,  
    width : "80.7%",       
},
}));

const ProfilePage = () => {
  
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:750px)');

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
          <form className={matches ? classes.form : classes.form2} >
              
            <CssTextField
              className={classes.margin}
              style={{width : matches ? "40%" : "100%" }}
              variant="outlined"
              id="firstname"
              name="firstname"
              label="First Name"
              />
            <CssTextField
              className={classes.margin}
              style={{width : matches ? "40%" : "100%" }}
              id="last_name"
              name="last_name"
              label="Last Name"
              variant="outlined"
              />

            <CssTextField
              className={classes.margin}
              style={{width : matches ? "40%" : "100%" }}
              variant="outlined"
              id="country"
              name="country"
              label="Country"
              />

            <CssTextField
              className={classes.margin}
              style={{width : matches ? "40%" : "100%" }}
              variant="outlined"
              id="phone"
              name="phone"
              label="Phone"
              />
            <CssTextField
              className={classes.address}
              style={{width : matches ? "80.7%" : "100%" }}
              variant="outlined"
              id="adress"
              name="address"
              label="Address"
              />

            <CssTextField
              className={classes.bio}
              style={{width : matches ? "80.7%" : "100%" }}
              variant="outlined"
              id="bio"
              name="bio"
              label="Biografy"
              />

            <Button
              color="primary"
              style={{width : matches ? "80.7%" : "100%" , marginTop : matches ? null : 30 }}
              variant="contained"
              fullWidth
              type="submit"
              className={classes.button}
              
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