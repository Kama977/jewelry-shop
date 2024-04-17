import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { supabase } from "../CreateBlog";


const SingleBlog = () => {
  const { t, i18n } = useTranslation();

  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [titleAz, setTitleAz] = useState('');
  const [descriptionAz, setDescriptionAz] = useState('');
  const [date, setDate] = useState('')



  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('Blog')
        .select()
        .eq('id', id)
        .single()

      if (error) {
        console.log(error)
      }

      if (data) {
        setTitle(data.title)
        setDescription(data.description)
        setImage(data.image)
        setDescriptionAz(data.descriptionAz)
        setTitleAz(data.titleAz)
        setDate(data.date)
        console.log(data)
      }
    }
    fetchData()
  }, [id])

  return (
    <>

      {
        <div className="bodydark p-5">

          <h2 className="italiana">
          {i18n.language === "az" ? titleAz : title }
          </h2>
          <h6 style={{color: 'grey'}}>
            {date}
          </h6>
          <br />
          <br />
          <div class="clearfix">
          <img src={image} class="img-fluid col-md-6 float-md-end mb-3 ms-md-3" alt="blogimg"></img>
          <img className="inverted float-start" src={"https://ascella.qodeinteractive.com/wp-content/themes/ascella/assets/img/quote.svg"} alt="quote" />
         <span></span>  <p className="justifytext"> {i18n.language === "az" ? descriptionAz : description }</p>
          </div>

        </div>
      }


    </>
  );
};

export default SingleBlog;
