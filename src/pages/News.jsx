import { useLists } from "../contexts/ListsContext";
import ListTable from "../components/ListTable";
import './../App.css';

const News = () => {
  const news = useLists().news;

  return (
    <ListTable list={news} type='news' />
  );
}

export default News;