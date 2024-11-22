import GetAvatar from "./GetAvatar";

function Form(props) {
  const handleChangeNameProyect = (event) => {
    props.onChangeTitle(event.target.value);
  };

  const handleChangeSlogan = (event) => {
    props.onChangeSlogan(event.target.value);
  };

  const handleChangeRepositoryUrl = (event) => {
    props.onChangeRepository(event.target.value);
  };

  const handleChangeDemoIcon = (event) => {
    props.onChangeDemo(event.target.value);
  };

  const handleChangeTechno = (event) => {
    props.onChangeTechnologies(event.target.value);
  };

  const handleChangeDescriptionText = (event) => {
    props.onChangeDescription(event.target.value);
  };

  const handleChangePictureProyect = (event) => {
    props.updateAvatar(event.target.value);
  };

  const handleChangePictureAuthor = (event) => {
    props.updateAvatar(event.target.value);
  };

  return (
    <form className="addForm">
      <h2 className="title">Información</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
        <input
          onChange={handleChangeNameProyect}
          className="addForm__input"
          type="text"
          name="name"
          id="name"
          placeholder="Nombre del proyecto"
        />
        <input
          onChange={handleChangeSlogan}
          className="addForm__input"
          type="text"
          name="slogan"
          id="slogan"
          placeholder="Slogan"
        />
        <div className="addForm__2col">
          <input
            onChange={handleChangeRepositoryUrl}
            className="addForm__input"
            type="url"
            name="repo"
            id="repo"
            placeholder="Repositorio"
          />
          <input
            onChange={handleChangeDemoIcon}
            className="addForm__input"
            type="url"
            name="demo"
            id="demo"
            placeholder="Demo"
          />
        </div>
        <input
          onChange={handleChangeTechno}
          className="addForm__input"
          type="text"
          name="technologies"
          id="technologies"
          placeholder="Tecnologías"
        />
        <textarea
          onChange={handleChangeDescriptionText}
          className="addForm__input"
          type="text"
          name="desc"
          id="desc"
          placeholder="Descripción"
          rows="5"
        ></textarea>
      </fieldset>

      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre la autora</legend>
        <input
          onChange={props.handleChangeUser}
          className="addForm__input"
          type="text"
          name="autor"
          id="autor"
          placeholder="Nombre"
        />
        <input
          onChange={props.handleChangeJob}
          className="addForm__input"
          type="text"
          name="job"
          id="job"
          placeholder="Trabajo"
        />
      </fieldset>
      <GetAvatar
        text="Subir foto del proyecto"
        updateAvatar={handleChangePictureProyect}
      />
      <GetAvatar
        text="Subir foto de la autora"
        updateAvatar={handleChangePictureAuthor}
      />

      <fieldset className="addForm__group--upload">
        <label htmlFor="image" className="button">
          Subir foto del proyecto
        </label>
        <input
          onClick={props.handleClickProjectImage}
          className="addForm__hidden"
          type="file"
          name="image"
          id="image"
        />
        <label htmlFor="photo" className="button">
          Subir foto de la autora
        </label>
        <input
          className="addForm__hidden"
          type="file"
          name="photo"
          id="photo"
        />
        <button className="button--large">Guardar proyecto</button>
      </fieldset>
    </form>
  );
}

export default Form;
