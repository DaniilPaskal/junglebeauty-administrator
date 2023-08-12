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
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
              <th>Date</th>
              <th>Type</th>
              <th>King</th>
              <th>Queen</th>
            </tr>
          </thead>
          <tbody>
            {news.map((newsItem) => {
              return (
                <TextRow item={newsItem} key={newsItem.id} />
              );
            })}
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