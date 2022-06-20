import ScrollAnimation from 'react-animate-on-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , EffectCards } from "swiper";

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
        <div className ="slider">

        </div>
        
            <div className="project_container">
                <div className="project_header">
                    <h1>PROJECTS</h1>
                </div>
                {/* <ScrollAnimation animateIn="animate__jello"> */}


                
                <div className="project_card_container">
                <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
                >
        {
                        projects.map((curElm,index )=> {
                            return(
                                <SwiperSlide key={index}>

                                    <div className="card" >
                                        <div className="card_img">
                                            <img src={`${curElm.img}`} alt="card_img"></img>
                                        </div>

                                        <div>
                                            <a href={`https://${curElm.name}`} target="_blank" refs="noreferrer">{curElm.name}</a>
                                        </div>

                                        <div>
                                            <h3>Languages Used - </h3>
                                            <span>
                                                {curElm.language}
                                            </span>

                                            <h3>Deployed On - </h3>
                                            <span>
                                                {curElm.deployed}
                                            </span>

                                            <h3>Project Details - </h3>
                                            <span>
                                                {curElm.details}
                                            </span>
                                        </div>

                                    </div>
                             </SwiperSlide>

                            )
                        })
                 
                    }

                </Swiper>
                </div>
                {/* </ScrollAnimation> */}

            </div>
        </>
    )
}