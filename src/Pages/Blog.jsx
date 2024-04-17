import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { i18n } from "i18next";
import { supabase } from "../CreateBlog";
import { Link } from "react-router-dom";

const Blog = () => {
  const { t, i18n } = useTranslation();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetchBlogs();
  }, []);

  async function fetchBlogs() {
    const { data } = await supabase.from("Blog").select("*");
    setBlogs(data);
  }

  return (
    <div className="bodydark">
          
          <div>
          <p className="container text-center italiana">{t('blog')}</p>
          </div>
       
      {blogs.map((blog) => {
        return (
          <div className="container">

            <div>
              <img className="img-fluid" src={blog.image} alt="blogimg"></img>
            </div>
            
            <br />
            <div>
              <h2 className="italiana">
                {i18n.language === "az" ? blog.titleAz : blog.title}
                </h2>
                <h6 style={{color:'grey'}}>
                  {blog.date}
                </h6>
            </div>
            <br />
            <div>
              <p className="justifytext">
              {i18n.language === "az" ? blog.descriptionAz.slice(0, 595) : blog.description.slice(0, 595)}.</p>
            </div>

            <div>
              <Link to={`/blog/${blog.id}`}>
                <button type="button" class="btn custom-btn">
                  {t("read")}
                </button>
              </Link>
            </div>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
