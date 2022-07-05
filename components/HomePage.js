import ScrollAnimation  from 'react-animate-on-scroll';


export default function HomePage(){
    return(
        <>
            <div className="main_container">
                    <div className="social">
                        <a href={`mailto:rawatrajesh0519@gmail.com`} target="blank" rel="noreferrer"><img src='/gmail.ico'></img></a>
                        <a href="https://github.com/rajesh0519" target="blank" rel="noreferrer"><img src='/github.ico'></img></a>
                        <a href="https://www.instagram.com/rajesh0519/" target="blank" rel="noreferrer"><img src='/instagram.png'></img></a>
                    </div>
    
                    <div>
                        <ScrollAnimation initiallyVisible={true} animateIn="animate__tada">
                            <h1>I am, <br />Rajesh Rawat</h1>
                        </ScrollAnimation>
                    </div>
    
                    <div>
                    <h3>
                        I have to write something about me,
                        I have to write something about me,

                    </h3>
                    </div>

                <div className="main_img">
                    <img src="profile.jpg"></img>
                </div>

            </div>
        </>
    )
}