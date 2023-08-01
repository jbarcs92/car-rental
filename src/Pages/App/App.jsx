import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';
import CarListPage from '../CarListPage/CarListPage';
import CarDetailPage from '../CarDetailPage/CarDetailPage';
import './App.css';
import CarForm from '../../components/CarForm/CarForm';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<CarListPage />} />
        <Route path="/:carId" element={<CarDetailPage />} />
        <Route path="/cars/new" element={<CarForm />} />
      </Routes>
    </div>
  );
}

export default App;
