import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import DIYAnalyzer from './pages/DIYAnalyzer';
import About from './pages/About';
import Leasing from './pages/Leasing';
import ApprovalGuide from './pages/Approvalguide';
import Tenants from './pages/Tenants';
import Manage from './pages/Manage';
import Rehab from './pages/Rehab';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/diy-analyzer" element={<DIYAnalyzer />} />
        <Route path="/about" element={<About />} />
        <Route path="/leasing" element={<Leasing />} />
        <Route path="/approval-guide" element={<ApprovalGuide />} />
        <Route path="/tenants" element={<Tenants />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/rehab" element={<Rehab />} />
      </Routes>
    </Router>
  );
}

export default App;