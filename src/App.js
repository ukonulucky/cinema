
import './App.css';
import Hompage from './components/Hompage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Movie from './components/Movies/Movie';
import Register from './components/Register';
import SignIn from './components/SignIn';
function App() {
  return (
      <Router>
        <Routes>
        <Route exact path="/" element={<Hompage />} />
        <Route exact path="/movies" element={<Movie />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/SignIn" element={ <SignIn />} />
        </Routes>
     </Router>
 
  );
}

export default App;
