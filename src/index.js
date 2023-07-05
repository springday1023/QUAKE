import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home/Home';
import About from './pages/intro/About';
import Terms from './pages/intro/Terms';
import Notices from './pages/intro/Notices';
import NoticesView from './pages/intro/NoticesView';
import NoticesWrite from './pages/intro/NoticesWrite';
import Stations from './pages/observatory/Stations';
import Metadata from './pages/observatory/Metadata';
import EventData from './pages/data/EventData';
import ContinuousData from './pages/data/ContinuousData';
import WebServices from './pages/data/WebServices';
import MajorEarthquakes from './pages/analysis/MajorEarthquakes';
import AnnualReport from './pages/analysis/AnnualReport';
import Kesmdb from './pages/analysis/Kesmdb';
import './scss/style.scss';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro/about" element={<About />} /> 
        <Route path="/intro/terms" element={<Terms />} /> 
        <Route path="/intro/notices" element={<Notices />} /> 
        <Route path="/intro/noticesView" element={<NoticesView />} /> 
        <Route path="/intro/noticesWrite" element={<NoticesWrite />} /> 
        <Route path="/observatory/stations" element={<Stations />} /> 
        <Route path="/observatory/metadata" element={<Metadata />} /> 
        <Route path="/data/event-data" element={<EventData />} /> 
        <Route path="/data/continuous-data" element={<ContinuousData />} /> 
        <Route path="/data/web-services" element={<WebServices />} /> 
        <Route path="/analysis/major-earthquakes" element={<MajorEarthquakes />} /> 
        <Route path="/analysis/annual-report" element={<AnnualReport />} /> 
        <Route path="/analysis/kesmdb" element={<Kesmdb />} /> 
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

