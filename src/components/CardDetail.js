import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Collapse from '@material-ui/core/Collapse';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import moment from 'moment';
import Badge from '@material-ui/core/Badge';

  

const useStyles = makeStyles((theme) => ({
  root: {
    
    marginTop : 50,
    paddingRight : 150,
    paddingLeft : 150
  },
  
  button: {
    margin: theme.spacing(1),
    height:55
  },
  button2: {
    margin: theme.spacing(1),
   
  },
  commentForm:{
    display:"flex", 
    alignItems:"flex-end",
    marginBottom:35
  },
  root2: {
    maxWidth: 350,
    marginTop : 50,
    // paddingRight : 150,
    paddingLeft : 20
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },

}));


export default function CardDetail({post}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const matches = useMediaQuery('(min-width:750px)');

  return (
    <Card className={matches ? classes.root : classes.root2}>
    
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {post?.author[0]}
          </Avatar>
        }
       
        title={post?.title}
        subheader= { moment(post?.publish_date).startOf('hour').fromNow() }
       
      />
      <Typography style={{fontSize:18, margin:20,color:'crimson'}}>created by {post?.author}</Typography>
   
      <CardMedia
        className={classes.media}
        image={post?.image}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {post?.content}
        </Typography>

      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Badge badgeContent={post?.like_count} color='secondary'>
          <FavoriteIcon />
          </Badge>
        </IconButton>
        <IconButton aria-label="Visibility">
        <Badge badgeContent={post?.view_count} color='secondary'>
          <VisibilityIcon />
          </Badge>
        </IconButton>
        <IconButton aria-label="ChatBubbleOutline">
        <Badge badgeContent={post?.comment_count} color='secondary'>
          <ChatBubbleOutlineIcon />
          </Badge>
        </IconButton>
        
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        <Typography style={{color:"#187965"}}>See Comments</Typography>
      </CardActions>
      
        {/* <CssTextField className={classes.margin} id="custom-css-standard-input" fullWidth label="Comment" /> */}
        <form className={classes.commentForm}>
        <TextField
            id="filled-full-width"
            style={{display:"inline-block", float:"right"}}
            label="Comments"
            // style={{ margin: 8, maxWidth: "%50" }}
            placeholder="leave your Comment"          
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            variant="filled"
            />
            
        <Button
            style={{fontWeight:"bold"}}
            variant="contained"
            color="secondary"
            className={classes.button}
            endIcon={<SendIcon>send</SendIcon>}
        >Send</Button>
      </form>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
          {post?.comments.map((comment) =>{
            return (
              <Typography paragraph><b>{comment.content}</b> comment by <i>{comment.user}</i> at {moment(comment.time).startOf('hour').fromNow()}</Typography>

            )
            })
          }

        </CardContent>
      </Collapse>
    </Card>
  );
}