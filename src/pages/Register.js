
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
import {useFormik} from 'formik'
import * as Yup from "yup";
import {useHistory} from 'react-router-dom';
import { fetchData } from '../helper/FetchData'

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
  const history = useHistory();
  

  const validationSchema = Yup.object().shape({
    username: Yup.string()
       .required('You must enter an username')
       .max(100,'not invalid username'),

    email : Yup.string().email().required('You must enter an invalid Email'),
    password: Yup.string()
       .required("No password provided.")
       .min(8, "Password is too short - should be 8 chars minimum."),
    password2: Yup.string()
       .required("No password provided.")
       .min(8, "Password is too short - should be 8 chars minimum.")
       .oneOf([Yup.ref('password'),null],'Passwords must match')
       
   })
   
   const initialValues = {
     username:'',
     email:'',
     password:'',
     password2:''
   }
   
   
   const onSubmit = async(values) => {
     fetchData("https://blog-backend-ysf.herokuapp.com/user/register/", 
         values
       )
       .then((data) => {
          history.push("/login");
     
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
              <form onSubmit={formik.handleSubmit}>
                <TextField
                  fullWidth
                  margin="normal"
                  id="username"
                  name="username"
                  label="Username"
                  onChange={formik.handeChange}
                  value = {formik.values.username}
                  onBlur={formik.handleBlur}
                  {...formik.getFieldProps('username')}
                  error={formik.touched.username && formik.errors.username}
                  helperText={formik.touched.username && formik.errors.username}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  id="email"
                  name="email"
                  label="Email"
                  onChange={formik.handeChange}
                  value = {formik.values.email}
                  onBlur={formik.handleBlur}
                  {...formik.getFieldProps('email')}
                  error={formik.touched.email && formik.errors.email}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  onChange={formik.handeChange}
                  value = {formik.values.password}
                  onBlur={formik.handleBlur}
                  {...formik.getFieldProps('password')}
                  error={formik.touched.password && formik.errors.password}
                  helperText={formik.touched.password && formik.errors.password}
                 
                />
                <TextField
                  fullWidth
                  margin="normal"
                  id="password2"
                  name="password2"
                  label="Password Again"
                  type="password"
                  onChange={formik.handeChange}
                  value = {formik.values.password2}
                  onBlur={formik.handleBlur}
                  {...formik.getFieldProps('password2')}
                  error={formik.touched.password2 && formik.errors.password2}
                  helperText={formik.touched.password2 && formik.errors.password2}
                 
    
                  
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
    