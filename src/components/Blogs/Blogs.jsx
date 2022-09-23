import './blogs.css';
import {blogsDetails} from './../../data';
import { useState } from 'react';
import Accordion from './Accordion';

function Blogs(){

    const [description] = useState(blogsDetails);
    
    return (
        <div className="blogs" id = "blog">
           <div className="container">
                <h3 className="blogs__tittle">About My Blogs</h3>
                <Accordion entries = {description} />
                </div>
        </div>
    );
}

export default Blogs;