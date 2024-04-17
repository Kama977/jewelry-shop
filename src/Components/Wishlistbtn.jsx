import React from "react";
import { useWishlist } from "react-use-wishlist";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import { i18n } from "i18next";
import { useTranslation } from "react-i18next";

const Wishlistbtn = ({ product }) => {
  const { t, i18n } = useTranslation();

  const { inWishlist, addWishlistItem, removeWishlistItem } = useWishlist();

  const toggleWisht = (myProduct) => {
    if (inWishlist(myProduct.id)) {
      removeWishlistItem(myProduct.id);
      toast.error(t("deletedwish"))
    } else {
      addWishlistItem(myProduct);
      toast.success(t("heart"));
    }
  };

  return (
    <div>
      <button
        style={{ backgroundColor: "none", background: "none", borderStyle: "none" }}
        onClick={() => {
          toggleWisht(product);
        }}
      >
        {inWishlist(product.id) ? <FaHeart size={20} color="red"/> : <FaRegHeart size={20} color="red" />}
      </button>
    </div>
  );
};

export default Wishlistbtn;
