import { assets, blog_data, comments_data } from "../assets/assets";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import moment from "moment";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const Blog = () => {
  const {id} = useParams();
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState(" ");
  const [content, setContent] = useState(" ");
  
  const fetchBlogData = async () => {
    const blog = blog_data.find((item)=>item._id === id);
    setBlog(blog);
  }

  const addComment = async (e) => {
    e.preventDefault();

  }

  const fetchCommentsData = async () => {
    const comments = comments_data;
    setComments(comments);
  }

  useEffect(()=>{
    fetchBlogData();
    fetchCommentsData();
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
        <img src={blog.image} alt="" className="rounded-3xl mb-5" />
        <div className="rich-text max-w-3xl mx-auto" dangerouslySetInnerHTML={{__html: blog.description}}></div>
      </div>

      {/* Comment Section */}
      <div className="mt-14 mb-10 max-w-3xl mx-auto">
        <p className="font-semibold mb-4">Comments ({comments.length})</p>
        <div className="flex flex-col gap-4">
          {comments.map((comment,index)=>(
            <div className="relative bg-primary/2 border border-primary/5 max-w-xl p-4 rounded text-gray-600" key={index}>
              <div className="flex items-center gap-2 mb-2">
                <img src={assets.user_icon} alt="" className="w-6" />
                <p className="font-medium">{comment.name}</p>
              </div> 
              <p className="text-sm max-w-md ml-8 ">{comment.content}</p>
              <div className="absolute right-4 bottom-3 flex items-center gap-2 text-xs">{moment(comment.createdAt).fromNow()}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Add Comment Section */}
      <div className="max-w-3xl mx-auto">
        <p className="font-semibold mb-4">Add your comment</p>
        <form onSubmit={addComment} className="flex flex-col items-start gap-4 max-w-lg">
          <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder="Name" required className="w-full p-2 border bprder-gray-300 rounded outline-none" />
          <textarea onChange={(e)=>setContent(e.target.value)} value={content} placeholder="Comment" className="w-full p-2 border bprder-gray-300 rounded outline-none h-48" required></textarea>
          <button type="submit" className="bg-primary text-white p-2 px-8 mb-2 hover:scale-102 transition-all cursor-pointer rounded">Submit</button>
        </form>
      </div>

      {/* Share Buttons */}
      <div className="my-24 max-w-3xl mx-auto">
        <p className="font-semibold mb-4">Share this blog on social media</p>
        <div className="flex">
          <img src={assets.facebook_icon} alt="" width={50} />
          <img src={assets.twitter_icon} atlt="" width={50} />
          <img src={assets.googleplus_icon} alt="" width={50} />

        </div>
  
      </div>

      <Footer />
    </div>

  
  ) : (
    <Loader />
  )
}

export default Blog