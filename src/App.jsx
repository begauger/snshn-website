import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import DIYAnalyzer from './pages/DIYAnalyzer';
import About from './pages/About';
import Leasing from './pages/Leasing';
import ApprovalGuide from './pages/ApprovalGuide';
import Tenants from './pages/Tenants';
import Manage from './pages/Manage';
import Rehab from './pages/Rehab';
import Team from './pages/Team';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ScrollToTop from './components/ScrollToTop';
import Terms from './pages/Terms';
import PromiseToPayPage from './pages/PromiseToPayPage';
import ResidentCoordinationPage from './pages/ResidentCoordinationPage';
import TenantResourcesPage from './pages/TenantResourcesPage';
import ChatBot from './components/ChatBot';




function App() {
  return (
    <Router>
          <ScrollToTop />
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
        <Route path="/team" element={<Team />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<Terms />} />
        <Route path="/promise-to-pay" element={<PromiseToPayPage />} />
        <Route path="/resident-coordination" element={<ResidentCoordinationPage />} />
        <Route path="/tenant-resources" element={<TenantResourcesPage />} />
      </Routes>
      <ChatBot />
    </Router>
  );
}

export default App;