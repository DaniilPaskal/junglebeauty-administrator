import { Table, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import { GetList } from "../components/FirebaseFunctions";
import TextRow from "../components/TextRow";
import TextForm from "../components/TextForm";

const News = () => {
  const [news, setNews] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getNews = async () => {
    const news = await GetList('News-List.json');
    setNews(news);
  }

  useEffect(() => {
    getNews();
  }, []);
  
  console.log(news);

  return (
    <>
      <button type='button' onClick={handleShow}>Add news item</button>
      <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Posted</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {news.map((newsItem) => {
              return (
                <TextRow text={newsItem} />
              );
            })}
          </tbody>
        </Table>

        <Modal show={show} onHide={handleClose} size='lg'>
            <Modal.Header closeButton/>
            <Modal.Body>
                <TextForm />
            </Modal.Body>
        </Modal>
      </>
  );
}

export default News;