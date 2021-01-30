import React, {useState, useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import CardDetail from "../components/CardDetail";
import Paper from '@material-ui/core/Paper';
import { useParams } from "react-router-dom";
import axios from "axios"
import MenuComponent from "../components/MenuComponent"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow:"hidden"
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
  const [postDetail, setPostDetail] = useState()
  const fetchData = async () => {
    const res = await axios.get(`https://blog-backend-ysf.herokuapp.com/${slug}/detail`)
    setPostDetail(res?.data)
    

  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        {localStorage.getItem('currentUser') === postDetail?.author ? <MenuComponent slug={slug}/> : null}
          <CardDetail post={postDetail} fetchData={fetchData}/>
          
        </Grid>
      </Grid>
    </div>
  );
};
export default DetailPage;