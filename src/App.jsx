import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstScreen from './components/MainPage/FirstScreen/FirstScreen';
import SideMenu from './components/MainPage/SideMenu/SideMenu';
import Events from './components/MainPage/Events/Events';
import News from './components/MainPage/News/News';
import Footer from './components/Footer/Footer';
import AboutComplex from './components/AboutComplexPage/AboutComplex/AboutComplex';
import Infastructure from './components/AboutComplexPage/Infrastructure/Infrastructure';
import Ways from './components/AboutComplexPage/Ways/Ways';
import NewsPage from './components/NewsPage/NewsPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element=
            {<>
              <FirstScreen />
              <SideMenu />
              <Events />
              <News />
              <Footer />
              </>}/>
          <Route path="/about_complex" element=
            {<>
              <AboutComplex/>
              <Infastructure />
              <Ways />
              <Footer />
            </>
            }/>
          <Route path="/news" element=
            {<>
              <NewsPage/>
              <Footer />
            </>
          }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;