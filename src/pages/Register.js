
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import VpnKeyIcon from '@material-ui/icons/VpnKey';


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
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  linkWrapper: {
    textAlign: "center",
    margin: theme.spacing(1.5),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  

  return (
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid item xs={12} sm={8} md={5}  elevation={6} square>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <VpnKeyIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign Up
              </Typography>
              <form >
                <TextField
                  fullWidth
                  margin="normal"
                  id="username"
                  name="username"
                  label="Username"
                 
                />
                <TextField
                  fullWidth
                  margin="normal"
                  id="email"
                  name="email"
                  label="Email"
                 
                />
                <TextField
                  fullWidth
                  margin="normal"
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                 
                />
                <TextField
                  fullWidth
                  margin="normal"
                  id="password2"
                  name="password2"
                  label="Password Again"
                  type="password"
                 
    
                  
                />
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  type="submit"
                  className={classes.submit}
                >
                  Sign Up
                </Button>
              </form>
              {/*           <Grid container className={classes.linkWrapper}>
                <Grid item xs textAlign="center">
                  <Link href="#" variant="body2" mx="auto">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid> */}
              <Grid container className={classes.linkWrapper}>
                <Grid item xs>
                  <Link href="/login" variant="body2" mx="auto">
                    Already have an account? Sign In
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Typography variant="body2" color="textSecondary" align="center">
                  {"Copyright © "}
                  <Link color="inherit" href="/">
                    Our Website
                  </Link>{" "}
                  {new Date().getFullYear()}
                  {"."}
                </Typography>
              </Box>
            </div>
          </Grid>
        </Grid>
      );
    };
    