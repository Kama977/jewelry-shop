import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Button, Form } from "react-bootstrap";
import { supabase } from "../CreateBlog";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { i18n } from "i18next";

const BlogCard = (props) => {
  const { t, i18n } = useTranslation();
  const blog = props.blog;

  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [titleAz, setTitleAz] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionAz, setDescriptionAz] = useState("");

  async function editBlog() {
    try {
      const { data, error } = await supabase
        .from("Blog")
        .update({
          title: title,
          description: description,
          image: image,
          date: date,
          titleAz: titleAz,
          descriptionAz: descriptionAz,
        })
        .eq("id", blog.id);
      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  async function deleteBlog() {
    try {
      const { data, error } = await supabase
        .from("Blog")
        .delete({
          title: title,
          description: description,
          image: image,
          date: date,
          titleAz: titleAz,
          descriptionAz: descriptionAz,
        })
        .eq("id", blog.id);
      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        {editing === false ? (
          <>
            <Card.Img variant="top" src={blog.image} />
            <Card.Body>
              <Card.Title>
                {i18n.language === "az" ? blog.titleAz : blog.title}
                <br /> <br /> <h6 style={{ color: "grey" }}>{blog.date}</h6>
              </Card.Title>
              <Card.Text className="darktext">
                {i18n.language === "az"
                  ? blog.descriptionAz.slice(0, 200)
                  : blog.description.slice(0, 200)}
                ...
              </Card.Text>
              <Button variant="primary" onClick={() => setEditing(true)}>
                <FiEdit />
              </Button>
              <Button variant="danger" onClick={() => deleteBlog()}>
                <AiOutlineDelete />
              </Button>
            </Card.Body>
          </>
        ) : (
          <>
            <h4>{t("editblog")}</h4>
            <Button onClick={() => setEditing(false)}>
              {" "}
              {t("gobackblog")}
            </Button>
            <br />
            <div>
              <Form.Label>{t("date")}</Form.Label>
              <Form.Control
                type="date"
                id="date"
                defaultValue={blog.date}
                onChange={(e) => setDate(e.target.value)}
              />

              <Form.Label>{t("blogtitle")}</Form.Label>
              <Form.Control
                type="text"
                id="title"
                defaultValue={blog.title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <Form.Label>{t("blogtitleAz")}</Form.Label>
              <Form.Control
                type="text"
                id="titleAz"
                defaultValue={blog.titleAz}
                onChange={(e) => setTitleAz(e.target.value)}
              />

              <Form.Label>{t("blogdescription")}</Form.Label>
              <Form.Control
                type="text"
                id="description"
                defaultValue={blog.description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <Form.Label>{t("blogdescriptionAz")}</Form.Label>
              <Form.Control
                type="text"
                id="descriptionAz"
                defaultValue={blog.descriptionAz}
                onChange={(e) => setDescriptionAz(e.target.value)}
              />

              <Form.Label>{t("blogImage")}</Form.Label>
              <Form.Control
                type="text"
                id="image"
                defaultValue={blog.image}
                onChange={(e) => setImage(e.target.value)}
              />
              <Button onClick={() => editBlog()}>{t("saveblog")}</Button>
            </div>
          </>
        )}
      </Card>{" "}
    </div>
  );
};

export default BlogCard;
