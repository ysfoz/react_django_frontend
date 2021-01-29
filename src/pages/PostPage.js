
import React from 'react';
import {
    withStyles,
  } from "@material-ui/core/styles";
  
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CKEditor from 'ckeditor4-react';
import {useFormik} from 'formik'
import * as Yup from "yup";
import {useHistory} from 'react-router-dom';
import { fetchData } from '../helper/FetchData'
import { postData } from '../helper/PostData'
  
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
      
      width:'100%',
      overflow: 'hidden'
    },
   
    paper: {
      margin: theme.spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
    },
    form: {
      marginTop: "3rem",
      alignItems: "center",
      width : '80%',
      paddingLeft: "10%",
    },
    form2: {
      marginTop: "3rem",
      alignItems: "center",
      width : '100%',
    },
    // form: {
    //   marginTop: "3rem",
    //   alignItems: "center",
    //   paddingLeft: "20%",
    //   paddingRight: "5%",
    // },
    // form2: {
    //   marginTop: "3rem",
    //   alignItems: "center",
    // },
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
    const matches = useMediaQuery("(min-width:750px)");

    const history = useHistory();
  

    const validationSchema = Yup.object().shape({
      title:Yup.string()
        .required('you must write a title')
        .max(100,'Title is too long'),
      content: Yup.string()
         .required('You must write something'),
      image : Yup.string(),
      status:Yup.string()
     })
     
     const initialValues = {
       title:'',
       content:'',
       image:'',
       status:''
     }
     
     
     const onSubmit = async(values) => {
       postData("https://blog-backend-ysf.herokuapp.com/create/", 
           values
         )
         .then((data) => {
            history.push("/");
       
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
        <Grid item xs={12} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LocalMallIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Create New Post
            </Typography>
            <form className={matches ? classes.form : classes.form2} onSubmit={formik.handleSubmit}>
              <CssTextField
                className={classes.margin}
                style={{ width: matches ? "80.5%" : "100%" }}
                variant="outlined"
                id="title"
                name="title"
                label="Title"
                onChange={formik.handleChange}
                value = {formik.values.title}
                onBlur={formik.handleBlur}
                {...formik.getFieldProps('title')}
                error={formik.touched.title && formik.errors.title}
                  helperText={formik.touched.title && formik.errors.title}
              />
              <CssTextField
                className={classes.margin}
                style={{ width: matches ? "80.5%" : "100%" }}
                id="image"
                name="image"
                label="Image URL"
                variant="outlined"
                onChange={formik.handleChange}
                value = {formik.values.image}
                onBlur={formik.handleBlur}
                {...formik.getFieldProps('image')}
                error={formik.touched.image && formik.errors.image}
                helperText={formik.touched.image&& formik.errors.image}
              />
              {/* {
                matches
                ?
                <div className="App" style={{  marginTop:20,width: matches ? "80.5%" : "100%" }}>
            
                <CKEditor
                    id="content"
                    name = 'content'
                    editor={ ClassicEditor }
                    onChange={(event) => formik.handleChange(event)}
                    value = {formik.values.content}
                    onBlur={(event) => formik.handleBlur(event)}
                    {...formik.getFieldProps('content')}
                    error={formik.touched.content && formik.errors.content }
                   type="classic"
                  //  data =  {formik.values.content}
                   readOnly={false}
                />
            </div>
                : */}
            <CssTextField
              
                className={classes.margin}
                style={{width: matches ? "80.5%" : "100%" }}
                variant="outlined"
                multiline
                rows={8}
                id="content"
                name="content"
                label="Content"
                onChange={formik.handleChange}
                value = {formik.values.content}
                onBlur={formik.handleBlur}
                {...formik.getFieldProps('content')}
                error={formik.touched.content && formik.errors.content }
                helperText={formik.touched.content && formik.errors.content }
                
              />
              
           
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">Status</InputLabel>
                <Select
                native
                value={formik.values.status}
                onChange={formik.handleChange}
                label="Status"
                name='status'
                inputProps={{
                    name: 'status',
                    id: 'outlined-age-native-simple',
                }}
                >
                <option aria-label="None" value="" />
                <option value={'d'} label = 'draft'/>
                <option value={'p'} label = 'published'/>
                
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

 