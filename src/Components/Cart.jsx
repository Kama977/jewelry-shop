import React, { useContext } from "react";
import { useCart } from "react-use-cart";
import { AiOutlineDelete } from "react-icons/ai";
import { HiPlus } from "react-icons/hi2";
import { RxMinus } from "react-icons/rx";
import { useTranslation } from "react-i18next";
import { i18n } from "i18next";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BsCartX } from "react-icons/bs";
import { DarkModeContext } from "../GlobalContext/Theme";

const Cart = ({ token }) => {
  const { items, removeItem, updateItemQuantity, cartTotal } = useCart();
  const { t, i18n } = useTranslation();
  const { emptyCart } = useCart();
  const navigate = useNavigate();

  const {darkMode} = useContext(DarkModeContext)

  const handleCheckout = () => {
    if (token) {
      navigate("/succesful");
      emptyCart();
    } else {
      toast.error("Please sign in");
      navigate("/account")
    }
  };

  return (
    <div className="container-fluid bodydark table-responsive py-5">
      {items.length === 0 ? (
        <div className="container text-center">
          <BsCartX size={200} style={{color: darkMode === true ? 'white' : 'black'}} />
          <br />
          <br />
          <p className="fs-3">Cart is empty</p>
        </div>
      ) : (
        <div className="container">
          <p className="italiana text-center">{t("Cart")}</p>
          <table className="table">
            <thead className="table-dark">
              <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col">{t("prodname")}</th>
                {/* <th scope="col">{t("prodphoto")}</th> */}
                <th scope="col">{t("prodprice")}</th>
                <th scope="col">{t("prodquant")}</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={item.id}>
                    {/* <th scope="row">{item.id}</th> */}
                    <td> <img
                        style={{ width: 40, height: 50 }}
                        src={item.image}
                        alt="cartimg"
                      ></img>  {i18n.language === "az" ? item.nameAz : item.name}</td>
                    {/* <td>
                     
                    </td> */}
                    <td>{item.price * item.quantity}$</td>
                    <td>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                        style={{ border: "none", backgroundColor: "white" }}
                      >
                        <RxMinus />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                        style={{ border: "none", backgroundColor: "white" }}
                      >
                        <HiPlus />
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          removeItem(item.id);
                          toast.error(t("deletedcart"));
                        }}
                        style={{ border: "none", backgroundColor: "white" }}
                      >
                        <AiOutlineDelete />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          
          </table>
          <br />
          <h2 className="textfordark">
              {t("carttotal")} {cartTotal} $
            </h2>
            <button onClick={handleCheckout} className="btn custom-btn">
              {t("checkout")}
            </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
