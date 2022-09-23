import './app.css';
import { useState } from 'react';
import TopNavBar from './components/TopNavBar/TopNav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Menu from './components/Header/Menu';
import License from './components/Policy/License';
import PrivacyPolicy from './components/Policy/PrivacyPolicy';
import Message from './components/Contact/Message';

function App() {
  const [page, setPage] = useState('Home');
  const [state, setStates] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <a href="#maincontent" className="skiptomaincontent" 
      title="Click here to skip to main content" >Skip to main content</a>
      <TopNavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} setPage={setPage}/>
      <Menu setPage={setPage} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <a href = "#maincontent" name="maincontent" id="maincontent"></a>
      <div className="section">
      { page === 'Home' && <Home  setPage={setPage}/> }
      { page === 'About' && <About/> }
      { page === 'Resume' && <Resume setPage = {setPage}/> }
      { page === 'Blogs' && <Blogs/> }
      { page === 'Contact' && <Contact setPage = {setPage} setStates = {setStates}/> }
      { page === 'License' && <License /> }
      { page === 'PrivacyPolicy' && <PrivacyPolicy /> }
      { page === 'Message' && <Message state = {state}/>}
    
      </div>
      <Footer  setPage = {setPage}/>
    </div>
  );
}

export default App;
