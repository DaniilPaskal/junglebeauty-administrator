import { useLists } from "../contexts/ListsContext";
import ListTable from "../components/ListTable";
import './../App.css';

const Videos = () => {
  const videos = useLists().videos;

  return (
    <div className='page-background'>
      <ListTable list={videos} type='videos' />
    </div>
  );
}

export default Videos;