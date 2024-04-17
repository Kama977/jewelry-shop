import React, { useContext } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { useCart } from "react-use-cart";
import { useTranslation } from "react-i18next";
import { i18n } from "i18next";
import { toast } from "react-toastify";
import Wishlistbtn from "./Wishlistbtn";
import { useParams } from "react-router-dom";
import { MyProducts } from "../GlobalContext/GlobalContext";

const Productreview = (product) => {
  const { t, i18n } = useTranslation();
  const { id } = useParams();

  const { addItem } = useCart();

  const {products} = useContext(MyProducts)
  let detailedProduct = products.find((item)=>item.id === id)

  return (
    <div key={product.id} className="container-fluid bodydark d-flex justify-content-center py-5">
          <div className="card mb-3" style={{ maxWidth: 1000 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={detailedProduct.image}
                  className="img-fluid"
                  alt="prodphoto"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div className="row">
                      <div className="col-10">
                      <h5 className="card-title">
                      {i18n.language === "az" ? detailedProduct.nameAz : detailedProduct.name}
                        </h5>
                      </div>
                      <div className="col-2">
                      <Wishlistbtn product={detailedProduct} />
                      </div>
                  </div>
              
                  <p className="card-text darktext">{detailedProduct.price}$</p>
                  <p className="card-text darktext">
                  {i18n.language === "az" ? detailedProduct.descriptionAz : detailedProduct.description}
                    </p>
                  <p className="card-text darktext">SKU: {detailedProduct.sku}</p>
                  <p className="card-text darktext">{t("CATEGORY")}: {i18n.language === "az" ? detailedProduct.categoryAz : detailedProduct.category}
                   </p>
                  <p className="card-text">
                    <button
                      className="btn btn-dark"
                      onClick={() => {
                        addItem(detailedProduct);
                        toast.success(t("addedtocart"));
                      }}
                    >
                      {" "}
                      <LuShoppingCart size={20} />  {t("addcart")}{" "}
                    </button>
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
    </div>
  );
};

export default Productreview;
