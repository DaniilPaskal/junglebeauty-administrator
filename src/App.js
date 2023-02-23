import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import AddCats from './pages/AddCats';
import ViewCats from './pages/ViewCats';
import News from './pages/News';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
  }, []);

  return (
    <AuthProvider value={user}>
      <div className="App">
        <Navigation />
        <div className='page-content'>
          <Routes>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='add-cats' element={<AddCats />} />
            <Route path='view-cats' element={<ViewCats />} />
            <Route path='news' element={<News />} />
          </Routes>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
