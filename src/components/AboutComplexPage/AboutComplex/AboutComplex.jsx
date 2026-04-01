import Header from '../../MainPage/FirstScreen/Header';
import Title from './Title';
import BlockWrapperAboutComplex from './BlockWrapperAboutComplex';
import './style.css';

function AboutComplex() {
  return (
    <section id="about_complex" className="about_complex">
      <div className="about_complex-background"></div>
      <Header />
      <hr/>

      <div className="about_complex_content">

        <div className="about_complex_main-content">
          <BlockWrapperAboutComplex />
          <Title />
        </div>
      </div>

    </section>
  );
}

export default AboutComplex;