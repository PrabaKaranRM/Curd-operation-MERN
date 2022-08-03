import React, {useEffect, useState} from 'react';
import Nav from "./components/Nav/nav"
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import About from './components/About/about'
import "./styles.css"
import { useDispatch } from "react-redux"
import { getPosts } from "./actions/posts"


const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
         dispatch(getPosts());
    }, [dispatch]);

   

    return (
    <div>
        
            <Nav />
            <br></br>
            <br></br>
            
           
            <Posts setCurrentId={setCurrentId}   />
            <About />
            <Form currentId={currentId} setCurrentId={setCurrentId}  />
            
            
        
    </div>
    );
}

export default App;