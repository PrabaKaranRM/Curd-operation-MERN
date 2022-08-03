import React from 'react';
import "./post.css"
import { useDispatch } from 'react-redux'
import { FcLike } from "react-icons/fc"
import { AiOutlineDelete } from "react-icons/ai"
import { FiMoreHorizontal } from "react-icons/fi"
import moment from "moment"
import { deletePost, likePost } from '../../../actions/posts'

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    return (
        <div  className="post-cont">
           
             
              <img src={post.selectedFile } className="img" title={post.title}  alt="" />
             <div className="tit-c">
              <div className="title-tx" gutter="bottom">{post.title}</div>
              
              </div>
                <div className= "sm-tx">{post.creator}</div>
                
           
            
              <div className="hor-b" onClick={() => setCurrentId(post._id)}>
                <FiMoreHorizontal className="hor-t"/>
                
                
            </div>
            <div classname="tag"></div>
            <div className="tag-con">
            <div className="sm-tx2">{post.tags.map(( tag) => `#${tag}` )}</div>
            </div>
            <div className= "bd-tx">{moment(post.createdAt).fromNow()}</div>
            
            
            <div className= "message" gutter="bottom">{post.message}</div>
         
            <div className="cardactions">
                <div className="like" onClick= {() => dispatch(likePost(post._id))}>
                <FcLike  className="like-icon"/> 
                    <div className="like-t">
                        Likes
                    </div>
                      
                    <div className="like-count">
                    {post.likeCount}
                    </div>
                    
                </div>
                <div className="delete-b" onClick= {() => dispatch(deletePost(post._id))}>
                    
                    Delete
                    
                </div>
              

            </div>
           
        </div>
    );
}

export default Post;