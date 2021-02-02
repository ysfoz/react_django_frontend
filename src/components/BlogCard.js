import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import Badge from "@material-ui/core/Badge";
import Collapse from "@material-ui/core/Collapse";
import moment from "moment";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:theme.spacing(3),
    backgroundImage:'linear-gradient(#990726, white)',
    minHeight: "80%",
    maxWidth: 345,
    color:'white',
    borderRadius:20,
    transition: 'width 2s, height 2s, transform 0.3s',
    '&:hover':{
      backgroundImage:'linear-gradient(white,#990726 )',
      boxShadow:'7px 7px rgba(0,0,0,0.1)',
      transform: 'scale(1.03, 1.03)',
      color:'black',
      
     
     }
  },
  header: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
   
  },
  media: {
    height: '60%',
    width:'60%',
    paddingTop: "56.25%", // 16:9
    borderRadius:'50%',
    margin:'auto 19%'
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: '#e8a628',
  },
}));

export default function BlogCard({
  title,
  slug,
  author,
  commentCount,
  id,
  image,
  likeCount,
  publishDate,
  content,
  updateDate,
  viewCount,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} >
      <Link
        color="inherit"
        style={{ textDecoration: "none" }}
        href={`/${slug}/detail/`}
      >
        <CardHeader
          className={classes.header}
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar} >
              {author[0].toUpperCase()}
            </Avatar>
          }
          title={title.toUpperCase()}
          subheader={moment(publishDate).format("LL")}
        />

        <CardMedia
          className={classes.media}
          image={image}
          title="Paella dish"
        />
      </Link>
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ height: 75, paddingTop: 2 }}
        >
          {content.substring(0, 111) + ". . ."}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Badge badgeContent={likeCount} color="secondary">
            <FavoriteIcon />
          </Badge>
        </IconButton>
        <IconButton aria-label="Visibility">
          <Badge badgeContent={viewCount} color="secondary">
            <VisibilityIcon />
          </Badge>
        </IconButton>
        <IconButton aria-label="Comment">
          <Badge badgeContent={commentCount} color="secondary">
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
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {content.length < 110
              ? "No more Content"
              : "➡️   . . .    " + content.substring(111)}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}



