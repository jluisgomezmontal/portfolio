import Imagen from '../media/jluis.png'


export const Header = () => {
  return (
      <div className=" header" id="about">
          <img src={Imagen} alt="mi foto" />
          <div>
              <h2>About</h2>
              <p>
              I'm a computer systems engineer, self-taught and constantly learning, passionate about new technologies.
              </p>
              <a target="_blank" without rel="noreferrer" href="https://drive.google.com/file/d/1aamzbm3I0x7ZF4dED-K_LoOnVJAx0zkR/view?usp=sharing" >Download C.V.</a>
          </div>
      </div>
  )
}