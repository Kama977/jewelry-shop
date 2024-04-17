import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import { LuShoppingCart } from "react-icons/lu";
import { useCart } from "react-use-cart";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import Wishlistbtn from "../Components/Wishlistbtn";
import { Link } from "react-router-dom";
import { MyProducts } from "../GlobalContext/GlobalContext";
import { Select } from "antd";

const Shop = () => {
  const { t, i18n } = useTranslation();
  const { products } = useContext(MyProducts);

  const { addItem } = useCart();

  const [data, setData] = useState(products);

  // sort

  const sortProduct = (value) => {
    if (value === "all") {
      setData(products);
      return;
    } else if (value === "descending") {
      let copyState = [...data];
      let sortedProds = copyState.sort((a, b) => b.price - a.price);
      setData(sortedProds);
    } else if (value === "ascending") {
      let copyState = [...data];
      let sortedProds = copyState.sort((a, b) => a.price - b.price);
      setData(sortedProds);
    } else if (value === "a-z") {
      let copyState = [...data];
      let sortedProds = copyState.sort((a, b) => a.name.localeCompare(b.name));
      setData(sortedProds);
    } else if (value === "z-a") {
      let copyState = [...data];
      let sortedProds = copyState.sort((a, b) => b.name.localeCompare(a.name));
      setData(sortedProds);
    }
  };

  // filter

  const productItems = [
    ...new Set(
      products.map((Val) =>
        i18n.language === "az" ? Val.categoryAz : Val.category
      )
    ),
  ];

  const filterItem = (curcat) => {
    const newItem = products.filter((newVal) => {
      return (i18n.language === "az" ? newVal.categoryAz : newVal.category) === curcat;
    });
    setData(newItem);
  };

  return (
    <div className="container-fluid bodydark">
      <div>
        <p className="container text-center italiana">{t("Shop")}</p>
      </div>

      <div className="container">
        <Select
          defaultValue={t("all")}
          style={{
            width: 120,
          }}
          onChange={sortProduct}
          options={[
            {
              value: "all",
              label: t("all"),
            },
            {
              value: "a-z",
              label: "A-Z",
            },
            {
              value: "z-a",
              label: "Z-A",
            },
            {
              value: "ascending",
              label: t("ascending"),
            },
            {
              value: "descending",
              label: t("descending"),
            },
          ]}
        />
      </div>

      <br />

      <div className="container">
        <button
          className="btn custom-btn m-1"
          onClick={() => setData(products)}
        >
          {t("all")}
        </button>
        {productItems.map((item) => {
          return (
            <button
              type="button"
              onClick={() => filterItem(item)}
              className="btn custom-btn m-1"
            >
              {item}
            </button>
          );
        })}
      </div>

      <div className="container-fluid d-flex justify-content-center row row-cols-1 row-cols-md-2 row-cols-lg-3 p-3 g-0 gap-3">
        {data.map((product) => {
          return (
            <Card className="col" key={product.id} style={{ width: "18rem" }}>
              <Link to={`/shop/${product.id}`}>
                <Card.Img variant="top" src={product.image} />
              </Link>
              <Card.Body className="my-3">
                <div className="row">
                  <div className="col-10">
                    <Card.Title className="fw-bold darktext">
                      {i18n.language === "az" ? product.nameAz : product.name}
                    </Card.Title>
                    <Card.Text>
                      <p className="darktext">
                        {" "}
                        {i18n.language === "az"
                          ? product.categoryAz
                          : product.category}
                      </p>
                      <p className="fs-5 darktext">{product.price} $ </p>
                    </Card.Text>
                  </div>
                  <div className="col-2">
                    <Wishlistbtn product={product} />
                  </div>
                </div>

                <button
                  className="btn btn-dark"
                  onClick={() => {
                    addItem(product);
                    toast.success(t("addedtocart"));
                  }}
                >
                  {" "}
                  <LuShoppingCart size={20} /> {t("addcart")}{" "}
                </button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
