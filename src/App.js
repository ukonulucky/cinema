
import './App.css';
import Hompage from './components/Hompage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Movie from './components/Movies/Movie';
import Register from './components/Register';
function App() {
  return (
      <Router>
        <Routes>
        <Route exact path="/" element={<Hompage />} />
        <Route exact path="/movies" element={<Movie />} />
        <Route exact path="/register" element={<Register />} />
        </Routes>
     </Router>
 
  );
}

export default App;
