import { assets, blog_data } from "../assets/assets";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Blog = () => {
  const {id} = useParams();
  const [blog, setBlog] = useState(null);
  const fetchBlogData = async () => {
    const blog = blog_data.find((blog)=>blog._id === id);
    setBlog(blog);
  }

  useEffect(()=>{
    fetchBlogData();
  },[id]);

  return blog ? (
        <div className="relative">
          <img src={assets.gradientBackground} alt="blog-bg" className="absolute -top-50 -z-1 opacity-50" />
        <Navbar />
      <div>
        <p>
          Published On {blog.createdAt.split("T")[0]}
        </p>
      </div>


      <div></div>

    </div>
  
  ) : (
    <div>Loading...</div>
  )
}

export default Blog