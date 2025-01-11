import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Summary from './components/Summary';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import CropAnalysis from './pages/CropAnalysis';
import BlinkitSales from './pages/BlinkitSales';
import SQLProject from './pages/SQLProject';
import ExcelProject from './pages/ExcelProject';
import TableauProject from './pages/TableauProject';
import OlaProject from './pages/OlaProject';

function Main() {
  const location = useLocation();
  const isProjectPage = ['/crop-analysis', '/blinkit-sales-analysis', '/sql-project', '/excel-project', '/tableau-project','/ola-project'].includes(location.pathname);

  return (
    <div className="app">
      {!isProjectPage && <Header />}
      <Routes>
        <Route path="/" element={<>
          <Summary />
          <Projects />
          <Skills />
          <ContactMe />
        </>} />
        <Route path="/crop-analysis" element={<CropAnalysis />} />
        <Route path="/blinkit-sales-analysis" element={<BlinkitSales />} />
        <Route path="/sql-project" element={<SQLProject />} />
        <Route path="/excel-project" element={<ExcelProject />} />
        <Route path="/tableau-project" element={<TableauProject />} />
        <Route path="/ola-project" element={<OlaProject />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
