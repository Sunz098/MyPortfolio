import React from "react";
import './skills.css';
import PythonIc from '../../assets/python.png'
import HtmlIc from '../../assets/html-5.png'
import CssIc from '../../assets/css-3.png'
import JsIc from '../../assets/js.png'
import javaIc from '../../assets/java.png'
import VueIc from '../../assets/Vue.png'
import BootspIc from '../../assets/bootstrap.png'
import ReactIc from '../../assets/physics.png'
import ReactNativeIc from '../../assets/physics.png'


const Skills = () =>{
    return(
       <section id="skill">
            <span className="skillTitle">What i do</span>
            <span  className="skillDesc">
                This is a language and Frame work I can do well in
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={PythonIc} className="skillBarImg" alt="uidesign"/>
                    <div className="skillBarText">
                        <h2>Python</h2>
                        
                    </div>
                </div>
                <div className="skillBar">
                    <img src={HtmlIc} className="skillBarImg" alt="webdesign"/>
                    <div className="skillBarText">
                        <h2>HTML</h2>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={CssIc} className="skillBarImg" alt="appdesign"/>
                    <div className="skillBarText">
                        <h2>Css</h2>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={JsIc} className="skillBarImg" alt="appdesign"/>
                    <div className="skillBarText">
                        <h2>JavaScript</h2>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={javaIc} className="skillBarImg" alt="appdesign"/>
                    <div className="skillBarText">
                        <h2>Java</h2>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={VueIc} className="skillBarImg" alt="appdesign"/>
                    <div className="skillBarText">
                        <h2>Vue Js</h2>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={BootspIc} className="skillBarImg" alt="appdesign"/>
                    <div className="skillBarText">
                        <h2>BootStrap</h2>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={ReactIc} className="skillBarImg" alt="appdesign"/>
                    <div className="skillBarText">
                        <h2>React Js</h2>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={ReactNativeIc} className="skillBarImg" alt="appdesign"/>
                    <div className="skillBarText">
                        <h2>ReactNative</h2>
                    </div>
                </div>
               
                
            </div>
       </section>
    )
}

export default Skills