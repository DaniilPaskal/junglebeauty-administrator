import { useLists } from "../contexts/ListsContext";
import ListTable from "../components/ListTable";
import './../App.css';

const News = () => {
  const videos = useLists().videos;

  return (
    <ListTable list={videos} type='videos' />
  );
}

export default News;