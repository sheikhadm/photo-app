import './App.css';
import Header from './components/Header';
import React from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import HomePage from './pages/homePage';
import PicturePage from './pages/picturePage';
import ProfilePage from './pages/profilePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/"  element={ <HomePage/> }/>
        <Route path="/clickers/:id" element={ <PicturePage /> } />
        <Route path="/:id/:name" element={ <ProfilePage/> } />

      </Routes></BrowserRouter>
    </div>
  );
}

export default App;
