import React from "react";
import css from "./Main.module.css";
import Mainpic from "../../images/Group 7.png";
import HelpCard from "../HelpCard";
import Picture from "../../images/picture.png";



export const MainPage = () => {

  return (
    // 11111111111111111111111111111111111111
    <div className={css.MainPage}>
      <div className={css.containerOne}>
        <nav>
          <span>Thrivetalk</span>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Blog</li>
          </ul>
          <button className={css.contact}>CONTACT US</button>
        </nav>
        <div className={css.mainBlock}>
          <div>
            <p className={css.logo}>Thrivetalk</p>
            <h1>HELPING YOU THRIVE <br /> IN ALL AREAS OF LIFE</h1>
            <p className={css.text}>
              Our highly talented therapists can help you <br /> with a range of issues including relationships,<br /> sex, PTSD, depression, social anxiety, or even <br /> just caring for yourself more.
            </p>
            <div>
              <button className={css.button}>WHO AM I</button>
              <button className={css.d}>WHAT DO I DO</button>
            </div>
          </div>
           <div>
             <img class={css.photo}src={Mainpic} /> 
          </div> 
        </div>
      </div>
       {/* 22222222222222222222222 */}
      <div className={css.containerTwo}>
        <h2>Why Thrive?</h2>

      <p className={css.textt}> 
      <span>
        Want to improve your well-being from the comfort <br /> of your own couch? Are you having trouble finding <br /> the right therapist?
        </span> 
        <span>
          Here at ThriveTalk, our licensed therapists provide the same quality care you would get in office from anywhere you can access your laptop or mobile phone. Become your best self with ThriveTalk.  Start therapy now with a licensed therapist!
        </span>
        </p>
    
        <div>
        <img class={css.picture}src={Picture} />
        </div>
      </div>
      <div className={css.info}>
        <div className={css.about}>
        <h4>ABOUT US</h4>
        <p>We want to help you thrive! Whether you are just looking for someone to talk to, or are struggling with a mental wellness issue we’re here to help.  Our highly talented therapists can help you with a range of issues including relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more.
        </p>
        </div>
        <h5>WE CAN HELP YOU WITH</h5>
        </div>
        <div className={css.card}>
       <HelpCard className={css.Card} bg='#FFE2DE' title='Weight Lifting'/>
      <HelpCard className={css.Card} bg='#C4E769' title='Running Spinning'/>
        <HelpCard className={css.Card} bg='#62D0DF' title='Pumping Iron'/>
        <HelpCard className={css.Card} bg='#0052C1'title='Pumping Iron'/>
        </div>
       
    
     
      
    </div>
  );
};
