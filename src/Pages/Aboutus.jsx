import React, { useContext } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { i18n } from 'i18next';
import { DarkModeContext } from "../GlobalContext/Theme";


const Aboutus = () => {

  const { t, i18n } = useTranslation();
  const {darkMode} = useContext(DarkModeContext)

  return (
    <div className="bodydark ">
      <p className="container text-center italiana">{t('aboutus')}</p>

      {/* 2 pics */}

      <div className="container-fluid row py-5">
        
        <div className="col-sm">
          <img
            src={
              "https://ascella.qodeinteractive.com/wp-content/uploads/2022/12/p2-img-1.jpg"
            }
            alt="img1"
            className="img-fluid"
          />

        </div>

        <div className="col-sm">
          <img
            src={
              "https://ascella.qodeinteractive.com/wp-content/uploads/2022/12/p2-img-2.jpg"
            }
            alt="img2"
            className="img-fluid"
          />
        </div>
      </div>

      {/* quote+pic */}

      <div className="container-fluid text-center row py-5">
        <h3 className="textfordark">{t('whyus')}</h3>
        <p>
          {t('whyustext')}
        </p>
      </div>
      <hr></hr>
      {/* read more */}

      <div className="container-fluid text-center row gy-5 d-flex align-items-center justify-content-center py-5">
        <div className="col-sm">
          <img
            src={
              "https://ascella.qodeinteractive.com/wp-content/uploads/2022/12/p2-img-4.jpg"
            }
            alt="pics"
            className="img-fluid"
          />
        </div>

        <div className="col-sm text-start">
          <p className="italiana">{t('essentially')}</p>
          <p className="justifytext">
            {t('essentiallytext')}
          </p>
          <h4 className="textfordark">{t('sustainability')}</h4>
          <p className="justifytext">
            {t('sustainabilitytext')}
          </p>
        </div>
        <hr></hr>
      </div>

      {/* unique design */}

      <div className="container-fluid text-center row gy-5 d-flex align-items-center justify-content-center py-5">
        <div className="col-sm text-start m-5">
          <p className="italiana">{t('uniqdesg')}</p>
          <p className="justifytext">
            {t('uniqdesgtext')}
          </p>
          <h4 className="textfordark">{t('shopcontact')}</h4>
          <p>
          Rosendal Street 506 
            <br />
            + (994) 55 123 45 67
            <br />
            ascella@gmail.com
          </p>
        </div>

        <div className="col-sm">
          <img
            src={
              "https://ascella.qodeinteractive.com/wp-content/uploads/2022/12/p2-img-5.jpg"
            }
            alt="pics3"
            className="img-fluid"
          />
        </div>
      </div>

      <hr></hr>

      {/* contact */}

      <div className="container-fluid row text-center py-5">

        <div className="col-sm">
          <p className="fw-bold">{t('CONTACT')}</p>
          <p>Working hours Mon-Fri 10-18h <br /> + (994) 55 123 45 67</p>
        </div>

        <div className="col-sm">
          <h3 className="textfordark">{t('getintouch')}</h3>
          <p>{t('descriptemail')}</p>
          <form class="row g-3">
            <div class="col-auto">
              <input type="password" class="form-control" id="inputPassword2" placeholder={t("email")}></input>
            </div>
            <div class="col-auto">
              <button type="submit" class="btn custom-btn mb-4">{t('subscribe')}</button>
            </div>
          </form>
        </div>

        <div className="col-sm">
          <p className="fw-bold">{t('socialnets')}</p>
          <div className="d-flex justify-content-evenly">
            <FaFacebook size={25} style={{color: darkMode === true ? 'white' : 'black'}}/>
            <FaLinkedin size={25} style={{color: darkMode === true ? 'white' : 'black'}}/>
            <FaTwitter size={25} style={{color: darkMode === true ? 'white' : 'black'}}/>
            <FaYoutube size={25} style={{color: darkMode === true ? 'white' : 'black'}}/>
            <FaPinterest size={25} style={{color: darkMode === true ? 'white' : 'black'}}/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Aboutus;
