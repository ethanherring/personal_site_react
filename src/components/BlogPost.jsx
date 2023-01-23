import React from "react";
import { Card, Grid, CardContent, CardHeader, 
    CardMedia, Typography, Avatar, makeStyles } from '@mui/material';

import blogPostList from '../pageData/blogPostList.json';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    avatar: {
      backgroundColor: theme.palette.secondary.main,
    },
  }));


const BlogPost = ({ title, author, image, content }) => {

    const classes = useStyles();

    return (
        <>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            {author[0]}
                        </Avatar>
                    }
                    title={title}
                    subheader={`By ${author}`}
                />
                <CardMedia
                    className={classes.media}
                    image={image}
                    title={title}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {content}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}

export default BlogPost;