import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CardDetail from "../components/CardDetail";
import { useParams } from "react-router-dom";
import MenuComponent from "../components/MenuComponent";
import { fetchDataDetail } from "../helper/FetchData";
import axios from "axios";
import { HomeButton} from '../components/HomeButton'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const DetailPage = () => {
  const classes = useStyles();
  const { slug } = useParams();
  const [postDetail, setPostDetail] = useState();

  const fetchDataDetail = async () => {
    const Token = localStorage.getItem("Token");
    if (Token) {
      try {
        const res = await axios.get(
          `https://blog-backend-ysf.herokuapp.com/${slug}/detail`,
          {
            headers: {
              Authorization: `Token ${Token}`,
            },
          }
        );
        setPostDetail(res?.data);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const res = await axios.get(
          `https://blog-backend-ysf.herokuapp.com/${slug}/detail`
        );
        setPostDetail(res?.data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    fetchDataDetail();
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {localStorage.getItem("currentUser") === postDetail?.author ? (
            <MenuComponent slug={slug} />
          ) : null}
          <CardDetail post={postDetail} fetchData={fetchDataDetail} />
        </Grid>
      </Grid>
      <HomeButton/>
    </div>
  );
};
export default DetailPage;
