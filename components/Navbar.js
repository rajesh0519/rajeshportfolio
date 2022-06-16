import Link from 'next/link';
import jump from 'jump.js';
import { useEffect, useState } from "react";


export default function Navbar(){

    const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  // const scrollPercent = ;


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return(
        <>

            <div className="navbar_container">
                <div className="navbar">
                    <div className='blob' style={{left:`${Math.floor((scrollPosition / 4300) * 100)}%`}}></div>
                    <img src="/home.png" 
                    onClick={() =>{jump('.main_container',{duration: 2000,  }) }}
                    className="ico1" ></img>
                    <img src="/about.png" 
                    onClick={() =>{jump('.about_container',{duration: 2000, offset: 100 }) }}
                    className="ico2" ></img>
                    <img src="/project.png" 
                    onClick={() =>{jump('.project_container',{duration: 2000, offset: 100 }) }}
                    className="ico3" ></img>
                    <img src="/contact.png" 
                    onClick={() =>{jump('.contact_container',{duration: 2000,  }) }}
                    className="ico4" ></img>
                </div>
                

            </div>
        </>
    )
}

