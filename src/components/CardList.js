import Grid from "@material-ui/core/Grid";
import BlogCard from "../components/BlogCard";
 
 const CardList = () => {
  return (
    <>
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
    </>
  );
};

export default CardList;
