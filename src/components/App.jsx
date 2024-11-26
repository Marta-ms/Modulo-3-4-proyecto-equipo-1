import { useState } from "react";
import "../scss/App.scss";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import GetAvatar from "./GetAvatar";

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
        />
        <GetAvatar avatar={avatar} updateAvatar={updateAvatar} />
        <Footer />
      </div>
    </>
  );
}

export default App;
