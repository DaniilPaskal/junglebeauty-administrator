import { useLists } from "../contexts/ListsContext";
import ListTable from "../components/ListTable";
import './../App.css';

const Videos = () => {
  const videos = useLists().videos;

  return (
    <ListTable list={videos} type='videos' />
  );
}

export default Videos;