import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AddCats from './pages/AddCats';
import ViewCats from './pages/ViewCats';
import News from './pages/News';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='page-content'>
        <Routes>
          <Route index element={<Home />} />
          <Route path='add-cats' element={<AddCats />} />
          <Route path='view-cats' element={<ViewCats />} />
          <Route path='news' element={<News />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
