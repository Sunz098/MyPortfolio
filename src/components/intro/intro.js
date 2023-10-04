import React from "react";
import './intro.css';
import bg from '../../assets/profiles.png'

const Intro = () =>{
    return(
       <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I am <span className="introName">Tawan</span><br/>Computer Science</span>
                <p className="introPara">My name is Tawan Surina (Japan). I'm a Computer science student from Maejo university<br/>
                I love learning about coding and being a programmer.
                I'm ready to learn new things and develop myself. <br/>
                Thank you.
                </p>
                <a href="https://github.com/Sunz098/MyPortfolio/blob/master/src/assets/Resume/My%20Resume%2001.jpg?raw=true"> <button className="btn"> My resume</button></a>
            </div>
            <img className="bg" src={bg}/>
       </section>
    )
}

export default Intro