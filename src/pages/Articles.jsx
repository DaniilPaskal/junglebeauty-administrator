import { useLists } from "../contexts/ListsContext";
import ListTable from "../components/ListTable";
import './../App.css';

const Articles = () => {
  const articles = useLists().articles;

  return (
    <div className='page-background'>
      <ListTable list={articles} type='articles' />
    </div>
  );
}

export default Articles;