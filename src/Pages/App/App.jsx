import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';
import CarListPage from '../CarListPage/CarListPage';
import CarDetailPage from '../CarDetailPage/CarDetailPage';
import Footer from '../../components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<CarListPage />} />
        <Route path="/:carId" element={<CarDetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


//footer and footer import