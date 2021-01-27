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
            commentCount = {post.comment_count}
            id = {post.id}
            image = {post.image}
            likeCount = {post.like_count}
            publishDate = {post.publish_date}
            content = {post.content}
            updateDate = {post.update_date}
            viewCount = {post.view_count}
            slug= {post.slug}

            
            />
          </Grid>
        ))}

      </Grid>
    </>
  );
};

export default CardList;
