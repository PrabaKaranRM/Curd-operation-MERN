import React from 'react';
import "./styles.css"
import { useSelector } from 'react-redux';
import "./Post/post.css"
import {Grid, CircularProgress } from "@material-ui/core"
import Post from './Post/Post'


const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);

    console.log(posts);
    return (
        !posts.length ? <CircularProgress  /> : (
            <Grid className= "grid" container alignItems="center" spacing={74}  >
                
            {posts.map((post) => (
                <Grid  key={post._id} item xs={12} sm={10}  >
                <Post post={post} setCurrentId={setCurrentId}  />
                
                </Grid>
                
            ))}
        
        
        </Grid>
    ));
}

export default Posts;