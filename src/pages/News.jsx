import { Table, Modal } from "react-bootstrap";
import { useState } from "react";
import { useLists } from "../contexts/ListsContext";
import TextRow from "../components/TextRow";
import NewsForm from "../components/NewsForm";
import ListTable from "../components/ListTable";
import './../App.css';

const News = () => {
  const news = useLists().news;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <ListTable list={news} type='news' />
  );
}

export default News;