import { useState } from "react";
import "../scss/App.scss";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function App(props) {
  //  const handleChangevalueInput = (valueInput) => {
  //    console.log(valueInput);
  //  }

  const [nameProyect, setNameProyect] = useState("Elegant Work Space");

  const handleChangeProyect = (value) => {
    setNameProyect(value);
    // console.log(value);
  };

  const [nameSlogan, setNameSLogan] = useState("Diseños exclusivos");
  const handleChangeSlogan = (value) => {
    setNameSLogan(value);
    console.log(value);
  };

  const [nameRepository, setNameRepository] = useState("");
  const handleChangeRepository = (ev) => {
    setNameRepository(ev.target.value);
  };

  const [nameDemo, setNameDemo] = useState("");
  const handleChangeDemo = (ev) => {
    setNameDemo(ev.target.value);
  };

  const [nameTechnologies, setNameTechnologies] = useState(
    "React JS - HTML CSS"
  );
  const handleChangeTechnologies = (ev) => {
    setNameTechnologies(ev.target.value);
  };

  const [nameDescription, setNameDescription] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex alias eaque accusamus consectetur perferendis quos necessitatibus maxime libero unde voluptatum totam ipsum deleniti, placeat consequatur tempore adipisci quia natus fugiat?"
  );
  const handleChangeDescription = (ev) => {
    setNameDescription(ev.target.value);
  };

  const [nameUser, setNameUser] = useState("Rodolfa Agostina");
  const handleChangeUser = (ev) => {
    setNameUser(ev.target.value);
  };

  const [nameJob, setNameJob] = useState("Full Stack Developer");
  const handleChangeJob = (ev) => {
    setNameJob(ev.target.value);
  };
  //url de la imagen mal
  const [projectImage, setProjectImage] = useState("");
  const handleClickProjectImage = (ev) => {
    setProjectImage(ev.target);
    //console.log(projectImage);
  };

  return (
    <>
      <div className="container">
        <Header />
        <Main
          onChangeTitle={handleChangeProyect}
          onChangeSlogan={handleChangeSlogan}
          titlePreview={nameProyect}
          sloganPreview={nameSlogan}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
