import React,{useContext} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


import { fetchData } from "../helper/FetchData";
import { useHistory, Redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {toast,ToastContainer} from 'react-toastify'
import {useFormik} from 'formik'



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright ©️ '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  let history = useHistory();
  const formik = useFormik()
 
  const classes = useStyles();
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  
  // const [state, setState] = React.useState({
  //   username: '',
  //   password:''
  // });

  
   const handleUsername = (event) => {
      const name = event.target.value;
      setUsername(name);
      
  };
   const handlePassword = (event) => {
      const name = event.target.value;
      setPassword(name);
    
  };
  
  const postLogin = async () => {
    console.log("hello from login")
    fetchData("https://blog-backend-ysf.herokuapp.com/auth/login/", {
        username,
        password
      })
      .then((data) => {
        setLoggedIn(true);
        if (data.key){
          localStorage.setItem("Token", data.key);
          localStorage.setItem('currentUser',username)
          localStorage.setItem('isLoggedIn',true)
          history.push("/");
        }
      })
    
      .catch((err) => {
       hata = toast.error("Error Notification !", {
          position: toast.POSITION.TOP_LEFT
        });
        
      });
  
    }
   

let hata;

  return (
    
    <Container component="main" maxWidth="xs">
   
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <ToastContainer 
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
          
            pauseOnHover/>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {/* <form className={classes.form} noValidate method="POST"> */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={formik.handeChange}
            value = {formik.values.username}
            onBlur={formik.handleBlur}
            {...formik.getFieldProps('username')}
            error={formik.touched.username && formik.errors.username}
            helperText={formik.touched.username && formik.errors.username}
            
          />
         
          {/* <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={handleChange}
            autoFocus
          /> */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={formik.handleChange}
            value = {formik.values.password}
            onBlur={formik.handleBlur}
            {...formik.getFieldProps('password')}
            error={formik.touched.password && formik.errors.password}
            helperText={formik.touched.password && formik.errors.password}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => {postLogin()}}
            
          >
            Sign In
          </Button>
        {/* </form> */}
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

//  const handleChange = (event) => {
  //     const name = event.target.name;
  //     setState({
  //        ...state,
  //        [name]: event.target.value,
  //     });
  //     console.log(state)
  // };

  // const handleSubmit = async () => {
  //   const obj= {...state}
  //   console.log(obj)