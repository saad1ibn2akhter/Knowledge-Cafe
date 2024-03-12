import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = () =>{
    const [blogs , setBlogs] = useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/saad1ibn2akhter/fake-APi/main/fakedata.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);

    console.log(blogs);

    return(
        <div className="md:w-2/3">
            <h1 className="text-4xl font-medium">Blogs : {blogs.length}</h1>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;