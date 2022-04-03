import { SocialMedia } from './SocialMedia'


export const Contact = ({contactRef}) => {
  return (
    <div ref={contactRef} className="contact" >
        <br />
        <br />
        <h2>Contact</h2>
        <hr />

        <h3>
        Have a question or want to work together? <br />
        <br />
        You can contact me on any of my social networks
        </h3>

        <SocialMedia/>
    </div>
  )
}
