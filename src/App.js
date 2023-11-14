import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/NavbarComponent';
import HomePage from './pages/Home'


function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<HomePage />}/>
          <Route path='/' />
          <Route path='/' />
          <Route path='/' />
        </Routes>
      </Router>
    </>
  );
}

export default App;
