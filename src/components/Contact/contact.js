import React , {useRef} from "react";
import './contat.css';
import GithubIc from '../../assets/github.png';
import NetlifyIc from '../../assets/Netlify_logo.svg.png';
import MysqlIc from '../../assets/sql-icon.png'
import FacebookIcon from '../../assets/facebook.png';
import InstagramIc from '../../assets/instagram.png'
import GithubLg from '../../assets/github-sign.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_fmn5qi2', 'template_fg56qq1', form.current, 'CuSDNVsO_UxG0Fjf3')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert("Email Send !!!")
          }, (error) => {
              console.log(error.text);
          });
      };
    return(
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">Tools</h1>
                <p className="clientDesc">
                    This is the tools that works.
                </p>
                <div className="clientImgs">
                    <img src={GithubIc} className="clientImg"></img>
                    <img src={NetlifyIc} className="clientImg"></img>
                    <img src={MysqlIc} className="clientImg"></img>
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill the form below to discuss internship opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your name" name='your_name'></input>
                    <input type="email" className="email" placeholder="Your Email" name="your_email"></input>
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message" ></textarea>
                    <button type="submit" className="submitBtn" value='Send'>Submit</button>
                    <div className="links">
                        <a href="https://www.facebook.com/tawan.surina/"><img className="link" src={FacebookIcon}/></a>
                        <a href="https://www.instagram.com/_txwxn_/?hl=th"><img className="link" src={InstagramIc}/></a>
                        <a href="https://github.com/Sunz098"><img className="link" src={GithubLg}/></a>
                    </div>
                </form>

            </div>
        </section>
    );
}

export default Contact