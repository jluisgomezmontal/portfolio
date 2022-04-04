export const Experience = ({experienceRef}) => {
  
  return (
    <div ref={experienceRef} className="experience">
        <br />
        <br />
        <h2>Experience</h2>
        <hr />
        <h3>Tata Consultancy Services <span>|</span> 2021- Present</h3>
        <p>
            I am responsible for implementing the project requirements to improve the existing features
            and develop new features for the internal tool to manage employees. Support the production
            deployment on AWS and verifying the integrity for each server.
        </p>
        <h3>Freelancer <span>|</span> 2019- 2021</h3>
        <p>
          Develop web applications based on clients requirements, increase the traffic of clients' web applications by implementing and improving SEO, collect client requirements from the beginning and make backlog tasks.
        </p>

    </div>
  )
}
