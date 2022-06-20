import { CircularProgressbar , CircularProgressbarWithChildren } from 'react-circular-progressbar';
import Tilt from 'react-vanilla-tilt'
import ScrollAnimation from 'react-animate-on-scroll';


export default function About(){
    return(
        <>
            

            <div className="about_container">

                <div>
                    <h2>About Me</h2>
                </div>
                <ScrollAnimation initiallyVisible={true} animateIn="animate__shakeY">
                <Tilt style={{width:"100%" , height:"100%"}}>
                <div className="about_view">
                    <div className="details">
                        <div>
                            <h3>Education</h3>

                            <span>2022 - current</span>
                            <h4>6th semester of BCA (Bachelor of Computer Application)</h4>

                            <span>Feb 2019</span>
                            <h4>12th from RD Nation College (Science Stream)</h4>
                            
                            <span>March 2017</span>
                            <h4>10th from M.J.D High School</h4>
                        </div>

                        <div>
                            <h3>PERSONAL SNIPPETS</h3>

                            <span>28 May 2001</span>
                            <h4>Date of Birth</h4>

                            <span>English, Hindi</span>
                            <h4>Languages Known</h4>

                            <span>Football, Learning New Technologies</span>
                            <h4>Hobbies</h4>
                            
                        </div>
                        
                    </div>
                    <div className="vl">
                    </div>
                    <div className="skills">
                        <div>
                            <h3>Skills</h3>
                        </div>
                        
                        
                        <div className="progress">
                            <div>
                                <CircularProgressbarWithChildren value={70} 
                                styles={{
                                    path: {
                                        // Path color
                                        stroke: `rgba(62, 152, 199, 1)`,
                                      }
                                }}
                                >
                                    <img src="/icons/react.png" className="progress_icon"></img>
                                </CircularProgressbarWithChildren>
                            </div>
                            <div>
                                <CircularProgressbarWithChildren value={55} className="black" 
                                styles={{
                                    path: {
                                        // Path color
                                        stroke: `black`,
                                      }
                                }}
                                >
                                    <img src="/icons/nextjs.png" className="progress_icon"></img>
                                </CircularProgressbarWithChildren>
                            </div>
                            <div>
                                <CircularProgressbarWithChildren value={75} 
                                styles={{
                                    path: {
                                        // Path color
                                        stroke: `#fedd24`,
                                      }
                                    }}
                                >
                                    <img src="/icons/js.png" className="progress_icon"></img>
                                </CircularProgressbarWithChildren>
                            </div>
                            <div>
                                <CircularProgressbarWithChildren value={90} 
                                styles={{
                                    path: {
                                        // Path color
                                        stroke: `#f16529`,
                                      }
                                    }}
                                >
                                    <img src="/icons/html.png" className="progress_icon"></img>
                                </CircularProgressbarWithChildren>
                            </div>
                            <div>
                                <CircularProgressbarWithChildren value={85} 
                                styles={{
                                    path: {
                                        // Path color
                                        stroke: `#16a1dc`,
                                      }
                                    }}
                                >
                                    <img src="/icons/css.png" className="progress_icon"></img>
                                </CircularProgressbarWithChildren>
                            </div>
                            <div>
                                <CircularProgressbarWithChildren value={45} 
                                styles={{
                                    path: {
                                        // Path color
                                        stroke: `#80bd01`,
                                      }
                                    }}
                                >
                                    <img src="/icons/node.png" className="progress_icon"></img>
                                </CircularProgressbarWithChildren>
                            </div>
                            <div>
                                <CircularProgressbarWithChildren value={65} 
                                styles={{
                                    path: {
                                        // Path color
                                        stroke: `#94795d`,
                                      }
                                    }}
                                >
                                    <img src="/icons/mongodb.png" className="progress_icon"></img>
                                </CircularProgressbarWithChildren>
                            </div>
                            


                        </div>

                    </div>
                </div>
                </Tilt>
                </ScrollAnimation>
       
            </div>
        </>
    )
}