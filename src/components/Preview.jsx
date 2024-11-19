
  function Preview (props){
    return(
        <section className="preview">
    <div className="projectImage">{props.projectImage}</div>
    <article className="card">
      <h2 className="card__projectTitle"><span className="card__projectTitle--text">Personal project card</span></h2>

      <div className="card__author">
        <div className="card__authorPhoto"></div>
        <p className="card__job">{props.nameJob}</p>
        <h3 className="card__name">{props.nameUser}</h3>
      </div>
  
      <div className="card__project">            
        <h3  className="card__name">{props.nameProyect}</h3>
        <p className="card__slogan">{props.nameSlogan}</p>
        <h3 className="card__descriptionTitle">Product description</h3>
        <p className="card__description">{props.nameDescription}</p>

        <div className="card__technicalInfo">
          <p className="card__technologies">{props.nameTechnologies}</p>
      
          <a className="icon icon__www" href={props.nameDemo} title="Haz click para ver el proyecto online">
            Web link
          </a>
          <a className="icon icon__github" href={props.nameRepository} title="Haz click para ver el código del proyecto">
            GitHub link
          </a>
        </div>
      </div>
    </article>
  </section>
    )
 }
 

 export default Preview;