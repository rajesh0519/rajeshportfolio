import AnimationOnScroll from 'react-animate-on-scroll';
import emailjs from '@emailjs/browser';
import { useRef , useState } from 'react';

export default function Contact(){

    const [formstatus , setFormStatus ] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_cabxugs', 'template_yikbhca', form.current, 'HHb_r9D_gHjtrQdNI')
          .then((result) => {
              console.log(result.text);
              alert("Form Submitted Successfully");
              setFormStatus(true);
          }, (error) => {
              console.log(error.text);
              alert("Error Occured Plz try again!");

          });
      };

    return(
        <>


            <div className="contact_container">
                <div className="contact_header">
                    {/* <h1>CONTACT</h1> */}
                </div>
                <AnimationOnScroll initiallyVisible={true} animateIn="animate__fadeInLeftBig">

                <div className="contact_details">
                    <div>
                        <h3>Email - </h3>
                        <span>
                            rawatrajesh0519@gmail.com
                        </span>
                    </div>
                    
                    <div>
                        <h3>Contact - </h3>
                        <span>
                            +91 8080463271
                        </span>

                    </div>
                    
                    <div>
                        <h3>Socials - </h3>
                        <span>

                        <a href={`mailto:rawatrajesh0519@gmail.com`} target="blank" rel="noreferrer"><img src='/gmail.ico'></img></a>
                        <a href="https://github.com/rajesh0519" target="blank" rel="noreferrer"><img src='/github.ico'></img></a>
                        <a href="https://www.instagram.com/rajesh0519/" target="blank" rel="noreferrer"><img src='/instagram.png'></img></a>

                        </span>

                    </div>

                    <div>
                        <h3>Address - </h3>
                        <span>
                            Virar , Maharashtra-401303
                        </span>

                    </div>
                    


                </div>
                </AnimationOnScroll>

                <AnimationOnScroll initiallyVisible={true} animateIn="animate__fadeInRightBig">

                <div className="contact_form">

                    {
                        formstatus ?
                        
                        <h2>Form Already Submitted</h2>

                        :
                        <form ref={form} onSubmit={sendEmail}>
                        <div>
                            <h2>Contact Me</h2>
                        </div>

                        <div>
                            {/* <label>Name</label> */}
                            <input type="text" name="user_name" placeholder="Full Name"></input>
                        </div>

                        <div>
                            {/* <label>Email</label> */}
                            <input type="mail" name="user_email" placeholder="Email"></input>
                        </div>

                        <div>
                            {/* <label>Message</label> */}
                            <textarea type="text" name="message" placeholder="Message"></textarea>
                        </div>

                        <div>
                            <input type="submit" value="Send"></input>
                        </div>

                    </form>
                    }

                    
                </div>
                </AnimationOnScroll>

                

            </div>
        </>
    )
}