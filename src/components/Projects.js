
import { projects } from '../projects'
import { Project } from './Project'

export const Projects = ({portfolioRef}) => {

  return (
    <div className="projects" ref={portfolioRef}>
      <br />
      <br />
        <h2>PORTFOLIO</h2>
        <hr />

        {
          projects.map(project=>(
            <Project
              project={project}
            />
          ))
        }

    </div>
  )
}
