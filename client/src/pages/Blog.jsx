import { assets, blog_data } from "../assets/assets";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import moment from "moment";

const Blog = () => {
  const {id} = useParams();
  const [blog, setBlog] = useState(null);
  const fetchBlogData = async () => {
    const blog = blog_data.find((item)=>item._id === id);
    setBlog(blog);
  }

  useEffect(()=>{
    fetchBlogData();
  },[id]);

  return blog ? (
        <div className="relative">
          <img src={assets.gradientBackground} alt="blog-bg" className="absolute -top-50 -z-1 opacity-50" />
        <Navbar />
      <div className="text-center mt-20 text-gray-600">
        <p className="text-primary py-4 font-medium">
          Published On {moment(blog.createdAt).format("MMMM Do YYYY")}
        </p>
        <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800">{blog.title}</h1>
        <h2 className="my-5 max-w-lg truncate mx-auto">{blog.subTitle}</h2>
        <p className="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary">Dhruv Vasisht</p>
      </div>


      <div className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
        <img src={blog.image} alt="" className="rounded-3xl w-full h-full object-cover" />
      </div>

    </div>
  
  ) : (
    <div>Loading...</div>
  )
}

export default Blog