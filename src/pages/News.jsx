import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import { GetFile } from "../components/DBFunctions";
import TextRow from "../components/TextRow";

const News = () => {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    const news = await GetFile('/Lists/NewsList.jsx');
    setNews(news);
  }

  useEffect(() => {
    getNews();
  }, []);
  
  return (
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
  );
}

export default News;