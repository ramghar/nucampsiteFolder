
import './App.css';
import Header from './components/Header';
//import { CAMPSITES } from './app/shared/CAMPSITES.js';
import CampsitesList from './features/campsites/CampsitesList.js';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App"> 
      <Header/>
      <CampsitesList/>
      <Footer/>
    </div>
  );
}

export default App