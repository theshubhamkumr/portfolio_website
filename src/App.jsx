import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Project from './components/Project/Projects.jsx';

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </Router>
  );
};

export default Main;