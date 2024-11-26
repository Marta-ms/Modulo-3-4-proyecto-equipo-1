import Preview from "./Preview";
import Form from "./Form";

function Main({ onChangeInput, formInfo, formImages, changeAuthorPhoto }) {
  return (
    <main className="main">
      <section className="hero">
        <h2 className="title">Proyectos molones</h2>
        <p className="hero__text">
          Escaparate en línea para recoger ideas a través de la tecnología
        </p>
        <a className="button--link" href="./">
          Ver proyectos
        </a>
      </section>
      <Preview personalInfo={formInfo} changeAuthorPhoto={changeAuthorPhoto} />
      <Form onChangeInput={onChangeInput} formImages={formImages} />
    </main>
  );
}

export default Main;
