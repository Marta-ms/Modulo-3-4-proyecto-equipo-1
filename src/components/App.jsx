import { useState } from "react";
import "../scss/App.scss";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function App() {
  

  const [formInfo, setFormInfo] = useState({
    name: "",
    slogan: "",
    repository: "",
    demo: "",
    technologies: "",
    description: "",
    nameUser: "",
    nameJob: "",
   })

   const handleChangeInput = (valueInput, idInput) => {
     
  
     console.log(idInput, valueInput);

     if (idInput === "name") {
      setFormInfo({ ...formInfo, name: valueInput})
     } else if(idInput === "slogan"){
      setFormInfo({ ...formInfo, slogan: valueInput})
     } else if(idInput === "desc") {
      setFormInfo({ ...formInfo, desc: valueInput})
     } else if(idInput === "job") {
      setFormInfo( {...formInfo, job: valueInput})
     } else if(idInput === "autor") {
      setFormInfo( {...formInfo, autor: valueInput})
    } else if(idInput === "technologies") {
      setFormInfo( {...formInfo, technologies: valueInput})
    } else if(idInput === "repo") {
      setFormInfo( {...formInfo, repo: valueInput})
    } else if(idInput === "demo") {
      setFormInfo( {...formInfo, demo: valueInput})
    }
    

   }
    
     
  //  const [nameProyect, setNameProyect] = useState("Elegant Work Space");


  // const handleChangeProyect = (value) => {
  //   //setFormInfo({ ...formInfo, name: value });
  //   // console.log(value);
  // };

  // const [nameSlogan, setNameSLogan] = useState("Diseños exclusivos");
  // const handleChangeSlogan = (value) => {
  //   setNameSLogan(value);
  //   console.log(value);
  // };

  // const [nameRepository, setNameRepository] = useState("");
  // const handleChangeRepository = (value) => {
  //   setNameRepository(value);
  //   console.log(value);
  // };

  // const [nameDemo, setNameDemo] = useState ("");
  // const handleChangeDemo = (value) => {
  //   setNameDemo(value);
  //   console.log(value);
  // };

  // const [nameTechnologies, setNameTechnologies] = useState("React JS - HTML CSS");
  // const handleChangeTechnologies = (value) => {
  //   setNameTechnologies(value);
  //   console.log(value);
  // };

  // const [nameDescription, setNameDescription] = useState(
  //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex alias eaque accusamus consectetur perferendis quos necessitatibus maxime libero unde voluptatum totam ipsum deleniti, placeat consequatur tempore adipisci quia natus fugiat?"
  // );
  // const handleChangeDescription = (value) => {
  //   setNameDescription(value);
  //   console.log(value);
  // };
  

  // const [nameUser, setNameUser] = useState("Rodolfa Agostina");
  // const handleChangeUser = (ev) => {
  //   setNameUser(ev.target.value);
  // };

  // const [nameJob, setNameJob] = useState("Full Stack Developer");
  // const handleChangeJob = (ev) => {
  //   setNameJob(ev.target.value);
  // };
  // //url de la imagen mal
  // const [projectImage, setProjectImage] = useState("");
  // const handleClickProjectImage = (ev) => {
  //   setProjectImage(ev.target);
  //   //console.log(projectImage);
  // };

  return (
    <>
      <div className="container">
        <Header />
        <Main
          onChangeInput={handleChangeInput}
          formInfo={formInfo}
          // onChangeTitle={handleChangeProyect}
          // onChangeSlogan={handleChangeSlogan}
          // onChangeRepository={handleChangeRepository}
          // onChangeDemo={handleChangeDemo}
          // onChangeTechnologies={handleChangeTechnologies}
          // onChangeDescription={handleChangeDescription}

          // titlePreview={nameProyect}
          // sloganPreview={nameSlogan}
          // repositoryPreview={nameRepository}
          // demoPreview={nameDemo}
          // technologiesPreview={nameTechnologies}
          // descriptionPreview={nameDescription}


        />
        <Footer />
      </div>
    </>
  );
}

export default App;
