
// import './App.css';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './Pages/Auth/Login';
// import Verify from './Pages/Auth/Verify';
// import Resetpassword from './Pages/Auth/Resetpassword';
// import Signup from './Pages/Auth/Signup';

// function App() {
//   return (
//     <BrowserRouter future={{ v7_relativeSplatPath: true }}>
//       <Routes>
//         {/* Redirect "/" to "/login" */}
//         <Route path="/" element={<Navigate to="/login" replace />} />
//         <Route path="/" element={<Navigate to="/resetpassword" replace/>} />
//         <Route path="/" element={<Navigate to="/verify" replace/>} />
//         <Route path="/" element={<Navigate to="/signup" replace/>} />
        
//         {/* Define the login route */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/verify" element={<Verify/>} />
//         <Route path="/resetpassword" element={<Resetpassword/>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../src/Pages/Auth/Login'
import Resetpassword from '../src/Pages/Auth/Resetpassword';
import Verify from '../src/Pages/Auth/Verify';

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

