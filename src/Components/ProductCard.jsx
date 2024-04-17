import React from "react";
import Card from "react-bootstrap/Card";
import { LuShoppingCart } from "react-icons/lu";
import { useCart } from "react-use-cart";
import { useTranslation } from "react-i18next";
import { i18n } from "i18next";
import { toast } from "react-toastify";
import Wishlistbtn from "./Wishlistbtn";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { t, i18n } = useTranslation();

  const { addItem } = useCart();

  return (
    <div
      key={product.id}
      className="col-lg-3 col-md-6 col-12 g-3 d-flex align-items-center"
    >
        <Card className="col" key={product.id} style={{ width: "16rem" }}>
              <Link to={`/shop/${product.id}`}>
                <Card.Img variant="top" src={product.image} />
              </Link>
              <Card.Body className="my-3">
                <div className="row">
                  <div className="col-10 ">
                  <Card.Title className="fw-bold darktext">
                  {i18n.language === "az" ? product.nameAz : product.name}
                  </Card.Title>
                <Card.Text>
                  <p className="darktext">
                  {i18n.language === "az" ? product.categoryAz : product.category}
                  </p>
                  <p className="darktext">{product.price} $ </p>
                </Card.Text>
                  </div>
                  <div className="col-2">
                  <Wishlistbtn product={product} />
                  </div>
                </div>
               
                <button
                  className="btn btn-dark "
                  onClick={() => {
                    addItem(product);
                    toast.success(t("addedtocart"));
                  }}
                > <LuShoppingCart size={20} />  {t("addcart")}{" "}
                </button>
                
              </Card.Body>
            </Card>
    </div>
  );
};

export default ProductCard;
