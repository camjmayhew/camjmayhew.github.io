import './App.css';
import Typed from 'react-typed';
import React from "react";
import ImageGallery from "react-image-gallery";
import Careers from './Careers2022.JPG';

import images from "./images";
import "react-image-gallery/styles/css/image-gallery.css";

export default function App() {

  return (
    <div className="App">
      {/* Introduction to the Page, Typed Components. */}
       <div className="intro">
         <h1>
           <Typed
             strings={[
               "Hi, my name is Cam!"
             ]}
             typeSpeed={50}
             backSpeed={40}
             showCursor={false}
           />
         </h1>
         <h2>
           <Typed
             strings={[
               "I'm running for Co-President and Secretary of CSESoc."
             ]}
             startDelay={2000}
             typeSpeed={30}
             showCursor={false}
           />
         </h2>
      </div>

      {/* Sections with photos and text side by side. */}
      <div className="section"> 
        <div className="text">
          <p> I've been involved in CSESoc for my entire time at University, in the <b> Careers Portfolio. </b> Last year I was in the <b>Careers Subcommitee</b>, and this year I was fortunate enough to be <b>Careers Director</b>, alongside Bec and Srija. </p>
          <p> Having additional experience as both <b> Treasurer </b> and <b> Arc Delegate (x2)</b>, I feel uniquely positioned to be able to help CSESoc work through its rapid expansion, and come out on the other side greater than ever. </p>
          <p> I still remember my first motivation to join CSESoc: being convinced by Shrey to join. While my motivations have changed, I can confidently say it was the best decision of my uni life thus far. </p>
          <h3> Why Me? </h3>
          <p> My main motivation for running for Exec is to give back even further to a community which has granted me so many opportunities, and to propel CSESoc into even greater leagues. </p>
          <p> I have a few main goals I am aiming to achieve next year: </p>
          <li> Prioritise mental health for the entire team </li> 
          <li> Foster an inclusive society-wide culture with more society-wide events </li>
          <li> Create a more approachable CSESoc, internally and externally </li>

        </div>
        <img className="photo" src={Careers} alt="Careers Team 2022"></img>

      </div>

      <div className="section">
        <img className="photo" src="https://i.postimg.cc/w3KmySDL/1T9A6716.jpg" alt="Cam in Heathers: The Musical" id="heathers"/>
        <div className="text" id="section2"> 
          <br /> <br /> <br />
          <p> Here's some more general information about me! </p>
          <br />
          <li> I love music! I play guitar and piano, and I sing. </li>
          <li> I also love musicals. On the right you can see me in the background playing Kurt in Heathers. </li>
          <li> I even have a youtube channel where I posted a few covers a few years back ... </li>
          <li> Moving away from music, I currently tutor COMP1531 :D </li> 
        </div>
      </div>

      <br /> <h3>
        Thanks for reading! Here's some of my other favorite photographs from my time in CSESoc.
      </h3>
      <ImageGallery
        items={images}
      />
    </div>
  );
}
