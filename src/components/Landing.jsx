import "../scss/layout/Landing.scss";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div className="container-landing">
        <header className="header-landing">
          <h2>
            La vida es una audición constante y estamos aqui para triunfar
          </h2>
        </header>
        <main>
          <h3 className="message-landing">
            Ayuda a Paquita Salas a presentar su proyecto para PS Management
          </h3>
          <Link to="/home">Empieza ahora!</Link>
        </main>
      </div>
    </>
  );
}

export default Landing;
