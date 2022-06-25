import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from '../home/Home';
import './App.css';

export const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};
