import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { i18n } from "i18next";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import { Button } from "react-bootstrap";
import { FiLogOut } from "react-icons/fi";
import { DarkModeContext } from "../GlobalContext/Theme";
import ReactSwitch from "react-switch";
import {logo} from '../logo1.png'
import DarkMode from "../DarkMode/DarkMode";

const Header = ({ token }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const clickHandle = (lang) => {
    i18n.changeLanguage(lang);
  };

  const { totalItems } = useCart();
  const { totalWishlistItems } = useWishlist();

  function handleLogout() {
    sessionStorage.removeItem("token");
    navigate("/");
  }

  function handleDash() {
    if (token.user.user_metadata.full_name === "admin") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  }

  const { darkMode, toggleMode } = useContext(DarkModeContext);

  return (
    <div className="foots">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                className="img-fluid inverted"
                src={
                  "https://ascella.qodeinteractive.com/wp-content/uploads/2023/02/mob-heder-logo-x2.png"
                }
                alt=""
              />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link
                  className="fs-5 underline"
                  style={{ textDecoration: "none" }}
                  to="/"
                >
                  {t("home")}
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className="fs-5 underline"
                  style={{ textDecoration: "none" }}
                  to="/shop"
                >
                  {t("Shop")}
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className="fs-5 underline"
                  style={{ textDecoration: "none" }}
                  to="/blog"
                >
                  {t("Blog")}
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className="fs-5 underline"
                  style={{ textDecoration: "none" }}
                  to="/aboutus"
                >
                  {t("Aboutus")}
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className="fs-5 underline"
                  style={{ textDecoration: "none" }}
                  to="/faq"
                >
                  {t("FAQ")}
                </Link>
              </Nav.Link>
            </Nav>

            <div className="row m-3">
              <div className="col-sm m-2 textfordark">
                {token ? (
                  <NavDropdown
                    title={token.user.user_metadata.full_name}
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item>
                      <button type="button" class="btn" onClick={handleDash}>
                        Dashboard
                      </button>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="account">
                      <Button onClick={handleLogout}>
                        <FiLogOut />
                      </Button>
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <Nav.Link>
                    <Link
                      className="fs-3"
                      style={{ textDecoration: "none", color: "black" }}
                      to="/account"
                    >
                      <CiUser
                        style={{ color: darkMode === true ? "white" : "black" }}
                      />
                    </Link>{" "}
                  </Nav.Link>
                )}
              </div>
              {/* <Nav.Link className="col-sm m-2 cart">
                <Link
                  className="fs-3"
                  style={{ textDecoration: "none", color: "black" }}
                  to="/wishlist"
                >
                  <span className="count">{totalWishlistItems / 1}</span>
                  <CiHeart
                    style={{ color: darkMode === true ? "white" : "black" }}
                  />
                </Link>
              </Nav.Link> */}
              {/* <Nav.Link className="col-sm m-2 cart">
                <span className="count">{totalItems}</span>
                <Link
                  className="fs-3 material-icons"
                  style={{
                    textDecoration: "none",
                    color: darkMode === true ? "white" : "black",
                  }}
                  to="cart"
                >
                  <PiShoppingCartSimpleThin />
                </Link>
              </Nav.Link> */}
              
            </div>
                <div>
            <button type="button" class="btn btn-dark position-relative col-sm m-2">
            <Link
                 className="fs-3"
                 style={{ textDecoration: "none", color: "black" }}
                 to="/wishlist"
               >
                 <CiHeart
                   style={{ color: "white" }}
                 />
                </Link>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {totalWishlistItems / 1}
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>

            <button type="button" class="btn btn-dark position-relative col-sm m-2">
            <Link
                  className="fs-3 material-icons"
                  style={{
                    textDecoration: "none",
                    color: "white"
                  }}
                  to="cart"
                >
                  <PiShoppingCartSimpleThin />
                </Link>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {totalItems}
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>
            </div>

            <div className="p-2">
              <button
                style={{
                  backgroundColor: "transparent",
                  color: darkMode === true ? "white" : "black",
                }}
                className="lang"
                onClick={() => clickHandle("en")}
              >
                EN
              </button>
              <button
                style={{
                  backgroundColor: "transparent",
                  color: darkMode === true ? "white" : "black",
                }}
                className="lang"
                onClick={() => clickHandle("az")}
              >
                AZ
              </button>
            </div>

            <div>
              <DarkMode></DarkMode>
              {/* <ReactSwitch
                checked={darkMode}
                onChange={toggleMode}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={15}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={15}
                width={30}
                className="react-switch"
                id="material-switch"
              /> */}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
