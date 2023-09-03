import { Table, Modal } from "react-bootstrap";
import { useState } from "react";
import { useLists } from "../contexts/ListsContext";
import TextRow from "../components/TextRow";
import ArticlesForm from "../components/ArticlesForm";
import './../App.css';

const Articles = () => {
  const articles = useLists().articles;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <ListTable list={articles} type='articles' />
  );
}

export default Articles;