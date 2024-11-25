function Form({ onChangeInput }) {
  
  const handleChangeInput = (event) => {
    onChangeInput(event.target.value);
    console.log(event.target.value);
  }
  
  
  // const handleChangeNameProyect = (event) => {
  //   onChangeInput (event.target.value);
  // };

  // const handleChangeSlogan = (event) => {
  //   props.onChangeSlogan(event.target.value);
  // };

  // const handleChangeRepositoryUrl = (event) => {
  //   props.onChangeRepository(event.target.value);
  // };

  // const handleChangeDemoIcon = (event) => {
  //   props.onChangeDemo(event.target.value);
  // };

  //  const handleChangeTechno = (event) => {
  //   props.onChangeTechnologies(event.target.value);
  // };

  //    const handleChangeDescriptionText = (event) => {
  //   props.onChangeDescription(event.target.value);
  // };


   

  return (
    <form className="addForm">
      <h2 className="title">Información</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
        <input
          //onChangeInput={handleChangeNameProyect}
          onChangeInputForm={handleChangeInput}
          className="addForm__input"
          type="text"
          name="name"
          id="name"
          placeholder="Nombre del proyecto"
        />
        <input
          //onChange={handleChangeSlogan}
          onChangeInputForm={handleChangeInput}
          className="addForm__input"
          type="text"
          name="slogan"
          id="slogan"
          placeholder="Slogan"
        />
        <div className="addForm__2col">
          <input
            //onChange={handleChangeRepositoryUrl}
            onChangeInputForm={handleChangeInput}
            className="addForm__input"
            type="url"
            name="repo"
            id="repo"
            placeholder="Repositorio"
          />
          <input
            //onChange={handleChangeDemoIcon}
            onChangeInputForm={handleChangeInput}
            className="addForm__input"
            type="url"
            name="demo"
            id="demo"
            placeholder="Demo"
          />
        </div>
        <input
          //onChange={handleChangeTechno}
          onChangeInputForm={handleChangeInput}
          className="addForm__input"
          type="text"
          name="technologies"
          id="technologies"
          placeholder="Tecnologías"
        />
        <textarea
          //onChange={handleChangeDescriptionText}
          onChangeInputForm={handleChangeInput}
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
          //onChange={props.handleChangeUser}
          className="addForm__input"
          type="text"
          name="autor"
          id="autor"
          placeholder="Nombre"
        />
        <input
          //onChange={props.handleChangeJob}
          className="addForm__input"
          type="text"
          name="job"
          id="job"
          placeholder="Trabajo"
        />
      </fieldset>

      <fieldset className="addForm__group--upload">
        <label htmlFor="image" className="button">
          Subir foto del proyecto
        </label>
        <input
          //onClick={props.handleClickProjectImage}
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
