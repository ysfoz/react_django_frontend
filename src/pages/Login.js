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
import { useHistory } from "react-router-dom";
import {toast,ToastContainer} from 'react-toastify'
import {useFormik} from 'formik'
import * as Yup from "yup";

import { AuthContext } from '../context/AuthContext'



// FOOTER
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


// STYLE
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
  const classes = useStyles();

const validationSchema = Yup.object().shape({
 username: Yup.string()
    .required('You must enter an username')
    .max(100,'not invalid username'),
 password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum."),
})

const initialValues = {
  username:'',
  password:''
}
// const { currentUser, setCurrentUser } = useContext(AuthContext)

const onSubmit = async(values) => {
  fetchData("https://blog-backend-ysf.herokuapp.com/auth/login/", 
      values
    )
    .then((data) => {
      if (data.key){
        localStorage.setItem("Token", data.key);
        localStorage.setItem('currentUser',values.username)
        localStorage.setItem('isLoggedIn',true)
        history.push("/");
      }
    }).catch((err) => {
        console.log(err)
    })
  }


const formik = useFormik({
  initialValues,
  validationSchema,
  onSubmit
  
})



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
        <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
        // TODO: toast ile hata verdirilecek
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
          >
            Sign In
          </Button>
        </form>
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

