
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login';

function App() {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true }}>
      <Routes>
        {/* Redirect "/" to "/login" */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Define the login route */}
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<Verify/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

