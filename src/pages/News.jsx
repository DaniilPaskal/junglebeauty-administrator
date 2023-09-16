import { useLists } from "../contexts/ListsContext";
import ListTable from "../components/ListTable";
import './../App.css';

const News = () => {
  const news = useLists().news;

  return (
    <div className='page-background'>
      <ListTable list={news} type='news' />
    </div>
  );
}

export default News;