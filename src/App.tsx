import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { LandingPage } from './pages/LandingPage';
import { ATMList } from './pages/ATMList';
import { ATMDetail } from './pages/ATMDetail';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/atm-list" element={<ATMList />} />
          <Route path="/atm/:id" element={<ATMDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;