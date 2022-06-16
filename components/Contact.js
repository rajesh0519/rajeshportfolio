import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Contact(){
    return(
        <>


            <div className="contact_container">
                <div className="contact_header">
                    {/* <h1>CONTACT</h1> */}
                </div>
                <AnimationOnScroll animateIn="animate__fadeInLeftBig">

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
                        <h3>Address - </h3>
                        <span>
                            Virar , Maharashtra-401303
                        </span>

                    </div>
                    <div>
                        <h3>Socials - </h3>
                        <span>
                            <img src='/instagram.png'></img>
                            <img src='/github.ico'></img>
                            <img src='/facebook.png'></img>
                        </span>

                    </div>


                </div>
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__fadeInRightBig">

                <div className="contact_form">
                    <form>
                        <div>
                            <h2>Contact Me</h2>
                        </div>

                        <div>
                            {/* <label>Name</label> */}
                            <input type="text" placeholder="Full Name"></input>
                        </div>

                        <div>
                            {/* <label>Email</label> */}
                            <input type="mail" placeholder="Email"></input>
                        </div>

                        <div>
                            {/* <label>Message</label> */}
                            <textarea type="text" placeholder="Message"></textarea>
                        </div>

                        <div>
                            <input type="submit" value="Submit"></input>
                        </div>

                    </form>
                </div>
                </AnimationOnScroll>

            </div>
        </>
    )
}