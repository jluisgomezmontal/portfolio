export const Project = ({project}) => {
    const {name, img, description, github, hosted}= project;
  return (
    <div className="project">
        <img src={img}alt={name} />
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
                <a target="_blank" rel="noreferrer" href={github}>
                    Repository
                </a>
                <a target="_blank" rel="noreferrer" href={hosted}>
                    Go
                </a>
        </div>
    </div>
  )
}
