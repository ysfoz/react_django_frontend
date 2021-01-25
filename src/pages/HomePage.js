import Container from "@material-ui/core/Container";
// import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import BlogCard from "../components/BlogCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <BlogCard />
        </Grid>
        <Grid item xs={12} sm={4}>
          <BlogCard />
        </Grid>
        <Grid item xs={12} sm={4}>
          <BlogCard />
        </Grid>
      </Grid>
    </Container>
  );
};
export default HomePage;
