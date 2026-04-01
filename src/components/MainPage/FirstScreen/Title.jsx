import { Link } from "react-router-dom";

function Title() {
  return (
    <div className="first-screen_title">
      <h1>ЭКСПОФОРУМ</h1>
      <h2>конгрессно-выставочный центр 
        <br/>Санкт-Петербурга</h2>
      <Link to="/about_complex">О комплексе &rarr;</Link>
    </div>
  );
}

export default Title;