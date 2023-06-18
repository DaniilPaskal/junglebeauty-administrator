import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import { GetList } from "../components/FirebaseFunctions";
import TextRow from "../components/TextRow";

const News = () => {
  const [news, setNews] = useState([]);

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
      <button type='button' onClick={handleAdd}>Add news item</button>
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
      </>
  );
}

export default News;