import { useLists } from "../contexts/ListsContext";
import './../App.css';

const Articles = () => {
  const articles = useLists().articles;

  return (
    <ListTable list={articles} type='articles' />
  );
}

export default Articles;