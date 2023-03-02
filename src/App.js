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
            <PrivateRoute path='login' component={<Login />} />
            <PrivateRoute index component={<Home />} />
            <PrivateRoute path='add-cats' component={<AddCats />} />
            <PrivateRoute path='view-cats' component={<ViewCats />} />
            <PrivateRoute path='news' component={<News />} />
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
