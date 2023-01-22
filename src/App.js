import Header from './components/Header';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import { Routes, Route } from 'react-router-dom';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import './App.css';
import CampsiteDetail from './features/campsites/CampsiteDetail';
import AboutPage from './pages/AboutPage';

// import{
//   CampsiteDetailPage,
//   CampsitesDirectoryPage,
//   AboutPage,
//   HomePage,
//   ContactPage,

// }

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='directory' element={<CampsitesDirectoryPage />} />
        <Route path='about' element={<AboutPage />}/>
        <Route
          path='directory/:campsiteId'
          element={<CampsiteDetailPage />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App