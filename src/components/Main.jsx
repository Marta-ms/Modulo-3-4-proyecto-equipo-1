import Preview from "./Preview";
import Form from "./Form";

function Main(props, {onChangeInput}) {
  

 
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
      <Preview
        titlePreview={props.titlePreview}
        sloganPreview={props.sloganPreview}
        repositoryPreview={props.repositoryPreview}
        demoPreview={props.demoPreview}
        technologiesPreview={props.technologiesPreview}
        descriptionPreview={props.descriptionPreview}
      />
      <Form
        onChangeInput={onChangeInput}
        // onChangeTitle={props.onChangeTitle}
        // onChangeSlogan={props.onChangeSlogan}
        // onChangeRepository={props.onChangeRepository}
        // onChangeDemo={props.onChangeDemo}
        // onChangeTechnologies={props.onChangeTechnologies}
        // onChangeDescription={props.onChangeDescription}
      />
    </main>
  );
}

export default Main;
