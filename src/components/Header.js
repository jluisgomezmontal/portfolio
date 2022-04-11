import Imagen from '../media/jluis.png'


export const Header = ({ headerRef }) => {
    return (
        <div ref={headerRef} id="about">
            <br />
            <br />
            <div className=" header">

                <img src={Imagen} alt="mi foto" />
                <div>
                    <h2>About</h2>
                    <p>
                        I'm a computer systems engineer, self-taught and constantly learning, passionate about new technologies.
                    </p>
                    <a target="_blank" without rel="noreferrer" href="https://drive.google.com/file/d/1foUU5uUf451qamgQr939WDa3iMOzuibE/view?usp=sharing" >Download C.V.</a>
                </div>
            </div>
        </div>
    )
}
