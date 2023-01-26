import { Routes, Route } from 'react-router-dom';
import HomePage from './features/pages/HomePage';
import React from 'react';
import './App.css';
import GamesPage from './features/pages/GamesPage';
import EventsPage from './features/pages/EventsPage';
import MenuPage from './features/pages/MenuPage';
import RoomsPage from './features/pages/RoomsPage';
import StorePage from './features/pages/StorePage';
import Header from './features/components/Header';


function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='games' element={<GamesPage />} />
        <Route path='events' element={<EventsPage />} />
        <Route path='menu' element={<MenuPage />} />
        <Route path='rooms' element={<RoomsPage />} />
        <Route path='store' element={<StorePage />} />
      </Routes>
    </div>
  );
}

export default App;
