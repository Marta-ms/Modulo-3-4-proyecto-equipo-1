import {useState} from "react";
import "../scss/App.scss";
import Header from "./Header";
import Footer from "./Footer";




function App() {

  const [nameProyect, setNameProyect] = useState("Elegant Work Space");
  const handleChangeProyect = (ev) => {
    setNameProyect(ev.target.value);
  }

  const [nameSlogan, setNameSLogan] = useState("Diseños exclusivos");
  const handleChangeSlogan = (ev) => {
    setNameSLogan(ev.target.value);
    
  }

  const [nameRepository, setNameRepository] = useState("");
  const handleChangeRepository = (ev) => {
    setNameRepository(ev.target.value);
    
  }

  const [nameDemo, setNameDemo] = useState("");
  const handleChangeDemo = (ev) => {
    setNameDemo(ev.target.value);
    
    }

  const [nameTechnologies, setNameTechnologies] = useState("React JS - HTML CSS");
  const handleChangeTechnologies = (ev) => {
    setNameTechnologies(ev.target.value);
    
  }

  const [nameDescription, setNameDescription] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex alias eaque accusamus consectetur perferendis quos necessitatibus maxime libero unde voluptatum totam ipsum deleniti, placeat consequatur tempore adipisci quia natus fugiat?");
  const handleChangeDescription = (ev) => {
    setNameDescription(ev.target.value);
    
  }

  const [nameUser, setNameUser] = useState("Rodolfa Agostina");
  const handleChangeUser = (ev) => { 
    setNameUser(ev.target.value);
    
  }

  const [nameJob, setNameJob] = useState("Full Stack Developer");
  const handleChangeJob = (ev) => {
    setNameJob(ev.target.value);
  }
  //url de la imagen mal
  const [projectImage, setProjectImage] = useState("./images/ebook-example.jpg");
  const handleClickProjectImage = (ev) => {
    setProjectImage(ev.target);
    console.log(projectImage);
  }

  return (
    
    <>
<div className="container">

      <Header />

<main className="main">
  <section className="hero">
    <h2 className="title">Proyectos molones</h2>
    <p className="hero__text">Escaparate en línea para recoger ideas a través de la tecnología</p>
    <a className="button--link" href="./">Ver proyectos</a>
  </section>

  <section className="preview">
    <div className="projectImage"></div>
    <article className="card">
      <h2 className="card__projectTitle"><span className="card__projectTitle--text">Personal project card</span></h2>

      <div className="card__author">
        <div className="card__authorPhoto"></div>
        <p className="card__job">{nameJob}</p>
        <h3 className="card__name">{nameUser}</h3>
      </div>
  
      <div className="card__project">            
        <h3  className="card__name">{nameProyect}</h3>
        <p className="card__slogan">{nameSlogan}</p>
        <h3 className="card__descriptionTitle">Product description</h3>
        <p className="card__description">{nameDescription}</p>

        <div className="card__technicalInfo">
          <p className="card__technologies">{nameTechnologies}</p>
      
          <a className="icon icon__www" href={nameDemo} title="Haz click para ver el proyecto online">
            Web link
          </a>
          <a className="icon icon__github" href={nameRepository} title="Haz click para ver el código del proyecto">
            GitHub link
          </a>
        </div>
      </div>
    </article>
  </section>
  <form className="addForm">
    <h2 className="title">Información</h2>
    <fieldset className="addForm__group">
      <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
      <input onChange={handleChangeProyect} className="addForm__input" type="text" name="name" id="name" placeholder="Nombre del proyecto"/>
      <input onChange={handleChangeSlogan} className="addForm__input" type="text" name="slogan" id="slogan" placeholder="Slogan"/>
      <div className="addForm__2col">
        <input onChange={handleChangeRepository} className="addForm__input" type="url" name="repo" id="repo" placeholder="Repositorio"/>
        <input onChange={handleChangeDemo} className="addForm__input" type="url" name="demo" id="demo" placeholder="Demo"/>
      </div>         
      <input onChange={handleChangeTechnologies} className="addForm__input" type="text" name="technologies" id="technologies" placeholder="Tecnologías"/>
      <textarea onChange={handleChangeDescription} className="addForm__input" type="text" name="desc" id="desc" placeholder="Descripción" rows="5"></textarea>
    </fieldset>

    <fieldset className="addForm__group">
      <legend className="addForm__title">Cuéntanos sobre la autora</legend>
      <input onChange={handleChangeUser} className="addForm__input" type="text" name="autor" id="autor" placeholder="Nombre"/>
      <input onChange={handleChangeJob} className="addForm__input" type="text" name="job" id="job" placeholder="Trabajo"/>
    </fieldset>

    <fieldset className="addForm__group--upload">
      <label htmlFor="image" className="button">Subir foto del proyecto</label>
      <input onClick={handleClickProjectImage} className="addForm__hidden" type="file" name="image" id="image"/>
      <label htmlFor="photo" className="button">Subir foto de la autora</label>
      <input className="addForm__hidden" type="file" name="photo" id="photo"/>
      <button className="button--large">Guardar proyecto</button>
    </fieldset>
    
  </form>
</main>
    <Footer />

</div>
    </>

  )
}

export default App
