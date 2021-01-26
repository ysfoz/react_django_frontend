
import React from 'react';
import {
    withStyles,
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
import useMediaQuery from "@material-ui/core/useMediaQuery";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
  
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
      marginTop: "4rem",
    },
    linkWrapper: {
      textAlign: "center",
      margin: theme.spacing(1.5),
    },
    form: {
      marginTop: "3rem",
      alignItems: "center",
      // backgroundColor: "green",
      paddingLeft: "20%",
      paddingRight: "5%",
    },
    form2: {
      marginTop: "3rem",
      alignItems: "center",
    },
    margin: {
      margin: 2,
      marginTop: 13,
    },
    address: {
      marginTop: 13,
      margin: 2,
      width: "80.5%",
    },
    bio: {
      margin: 2,
      // width : "80.5%",
      marginTop: 13,
    },
    button: {
      marginTop: 13,
      width: "80.7%",
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 500,
        display:'block',
        marginLeft : -0.1,
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
  }));
  
  const PostPage = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

   const handleChange = (event) => {
      const name = event.target.name;
      setState({
         ...state,
         [name]: event.target.value,
      });
  };
    
    const matches = useMediaQuery("(min-width:750px)");
  
    return (
      <Grid container component="main" className={classes.root}>
        <Grid item xs={12} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LocalMallIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Create New Post
            </Typography>
            <form className={matches ? classes.form : classes.form2}>
              <CssTextField
                className={classes.margin}
                style={{ width: matches ? "80.5%" : "100%" }}
                variant="outlined"
                id="title"
                name="title"
                label="Title"
              />
              <CssTextField
                className={classes.margin}
                style={{ width: matches ? "80.5%" : "100%" }}
                id="image"
                name="image"
                label="Image URL"
                variant="outlined"
              />
              <CssTextField
                className={classes.margin}
                style={{ width: matches ? "80.5%" : "100%" }}
                variant="outlined"
                multiline
                rows={8}
                id="content"
                name="content"
                label="Content"
              />
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">Status</InputLabel>
                <Select
                native
                value={state.age}
                onChange={handleChange}
                label="Status"
                inputProps={{
                    name: 'status',
                    id: 'outlined-age-native-simple',
                }}
                >
                <option aria-label="None" value="" />
                <option value={'d'}>Draft</option>
                <option value={'p'}>Published</option>
                
                </Select>
              </FormControl>
              <Button
                color="primary"
                style={{
                  width: matches ? "80.7%" : "100%",
                  marginTop: matches ? null : 30,
                }}
                variant="contained"
                fullWidth
                type="submit"
                className={classes.button}
              >
                Create
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  };
  export default PostPage;