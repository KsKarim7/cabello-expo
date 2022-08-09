import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home'
import Login from './components/Register/Login/Login';
import Signup from './components/Register/Signup/Signup';
import Navbar from './components/Shared/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes >
    </>
  );
}

export default App;
