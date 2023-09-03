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
    <>
      <button type='button' onClick={handleShow}>Add articles item</button>
      <Table striped bordered hover>
          <thead>
            <tr>
              {Object.keys(articles[0]).map((key) => {
                return (
                    <th key={key}>{key}</th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {articles &&
              articles.map((articlesItem) => {
                return (
                  <TextRow item={articlesItem} key={articlesItem.id} />
                );
              })
            }
          </tbody>
        </Table>

        <Modal show={show} onHide={handleClose} size='lg'>
            <Modal.Header closeButton/>
            <Modal.Body>
                <ArticlesForm />
            </Modal.Body>
        </Modal>
      </>
  );
}

export default Articles;