import { FaGithub,FaLinkedin,FaTwitter } from "react-icons/fa";


export const SocialMedia = () => {
  return (
    <div className="social">
        <a id="linkedin" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jose-luis-gomez-montalvan-220690/">
            <FaLinkedin/>
        </a>
        <a id="github" target="_blank" rel="noreferrer" href="https://github.com/jluisgomezmontal">
            <FaGithub/>
        </a>
        <a id="twitter" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jose-luis-gomez-montalvan-220690/">
            <FaTwitter/>
        </a>

    </div>
  )
}
