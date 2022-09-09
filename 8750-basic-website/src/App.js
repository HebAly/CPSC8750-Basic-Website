import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import SignUp from './Sign_Up';
import LogIn from './pages/LoginPage';
import Submit from './pages/SubmitPage';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="login" element={<LogIn />} />
          <Route path="Submit" element={<Submit />} />
        </Routes>
      </nav>
    </BrowserRouter>
  );
}

export default App;
