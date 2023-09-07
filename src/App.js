import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CatsProvider } from './contexts/CatsContext';
import { ListsProvider } from './contexts/ListsContext';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import AddCats from './pages/AddCats';
import ViewCats from './pages/ViewCats';
import News from './pages/News';
import Articles from './pages/Articles';
import Videos from './pages/Videos';
import Accounts from './pages/Accounts';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <CatsProvider>
        <ListsProvider>
          <div className="App">
            <Navigation />
            <div className='page-content'>
              <Routes>
                <Route path='login' element={<Login />} />
                <Route index element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                } />
                <Route path='add-cats' element={
                  <PrivateRoute>
                    <AddCats />
                  </PrivateRoute>
                } />
                <Route path='view-cats' element={
                  <PrivateRoute>
                    <ViewCats />
                  </PrivateRoute>
                } />
                <Route path='news' element={
                  <PrivateRoute>
                    <News />
                  </PrivateRoute>
                } />
                <Route path='articles' element={
                  <PrivateRoute>
                    <Articles />
                  </PrivateRoute>
                } />
                <Route path='videos' element={
                  <PrivateRoute>
                    <Videos />
                  </PrivateRoute>
                } />
                <Route path='accounts' element={
                  <PrivateRoute>
                    <Accounts />
                  </PrivateRoute>
                } />
              </Routes>
            </div>
          </div>
        </ListsProvider>
      </CatsProvider>
    </AuthProvider>
  );
}

export default App;
