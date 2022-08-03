import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import "./form.css"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts'

const Form = ({ currentId, setCurrentId}) => {
  
    const [postData, setPostData] = useState({
       creator: '', title: '', message: '', tags: '', selectedFile: ''
    });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    
    const dispatch = useDispatch();

    useEffect(() => {
      if(post) setPostData(post);

    }, [post])

   const handleSubmit = (e) => {
      e.preventDefault();

      if(currentId) {
        
        dispatch(updatePost(currentId, postData), );
       
  
      } else {
        
        dispatch(createPost( postData));

      }
      

      

   }

   const clear = () => {

   }

    return (
       <div className="form-cont">
        <form autoComplete="off" noValidate  onSubmit={handleSubmit} >
          <div className="form-h">Create Post</div>
          <input 
          className="field"
          type="text" 
          name="creator" 
          variant="outlined" 
          placeholder="Creator"
          value={postData.creator}
          onChange={(e) => setPostData({ ...postData, creator: e.target.value })} 
          />
          <button className= "submit-b" variant="contained" type="submit"  onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} >Submit</button>
          <br></br>
          <input 
          className="field1"
          type="text" 
          name="title" 
          variant="outlined" 
          placeholder="Title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })} 
          />
          <br></br>
          <input 
          type="text" 
          className="field2"
          name="message" 
          variant="outlined" 
          placeholder="Message"
          value={postData.message}
          onChange={(e) => setPostData({ ...postData, message: e.target.value })} 
          />
          <br></br>
          <input 
          type="text" 
          className="field3"
          name="tags" 
          variant="outlined" 
          placeholder="Tags"
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} 
          />
          <br></br>
          <button  className="choose-b">
            
            <FileBase 
          
              type="file"
             
             
              
              
              
              
              onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
            />
            
        
            
            
            
           
          </button>
        </form>
       </div>
    );
}

export default Form;