import { useEffect } from "react";
import { useState } from "react";

const Blogs = () =>{
    const [blogs , setBlogs] = useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/saad1ibn2akhter/fake-APi/main/fakedata.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);

    console.log(blogs);

    return(
        <div>{blogs.length}</div>
    );
};

export default Blogs;