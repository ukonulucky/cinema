
import './App.css';
import Hompage from './components/Hompage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={  <Hompage /> } />
        </Routes>
     </Router>
 
  );
}

export default App;
