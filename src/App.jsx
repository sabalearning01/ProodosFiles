import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import Resetpassword from './Pages/Resetpassword';
import Verify from './Pages/Verify';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect "/" to "/login" */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Define the login route */}
        <Route path="/login" element={<Login />} />
        
        {/* Define the reset password route */}
        <Route path="/resetpassword" element={<Resetpassword />} />
        
        {/* Define the verify route */}
        <Route path="/verify" element={<Verify />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
