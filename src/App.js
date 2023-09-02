import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { AuthProvider } from './contexts/AuthContext';
import { CatsProvider } from './contexts/CatsContext';
import { NewsProvider } from './contexts/NewsContext';
import { ArticlesProvider } from './contexts/ArticlesContext';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import AddCats from './pages/AddCats';
import ViewCats from './pages/ViewCats';
import News from './pages/News';
import Articles from './pages/Articles';
import Accounts from './pages/Accounts';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <CatsProvider>
        <NewsProvider>
          <ArticlesProvider>
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
                  <Route path='accounts' element={
                    <PrivateRoute>
                      <Accounts />
                    </PrivateRoute>
                  } />
                </Routes>
              </div>
            </div>
          </ArticlesProvider>
        </NewsProvider>
      </CatsProvider>
    </AuthProvider>
  );
}

export default App;
