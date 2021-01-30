import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CKEditor from "ckeditor4-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { putDataWithToken } from "../helper/FetchData";
import axios from "axios";

//STYLE

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
    marginTop: 13,
  },
  button: {
    marginTop: 13,
    width: "80.7%",
  },
}));

// FUNCTION

const ProfilePage = () => {
  const [data, setData] = useState();
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:750px)");

  const history = useHistory();

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().max(200, "Title is too long"),
    last_name: Yup.string().max(200, "Title is too long"),
    address: Yup.string().max(200, "Title is too long"),
    country: Yup.string().max(200, "Title is too long"),
    phone: Yup.string().max(200, "Title is too long"),
    bio: Yup.string().max(200, "Title is too long"),
  });

  const initialValues = {
    first_name: "",
    last_name: "",
    country: "",
    phone: "",
    bio: "",
    address: "",
  };

  const onSubmit = (values) => {
    putDataWithToken(
      "https://blog-backend-ysf.herokuapp.com/user/profile/",
      values
    )
      .then((data) => {
        history.push("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const fetchData = async () => {
    const Token = localStorage.getItem("Token");
    const res = await axios.get(
      `https://blog-backend-ysf.herokuapp.com/user/profile/`,
      {
        headers: {
          Authorization: `Token ${Token}`,
        },
      }
    );
    formik.values.first_name = res?.data?.first_name;
    formik.values.last_name = res?.data?.last_name;
    formik.values.address = res?.data?.address;
    formik.values.bio = res?.data?.bio;
    formik.values.phone = res?.data?.phone;
    formik.values.country = res?.data?.country;
    setData(res?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
          <form
            className={matches ? classes.form : classes.form2}
            onSubmit={formik.handleSubmit}
          >
            <CssTextField
              defaultValue={data?.phone}
              className={classes.margin}
              style={{ width: matches ? "40%" : "100%" }}
              variant="outlined"
              id="first_name"
              name="first_name"
              label="First Name"
              onChange={formik.handleChange}
              value={formik.values.fist_name}
              onBlur={formik.handleBlur}
              {...formik.getFieldProps("first_name")}
              error={formik.touched.first_name && formik.errors.first_name}
              helperText={formik.touched.first_name && formik.errors.first_name}
            />
            <CssTextField
              className={classes.margin}
              style={{ width: matches ? "40%" : "100%" }}
              id="last_name"
              name="last_name"
              label="Last Name"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.last_name}
              onBlur={formik.handleBlur}
              {...formik.getFieldProps("last_name")}
              error={formik.touched.last_name && formik.errors.last_name}
              helperText={formik.touched.last_name && formik.errors.last_name}
            />

            <CssTextField
              className={classes.margin}
              style={{ width: matches ? "40%" : "100%" }}
              variant="outlined"
              id="country"
              name="country"
              label="Country"
              onChange={formik.handleChange}
              value={formik.values.country}
              onBlur={formik.handleBlur}
              {...formik.getFieldProps("country")}
              error={formik.touched.country && formik.errors.country}
              helperText={formik.touched.country && formik.errors.country}
            />

            <CssTextField
              className={classes.margin}
              style={{ width: matches ? "40%" : "100%" }}
              variant="outlined"
              id="phone"
              name="phone"
              label="Phone"
              onChange={formik.handleChange}
              value={formik.values.phone}
              onBlur={formik.handleBlur}
              {...formik.getFieldProps("phone")}
              error={formik.touched.phone && formik.errors.phone}
              helperText={formik.touched.phone && formik.errors.phone}
            />
            <CssTextField
              className={classes.address}
              style={{ width: matches ? "80.7%" : "100%" }}
              variant="outlined"
              id="adress"
              name="address"
              label="Address"
              onChange={formik.handleChange}
              value={formik.values.address}
              onBlur={formik.handleBlur}
              {...formik.getFieldProps("address")}
              error={formik.touched.address && formik.errors.address}
              helperText={formik.touched.address && formik.errors.address}
            />

            <CssTextField
              className={classes.bio}
              style={{ width: matches ? "80.7%" : "100%" }}
              variant="outlined"
              id="bio"
              name="bio"
              label="Biografy"
              multiline
              rows={8}
              onChange={formik.handleChange}
              value={formik.values.bio}
              onBlur={formik.handleBlur}
              {...formik.getFieldProps("bio")}
              error={formik.touched.bio && formik.errors.bio}
              helperText={formik.touched.bio && formik.errors.bio}
            />

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
              Update
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};
export default ProfilePage;
