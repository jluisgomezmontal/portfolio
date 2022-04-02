
import { projects } from '../projects'
import { Project } from './Project'

export const Projects = () => {

  return (
    <div className="projects" id="projects">
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
