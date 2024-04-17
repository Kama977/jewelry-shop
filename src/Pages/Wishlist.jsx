import React, { useContext } from "react";
import { useWishlist } from "react-use-wishlist";
import ProductCard from "../Components/ProductCard";
import { i18n } from "i18next";
import { useTranslation } from "react-i18next";
import { LuHeartOff } from "react-icons/lu";
import { DarkModeContext } from "../GlobalContext/Theme";


const Wishlist = () => {
  const { items } = useWishlist();
  const myArray = [...new Map(items.map((item) => [item.id, item])).values()];

  const { t, i18n } = useTranslation();
  const {darkMode} = useContext(DarkModeContext)


  return (
    <>
      <div className="container-fluid bodydark p-5">
        {myArray.length === 0 ? (
          <div className="container text-center">
            <LuHeartOff size={200} style={{color: darkMode === true ? 'white' : 'black'}} />
            <br /><br />
            <p className="fs-3">Wishlist is empty</p>
          </div>
          
        ) : (
          <div className="row g-3">
            <p className="italiana text-center">{t("wishlist")}</p>
            {myArray.map((item) => {
              return <ProductCard product={item} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Wishlist;


