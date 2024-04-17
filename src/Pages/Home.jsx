import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import { useTranslation } from "react-i18next";
import { i18n } from "i18next";
import { Link } from "react-router-dom";
import { MyProducts } from "../GlobalContext/GlobalContext";
import { supabase } from "../CreateBlog";

const Home = () => {
  const { t, i18n } = useTranslation();

  const { products } = useContext(MyProducts);

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetchBlogs();
  }, []);

  async function fetchBlogs() {
    const { data } = await supabase.from("Blog").select("*");
    setBlogs(data);
  }

  return (
    // carousel

    <div className="bodydark">
      <div id="carouselExampleFade" className="carousel slide carousel-fade ">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={
                "https://ascella.qodeinteractive.com/wp-content/uploads/2023/03/main-rev-imagei-7.jpg"
              }
              className="d-block w-100"
              alt="img1"
            ></img>
            <div className="carousel-caption d-none d-md-block">
              <p className="heads">{t("Pearls")}</p>
              <Link to="/shop">
                <button className="btn custom-btn">{t("ShopNow")}</button>
              </Link>
            </div>
          </div>

          <div className="carousel-item ">
            <img
              src={
                "https://ascella.qodeinteractive.com/wp-content/uploads/2023/03/main-rev-imagei-10.jpg"
              }
              className="d-block w-100"
              alt="img2"
            ></img>
            <div className="carousel-caption d-none d-md-block">
              <p className="heads">{t("Romance")}</p>
              <Link to="/shop">
                <button className="btn custom-btn">{t("ShopNow")}</button>
              </Link>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={
                "https://ascella.qodeinteractive.com/wp-content/uploads/2023/03/main-rev-imagei-11.jpg"
              }
              className="d-block w-100"
              alt="img3"
            ></img>
            <div className="carousel-caption d-none d-md-block">
              <p className="heads">{t("Charms")}</p>
              <Link to="/shop">
                <button className="btn custom-btn">{t("ShopNow")}</button>
              </Link>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={
                "https://ascella.qodeinteractive.com/wp-content/uploads/2023/03/main-rev-imagei-12.jpg"
              }
              className="d-block w-100"
              alt="img3"
            ></img>
            <div className="carousel-caption d-none d-md-block">
              <p className="heads">{t("Diamonds")}</p>
              <Link to="/shop">
                <button className="btn custom-btn">{t("ShopNow")}</button>
              </Link>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={
                "https://ascella.qodeinteractive.com/wp-content/uploads/2023/03/main-rev-imagei-13.jpg"
              }
              className="d-block w-100"
              alt="img3"
            ></img>
            <div className="carousel-caption d-none d-md-block">
              <p className="heads">{t("HeartStone")}</p>
              <Link to="/shop">
                <button className="btn custom-btn">{t("ShopNow")}</button>
              </Link>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container">
        {/* Latest */}

        <h1 className="text-center miniheads p-5 textfordark">{t("newcollection")}</h1>

        <div>
          <div className="container-fluid">
            <div className="row">
              {products.slice(1, 5).map((item) => {
                return <ProductCard product={item} />;
              })}
            </div>
          </div>
        </div>
        <br />
        <div className="container-fluid text-center">
          <Link to="/shop">
            <button className="btn custom-btn">{t("shopmore")}</button>
          </Link>
        </div>

        {/* advantages */}

        <div className="text-center foots row m-5 p-5">
          <div className="text-center col-sm-3">
            <img
              src={
                "https://ascella.qodeinteractive.com/wp-content/uploads/2023/03/h4-new-icon-3.png"
              }
              alt="world"
              className="img-fluid inverted"
            />
            <p className="fw-bold">{t("worldwide")}</p>
          </div>

          <div className="text-center col-sm-3">
            <img
              src={
                "https://ascella.qodeinteractive.com/wp-content/uploads/2023/03/h4-new-icon1.png"
              }
              alt="world"
              className="img-fluid inverted"
            />
            <p className="fw-bold">{t("sustainability")}</p>
          </div>

          <div className="text-center col-sm-3">
            <img
              src={
                "https://ascella.qodeinteractive.com/wp-content/uploads/2023/03/h4-new-icon-2.png"
              }
              alt="world"
              className="img-fluid inverted"
            />
            <p className="fw-bold">{t("shippingDelivery")}</p>
          </div>

          <div className="text-center col-sm-3">
            <img
              src={
                "https://ascella.qodeinteractive.com/wp-content/uploads/2023/03/h4-new-icon-4.png"
              }
              alt="world"
              className="inverted"
            />
            <p className="img-fluid fw-bold">{t("withlove")}</p>
          </div>
        </div>

        {/* banners shopping */}
        <div className="container row py-5 ">
          <div className="col-sm p-3 positinbtn">
            <img
              src={
                "https://ascella.qodeinteractive.com/wp-content/uploads/2022/12/h6-blog-img-1.jpg"
              }
              alt="img1"
              className="img-fluid"
            />
            <Link to="/shop"><button className="btnimage">{t("shopmore")}</button></Link>
            
          </div>

          <div className="col-sm p-3 positinbtn">
            <img
              src={
                "https://ascella.qodeinteractive.com/wp-content/uploads/2022/12/h6-blog-img-2.jpg"
              }
              alt="img2"
              className="img-fluid"
            />
            <Link to="/shop"><button className="btnimage">{t("shopmore")}</button></Link>

          </div>
        </div>

        {/* partners */}

        <h1 className="text-center miniheads p-5 textfordark">{t("partners")}</h1>

        <div className="container text-center row p-3 d-flex align-items-center justify-content-center">
          <div className="col-sm">
            <img
              className="img-fluid inverted"
              alt="images17"
              src={
                "https://ascella.qodeinteractive.com/wp-content/uploads/2022/12/p2-client-1.png"
              }
            />
          </div>
          <div className="col-sm">
            <img
              className="img-fluid inverted"
              alt="images15"
              src={
                "https://ascella.qodeinteractive.com/wp-content/uploads/2022/12/p2-client-2.png"
              }
            />
          </div>
          <div className="col-sm">
            <img
              className="img-fluid inverted"
              alt="images14"
              src={
                "https://ascella.qodeinteractive.com/wp-content/uploads/2022/12/p2-client-3.png"
              }
            />
          </div>
          <div className="col-sm">
            <img
              className="img-fluid inverted"
              alt="images12"
              src={
                "https://ascella.qodeinteractive.com/wp-content/uploads/2022/12/p2-client-4.png"
              }
            />{" "}
          </div>
          <div className="col-sm">
            <img
              className="img-fluid inverted"
              alt="images13"
              src={
                "https://ascella.qodeinteractive.com/wp-content/uploads/2022/12/p2-client-5.png"
              }
            />{" "}
          </div>
          <div className="col-sm">
            <img
              className="img-fluid inverted"
              alt="images11"
              src={
                "https://ascella.qodeinteractive.com/wp-content/uploads/2022/12/p2-client-6.png"
              }
            />
          </div>
        </div>

        {/* blog */}

        <div className="container row p-5 d-flex align-items-center justify-content-center">
          {blogs.slice(0, 2).map((blog) => {
            return (
              <div className="col-sm p-3">
                <img src={blog.image} alt="imgs" className="img-fluid" />
                <br /> <br />
                <p className="fs-2 miniheads">
                {i18n.language === "az" ? blog.titleAz : blog.title}
                </p>
                <h6 style={{color: 'grey'}}>{blog.date}</h6>
                <p className="justifytext"> {i18n.language === "az" ? blog.descriptionAz.slice(0, 305) : blog.description.slice(0, 300)}.</p>
                <Link to={`/blog/${blog.id}`}>
                  <button type="button" class="btn custom-btn">
                    {t("read")}
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
