import expoforumLogo from '../../assets/logo.png';
import searchIcon from '../../assets/Search.png';
import globeIcon from '../../assets/Globe.png';

function Header() {
  return (
    <header>
      <div className="first-screen_top-line">
        <a href="/" className="logo">
          <img src={expoforumLogo} alt="Expoforum" />
        </a>

        <nav className="nav">
          <a href="#about_complex">О комплексе</a>
          <a href="#about_company">О компании</a>
          <a href="#news">Новости</a>
          <a href="#media-bank">Медиа-банк</a>
          <a href="#contacts">Контакты</a>
        </nav>

        <div className="right-bar">
          <button className="search">
            <img src={searchIcon} alt="Search"/>
          </button>
          <button className="lang-btn">
            <img src={globeIcon} alt="Lang_button"/>
            English
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;