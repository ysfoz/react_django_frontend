import Grid from "@material-ui/core/Grid";
import BlogCard from "../components/BlogCard";

const CardList = ({ postData }) => {
  console.log("list", postData);
  return (
    <>
      <Grid container spacing={5}>

        {postData?.map((post, i) => (
          <Grid item xs={12} sm={4} key={i}>
            <BlogCard 
            key={i}
            title={post.title}
            author = {post.author}
            commentCount = {post.commentCount}
            id = {post.id}
            image = {post.image}
            likeCount = {post.likeCount}
            publishDate = {post.publishDate}
            content = {post.content}
            updateDate = {post.updateDate}
            viewCount = {post.viewCount}

            
            />
          </Grid>
        ))}

      </Grid>
    </>
  );
};

export default CardList;
