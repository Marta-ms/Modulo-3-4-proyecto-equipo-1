import { useState } from "react";
import "../scss/App.scss";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import imageUser from "../images/perfil-usuaria.jpg";
import imageProject from "../images/Fondo-img.jpg";
// import postCardToApi from "../services/postCardToApi";

function App() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    slogan: "",
    repo: "",
    demo: "",
    technologies: "",
    desc: "",
    autor: "",
    job: "",
    image: { imageProject },
    photo: { imageUser },
  });
  console.log(formInfo);

  const handleChangeInput = (valueInput, idInput) => {
    console.log(idInput, valueInput);

    if (idInput === "name") {
      setFormInfo({ ...formInfo, name: valueInput });
    } else if (idInput === "slogan") {
      setFormInfo({ ...formInfo, slogan: valueInput });
    } else if (idInput === "desc") {
      setFormInfo({ ...formInfo, desc: valueInput });
    } else if (idInput === "job") {
      setFormInfo({ ...formInfo, job: valueInput });
    } else if (idInput === "autor") {
      setFormInfo({ ...formInfo, autor: valueInput });
    } else if (idInput === "technologies") {
      setFormInfo({ ...formInfo, technologies: valueInput });
    } else if (idInput === "repo") {
      setFormInfo({ ...formInfo, repo: valueInput });
    } else if (idInput === "demo") {
      setFormInfo({ ...formInfo, demo: valueInput });
    } else if (idInput === "image") {
      setFormInfo({ ...formInfo, image: valueInput });
    } else if (idInput === "photo") {
      setFormInfo({ ...formInfo, photo: valueInput });
    }
  };

  // const handleChangeImageAuthor = (ImageAuthor, idImages) => {
  //   console.log(ImageAuthor, idImages);
  //   setFormImageAuthor(ImageAuthor);
  // };
  // const [formImageAuthor, setFormImageAuthor] = useState({
  //   backgroundImage: `url($(imageUser))`,
  // });

  // const [formImageProject, setFormImageProject] = useState({
  //   backgroundImage: `url($(imageProject))`,
  // });
  // const handleChangeProjectImage = (ImageProjectValue, idImages) => {
  //   console.log(ImageProjectValue, idImages);
  //   setFormImageProject(ImageProjectValue);
  // };

  const [dataApi, setDataApi] = useState("");
  const postCardToApi = (formInfo) => {
    return fetch("https://dev.adalab.es/api/projectCard", {
      method: "POST",
      body: JSON.stringify(formInfo),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.cardURL);
        setDataApi(data.cardURL);
      });
  };

  return (
    <>
      <div className="container">
        <Header />
        <Main
          onChangeInput={handleChangeInput}
          formInfo={formInfo}
          postCardToApi={postCardToApi}
          dataApi={dataApi}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
