import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../Client";
import { useTranslation } from "react-i18next";
import { i18n } from "i18next";

const Register = () => {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation();


  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  console.log(formData)

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          },
        },
      });

      alert("Check your email");
      navigate('/account')
    } catch (error) {
      console.log(error);
    }
  }

  return (

    <div className="container-fluid bodydark d-flex justify-content-center align-items-center min-vh-100">
      <div className="row bodydark border p-3 box-area">

        <div className="bodydark col-md-6 d-flex justify-content-center align-items-center flex-column left-box">
          <div className="bodydark featured-image mb-3">
            <img style={{  width: 350 }} src={'https://ascella.qodeinteractive.com/wp-content/uploads/2022/12/h6-img-4.jpg'} alt="img" className="img-fluid" />
          </div>
          <p>

          </p>
        </div>

        <div className="bodydark col-md-6 right-box">
          <div className="row align-items-center">
            <div className="header-text mb-4 fs-1 textfordark">
            {t("Signup")}
            </div>

            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  class="form-control form-control-lg bg-light fs-6"
                  name="email"
                  type="text"
                  placeholder={t("email")}
                  onChange={handleChange}
                /> </div>
              <div className="input-group mb-3">
                <input
                  class="form-control form-control-lg bg-light fs-6"
                  name="fullName"
                  type="text"
                  placeholder={t("fullname")}
                  onChange={handleChange}
                /> </div>
              <div className="input-group mb-3">
                <input
                  class="form-control form-control-lg bg-light fs-6"
                  type="password"
                  name="password"
                  placeholder={t("Password")}
                  onChange={handleChange}
                /> </div>

              <div className="input-group mb-5">
                <button className="btn custom-btn btn-lg w-100 fs-6" type="submit">
                {t("Signup")}
                </button>
              </div>

              <div className="input-group mb-3 textfordark">
              {t("haveaccount")}  <Link to="/account">{t("Signin")}</Link>
              </div>


            </form>

          </div>
        </div>

      </div>


    </div>
  );
};

export default Register;


