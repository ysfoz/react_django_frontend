import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CardDetail from "../components/CardDetail";
import { useParams } from "react-router-dom";
import axios from "axios";
import MenuComponent from "../components/MenuComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
    flexGrow: 1,
    marginBottom: 150,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const DetailPage = () => {
  const { slug } = useParams();
  const classes = useStyles();

  const [postDetail, setPostDetail] = useState();

  async function fetchData() {
    try {
      const res = await axios.get(
        `https://blog-backend-ysf.herokuapp.com/${slug}/detail`
      );
      setPostDetail(res?.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {localStorage.getItem("currentUser") === postDetail?.author ? (
          <MenuComponent slug={slug} />
        ) : null}
        <Grid item xs={12}>
          <CardDetail post={postDetail} />
        </Grid>
      </Grid>
    </div>
  );
};
export default DetailPage;
