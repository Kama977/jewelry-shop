import React, { useContext, useEffect, useState } from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { i18n } from "i18next";
import { MyProducts } from "../GlobalContext/GlobalContext";
import ProductCard from "../Components/ProductCard";
import { DarkModeContext } from "../GlobalContext/Theme";

const CheckoutSuccess = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const { darkMode, toggleMode } = useContext(DarkModeContext);

  const goToHome = () => {
    navigate("/");
  };

  const { products } = useContext(MyProducts);
  const [data, setData] = useState(products);

  function shuffle(data) {
    data.sort(() => Math.random() - 0.5);
  }

  useEffect(() => {
    shuffle(data);
  });

  return (
    <div className="bodydark">
      <Result
        status="success"
        title={t("succespaid")}
        extra={[
          <Button onClick={goToHome} type="primary" key="console">
            {t("gotohome")}
          </Button>,
        ]}
      />

      <div className="container">
        <h2 className="container text-center italiana">{t("recomndprod")}</h2>
        <div className="container row">
          {data.slice(0, 4).map((item, index) => {
            return <ProductCard product={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
