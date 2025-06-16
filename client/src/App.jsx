import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Layout from "./pages/admin/Layout";
import Dashboard from "./pages/admin/Dashboard";
import ListBlog from "./pages/admin/ListBlog";
import AddBlog from "./pages/admin/AddBlog";
import Comment from "./pages/admin/Comment";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="/admin" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="list-blog" element={<ListBlog />} />
        <Route path="add-blog" element={<AddBlog />} />
        <Route path="comments" element={<Comment />} />
      </Route>
    </Routes>
  );
};

export default App;
