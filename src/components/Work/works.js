import React from "react";
import './works.css';
import Portfilio1 from '../../assets/port01.jpg'
import Portfilio2 from '../../assets/api-project.png'
import Portfilio3 from '../../assets/adddrop-project.png'
import Portfilio4 from '../../assets/count-project.png'


const Works = ()=> {
    return(
        <section id="works">
            <h2 id="WorksTitle">My Portfolio</h2>
            <spans className="WorkDesc">This is a My project and activities </spans>
            <div className="worksImgs">
                <div>
                    
                <a><img src={Portfilio1} className="workImg" /></a>
                <p>ได้รับรางวัลเหรียญเรียนดี 2565</p>
                </div>


                <div>
                   <a href="https://subtle-banoffee-318220.netlify.app/"><img src={Portfilio3} className="workImg2"/></a> 
                
                <p>ทำเว็บเพิ่มถอนรายวิชา</p>
                </div>
                <div>
                    <a href="https://cute-crumble-39ac67.netlify.app/"><img src={Portfilio4} className="workImg2"/></a>
                
                <p>ทำเว็บนับจำนวนการกดไลค์</p>
                </div>

                
            </div>
        </section>
    );
}

export default Works