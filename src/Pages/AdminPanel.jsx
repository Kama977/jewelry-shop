import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import BlogCard from "./BlogCard";
import { supabase } from "../CreateBlog";
import { useTranslation } from "react-i18next";
import { i18n } from "i18next";

const AdminPanel = () => {
  const { t, i18n } = useTranslation();

  const [title, setTitle] = useState("");
  const [titleAz, setTitleAz] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionAz, setDescriptionAz] = useState("");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  async function getBlogs() {
    try {
      const { data, error } = await supabase.from("Blog").select("*");
      if (error) throw error;
      if (data != null) {
        setBlogs(data);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  // create blog

  async function createBlog() {
    try {
      const { data, error } = await supabase
        .from("Blog")
        .insert({
          title: title,
          description: description,
          image: image,
          date: date,
          titleAz: titleAz,
          descriptionAz: descriptionAz,
        })
        .single();

      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="bodydark">
      <Container className="bodydark">
        <Row>
          <Col xs={8} md={8}>
            <br></br>
            <h4 className="textfordark miniheads">{t("createblog")}</h4>
              <br />
            <Form.Label className="textfordark">{t("date")}</Form.Label>
            <Form.Control
              type="date"
              id="date"
              onChange={(e) => setDate(e.target.value)}
            />
              <br />
            <Form.Label className="textfordark">{t("blogtitle")}</Form.Label>
            <Form.Control
              type="text"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
            />
              <br />
            <Form.Label className="textfordark">{t("blogtitleAz")}</Form.Label>
            <Form.Control
              type="text"
              id="titleAz"
              onChange={(e) => setTitleAz(e.target.value)}
            />
              <br />
            <Form.Label className="textfordark">
              {t("blogdescription")}
            </Form.Label>
            <Form.Control
              type="text"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            />
              <br />
            <Form.Label className="textfordark">
              {t("blogdescriptionAz")}
            </Form.Label>
            <Form.Control
              type="text"
              id="descriptionAz"
              onChange={(e) => setDescriptionAz(e.target.value)}
            />
              <br />
            <Form.Label className="textfordark">{t("blogImage")}</Form.Label>
            <Form.Control
              type="text"
              id="image"
              onChange={(e) => setImage(e.target.value)}
            />
            <br />
            <Button onClick={() => createBlog()}>{t("addblog")}</Button>
          </Col>
        </Row>
        <br />
        <hr></hr>
        <br />
        <h4 className="textfordark miniheads">{t("currentblog")}</h4>
        <br />
        <Row xs={1} md={2} lg={3} className="g-4">
          {blogs.map((blog) => (
            <Col>
              <BlogCard blog={blog} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AdminPanel;
