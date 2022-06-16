import { AnimationOnScroll } from 'react-animation-on-scroll';


export default function HomePage(){
    return(
        <>
            <div className="main_container">
                <div>
                    <div className="social">
                        <img src='/gmail.ico'></img>
                        <img src='/github.ico'></img>
                        <img src='/facebook.png'></img>
                        <img src='/instagram.png'></img>
                        {/* <img src='/gmail.ico'></img> */}

                    </div>
                <AnimationOnScroll initiallyVisible={true} animateIn="animate__tada">

                    <h1>I am Rajesh Rawat</h1>

                    </AnimationOnScroll>
                    <h3>
                        I have to write something about me,
                        I have to write something about me,

                    </h3>
                </div>
                <div className="main_img">
                    <img src="favicon.ico"></img>
                </div>
            </div>
        </>
    )
}