import ScrollAnimation from 'react-animate-on-scroll';


export default function Project(){

    const projects = [{
        name: 'www.symbianssports.com',
        img:'/icons/symbianlogo.png',
        language: 'Next Js , React Js , MongoDB',
        deployed: 'Vercel',
        details: 'A website build for Football Academy located in Virar.'
    },
    {
        name: 'jobportal-zeta.vercel.app',
        img:'/icons/rb_logo.png',
        language: 'Next Js , React Js , MongoDB',
        deployed: 'Vercel',
        details: 'A website build for College Project.'
    },
    {
        name: 'makecareer.vercel.app',
        img:'/favicon.ico',
        language: 'Next Js , React Js , MongoDB',
        deployed: 'Vercel',
        details: 'A free Resume Builder website, its easy to use and totally free , no gimmick.'
    },
    {
        name: 'jobportal-zeta.vercel.app',
        img:'/icons/rb_logo.png',
        language: 'Next Js , React Js , MongoDB',
        deployed: 'Vercel',
        details: 'A website build for College Project.'
    },
    {
        name: 'makecareer.vercel.app',
        img:'/favicon.ico',
        language: 'Next Js , React Js , MongoDB',
        deployed: 'Vercel',
        details: 'A free Resume Builder website, its easy to use and totally free , no gimmick.'
    }
]

    return(
        <>
            <div className="project_container">
                <div className="project_header">
                    <h1>PROJECTS</h1>
                    {/* <h1>R</h1>
                    <h1>O</h1>
                    <h1>J</h1>
                    <h1>E</h1>
                    <h1>C</h1>
                    <h1>T</h1>
                    <h1>S</h1> */}

                </div>
                <ScrollAnimation animateIn="animate__jello">

                <div className="project_card_container">

                    {
                        projects.map((curElm,index )=> {
                            return(

                                    <div className="card" key={index}>
                                    <div className="content">
                                        <div className="front">
                                            <img src={`${curElm.img}`} ></img>
                                        </div>
                                        <div className="back">
                                            <div>
                                                <span>Languages Used : </span> <br />
                                                <h3>{curElm.language}</h3>

                                                <span>Deployed On : </span> <br />
                                                <h3> {curElm.deployed} </h3>
                                            </div>

                                            <div>
                                                <a href={`https://${curElm.name}`} rel="noreferrer" target="_blank">{curElm.name}</a>
                                            </div>

                                            <div>
                                                <span>Project Details : </span> <br />
                                                <h4>{curElm.details}</h4>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                
                
                    
                </div>
                </ScrollAnimation>

            </div>
        </>
    )
}