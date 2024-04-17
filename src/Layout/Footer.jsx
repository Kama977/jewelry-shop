import React from "react";
import { useTranslation } from "react-i18next";
import { i18n } from "i18next";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer className="foots pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <img
              className="img-fluid inverted"
              src={
                "https://ascella.qodeinteractive.com/wp-content/uploads/2023/02/mob-heder-logo-x2.png"
              }
              alt="logo"
            />
            <br /> <br />
            <p>
            {t('slogan')}
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">             
            <div className='row'><Nav.Link ><Link className='fs-5 underline' style={{ textDecoration: 'none' }} to="/">{t('home')}</Link></Nav.Link></div>
             <div className='row'><Nav.Link ><Link className='fs-5 underline' style={{ textDecoration: 'none' }} to="/shop">{t('Shop')}</Link></Nav.Link></div>
             <div className='row'><Nav.Link ><Link className='fs-5 underline' style={{ textDecoration: 'none' }} to="/blog">{t('Blog')}</Link></Nav.Link></div>
             <div className='row'><Nav.Link ><Link className='fs-5 underline' style={{ textDecoration: 'none' }} to="/aboutus">{t('Aboutus')}</Link></Nav.Link></div>
             <div className='row'><Nav.Link ><Link className='fs-5 underline' style={{ textDecoration: 'none' }} to="/faq">{t('FAQ')}</Link></Nav.Link></div>
          
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
               <p>
                 Rosendal Street 506 
                 <br />
                 + (994) 55 123 45 67
                 <br />
                 ascella@gmail.com
               </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <img className="inverted" style={{width: 206, height:21}} src={"https://ascella.qodeinteractive.com/wp-content/uploads/2023/03/footer-logo-clients-img-x2.png"} alt="pay" />
              <br /> <br />
                <p>© 2024 Copyright: Ascella</p>

          </div>

        </div>
      </div>
    </footer>

  );
};

export default Footer;
