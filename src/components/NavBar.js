import { FaArrowCircleUp } from "react-icons/fa";


export const NavBar = ({ExperienceClick,headerClick,
  homeClick,portfolioClick,contactClick}) => {



  return (
    <div id="about" className="navbar">
        <a href="/" onClick={homeClick}>Home</a>
        <a href="/" onClick={headerClick}>About</a>
        <a href="/" onClick={ExperienceClick}>Experience</a>
        <a href="/" onClick={portfolioClick}>Portfolio</a>
        <a href="/" onClick={contactClick}>Contact</a>
        <a href="/" id="arrow" onClick={homeClick}><FaArrowCircleUp/></a>
    </div>
  )
}
