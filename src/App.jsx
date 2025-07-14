import FirstScreen from './components/FirstScreen/FirstScreen';
import SideMenu from './components/SideMenu/SideMenu';
import Events from './components/Events/Events';
import News from './components/News/News';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <>
      <FirstScreen />
      <SideMenu />
      <Events />
      <News />
      <Footer />
    </>
  );
}

export default App;