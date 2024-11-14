
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Auth/Login';
import Verify from './Pages/Auth/Verify';
import Resetpassword from './Pages/Auth/Resetpassword';
import Signup from './Pages/Auth/Signup';

function App() {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true }}>
      <Routes>
        {/* Redirect "/" to "/login" */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/" element={<Navigate to="/resetpassword" replace/>} />
        <Route path="/" element={<Navigate to="/verify" replace/>} />
        <Route path="/" element={<Navigate to="/signup" replace/>} />
        
        {/* Define the login route */}
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<Verify/>} />
        <Route path="/resetpassword" element={<Resetpassword/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

