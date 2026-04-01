import Header from './Header';
import Title from './Title';
import BlockWrapper from './BlockWrapper';
import './style.css';

function FirstScreen() {
  return (
    <section id="first-screen" className="first-screen">
      <div className="first-screen-background"></div>
      <Header />
      <hr/>
      <div className="first-screen_content">

        <div className="first-screen_main-content">
          <Title />
          <BlockWrapper />
        </div>
      </div>
    </section>
  );
}

export default FirstScreen;