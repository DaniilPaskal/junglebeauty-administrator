import { Table, Modal } from "react-bootstrap";
import { useState } from "react";
import { useNews } from "../contexts/NewsContext";
import TextRow from "../components/TextRow";
import NewsForm from "../components/NewsForm";

const News = () => {
  const news = useNews();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button type='button' onClick={handleShow}>Add news item</button>
      <Table striped bordered hover>
          <thead>
            <tr>
              {Object.keys(news[0]).map((key) => {
                return (
                    <th key={key}>{key}</th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {news &&
              news.map((newsItem) => {
                return (
                  <TextRow item={newsItem} key={newsItem.id} />
                );
              })
            }
          </tbody>
        </Table>

        <Modal show={show} onHide={handleClose} size='lg'>
            <Modal.Header closeButton/>
            <Modal.Body>
                <NewsForm />
            </Modal.Body>
        </Modal>
      </>
  );
}

export default News;