import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewCarPage from '../NewCarPage/NewCarPage';
import CarHistoryPage from '../CarHistoryPage/CarHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

function App() {
  const [user, setUser] = useState(null);


  return (
    <main className="App">
      { user ?
        <>
          <NavBar />
          <Routes>
            {/*Route components in here*/}
            <Route path="/cars/new" element={<NewCarPage />} />
            <Route path="/cars" element={<CarHistoryPage />} />

          </Routes>
        </>
          
        :
        <AuthPage />

      }
      
    </main>
  );
}

export default App;