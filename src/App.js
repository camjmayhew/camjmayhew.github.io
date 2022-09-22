import './App.css';
import Typed from 'react-typed';
import React from "react";
import ImageGallery from "react-image-gallery";
import { SocialIcon } from 'react-social-icons';

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
               "I'm running for Co-President and Vice President (Externals) of CSESoc."
             ]}
             startDelay={2000}
             typeSpeed={20}
             showCursor={false}
           />
         </h2>
      </div>

      {/* Sections with photos and text side by side. */}
      <div className="section"> 
        <div className="text">
          <p> I've been involved in CSESoc for my entire time at University, in the <b> Careers Portfolio. </b> Last year I was in the <b>Careers Subcommitee</b>, and this year I was fortunate enough to be <b>Careers Director</b>, alongside Bec and Srija. </p>
          <p> Having additional experience as both <b> Treasurer </b> and <b> Arc Delegate (x2)</b>, I feel uniquely positioned to be able to help CSESoc work through its rapid expansion, and come out on the other side greater than ever. </p>
          <p> I still remember my first motivation to join CSESoc: being convinced by a friend to join. While my motivations have changed, I can confidently say it was the best decision of my uni life thus far. </p>
          <h3> Why Me? </h3>
          <p> My main motivation for running for Exec is to give back even further to a community which has granted me so many opportunities, and to propel CSESoc into even greater leagues. </p>
          <p> I have a few main goals I am aiming to achieve next year: </p>
          <li> Prioritise mental health for the entire team </li> 
          <li> Foster an inclusive society-wide culture with more society-wide events </li>
          <li> Create a more approachable CSESoc, internally and externally </li>

        </div>
        <img className="photo" src="https://i.postimg.cc/7PGyz21p/IMG-2034.jpg" alt="Photo of Cam in the Blue Mountains" id="firstPhoto"></img>

      </div>

      <br /> <br />

      <div className="section">
        <div className="text">
          <b> How am I going to achieve these goals? </b> 
          <p> While mental health can be a common goal for many people in CSESoc, I have a few concrete things I want to achieve next year in order to help CSESoc 
            with this growing issue. </p>
            <li> Less work and more fun. In general, I want to spread the workload of directors better, and help educate directors in properly delegating tasks and increasing
              those in difficulty to subcom throughout the year. As a Careers Director, I personally feel like I did not do a great job of delegating and 
              allowing subcom to grow, so I want to help next year's Directors do better, while keeping the workload for subcom not overwhelming. As part of this,
              I want to have more frequent general meetings, and more bonding society-wide! </li> 
              <li> One on ones. Anytime throughout the year, I want to have a space where any team member (Exec, Director, Subcom, Team Lead) can come to the exec
              and ask for any form of help they need. Extra help on an event? You got it. Need a break? We'll cover you.
              </li>
          <p> I sometimes hear about CSESoc being too much of a exclusive society for internals, only those who get in can be fully a part of CSESoc. 
            I would really love to attempt to change this next year, as Co-Pres or VPE. I aim to achieve this by potentially opening up internals events (not all but a good chunk)
            to the wider CSE community, for anyone interested in getting involved. Furthermore, on the society side of things, I aim to give more frequent updates from the exec team,
            especially on things such as roadtrips and society-wide bonding, to ensure as many people as possible can get involved, and everybody knows what is happening. </p> 
        </div>
        <div className="text">
          <b> Why Co-President and Vice President (Externals)? </b> 
          <ol type="1">
            <li> Co-President </li>
            <p> Co-President was once explained to me as the steering wheel of the CSESoc ship. The vision creator. But most importantly, not the captain.
              Let me explain. To me, Co-Pres isn't an executive position with the best title, or the highest power, but actually the opposite. As the Co-Pres
              of CSESoc, I would aim to empower the directors and other subcom to make a better CSESoc from the top-down, via prioritising mental health and approachability.
              I also think that with my broad experience in other societies, I have an excellent all-rounded understanding of societies and everything that goes
              into the well-oiled machine that is CSESoc.
            </p>
            <li> Vice President (Externals)</li>
            <p> As one of the new roles, and as someone with a lot of passion for Careers (aka $$$), Weekly BBQs (aka free food) and Mentoring Programs (aka free connections), I think VPE is an excellent 
              choice for me. Recently, in my internship at Prospa, I have been able to define my role as one of the first interns there. I think VPE is a bit
              like that too, as I will be defining the role and pioneering a new, more balanced life when in CSESoc. A large concern for internals is 
              the intense workload, and as VPE, I intend to be able to assist the Directors of Socials, Studex, Careers and Competitions whenever needed,
              as well as be a mentor, as involved as they want me to be. </p>
          </ol>

        </div>
        <div className="text">
          <b> Why would I fit the role? </b>
          <p> <b> I'm passionate. </b> Over everything else, I know I have the passion for an executive position. When I first joined university,
          I remember sheepishly hoping one day to be an executives of CSESoc, to be able to help CSE in such a broad fashion - whether
          that be through a student mentoring program, a hackathon to train your skills, etc. It would truly be an honor to be able to
          continue to lead CSESoc, and thats where my passion comes from. Helping anyone in CSE. </p> 
          
          <p> <b> I genuinely want the best for CSESoc. </b> If that destiny doesn't include me in an executive position, then that's totally fine. </p>

          <p> <b> I'm good at taking feedback. </b> In any exec position, I think that being able to learn from your mistakes and grow as a leader
            is absolutely vital, and I think that is something I do exceptionally well. </p>
            
          <p>
            <b> I'm flexible. </b> While sometimes when I challenge opinions, it may seem hostile or unflexible, I genuinely am enquiring
            into the possibility of an idea, to make it rock solid before commiting.
          </p>

          <p>
            <b> I'm organised. </b> As you may have seen by taking a quick glimpse at the photo below, I get involved in a lot of things. So 
            how do I have the time? Organisation! I know I have excellent time-management habits and will not struggle at all to dedicating
             my time to CSESoc.
          </p>

          <p>
            <b> I'm reachable. </b> I've got excellent reply game. Ask anyone :D
          </p>
        </div>
      </div>
            
      <br /> <br />
      <div className="section">
        <img className="photo" src="https://i.postimg.cc/9FLH9YRt/CFE2-B772-B5-FF-40-E1-BC6-F-D2-A39-DFC18-B5-1.jpg" alt="Cam in Heathers: The Musical" id="heathers"/>
        <div className="text" id="section2"> 
          <br /> <br /> <br />
          <p> Here's some more general information about me! </p>
          <br />
          <li> I love music! I play guitar and piano, and I sing. </li>
          <li> I also love musicals - on the left you can see me playing Kurt in Heathers (: </li>
          <li> I even have a youtube channel where I posted a few covers a few years back ... </li>
          <li> Moving away from music, I currently tutor COMP1531 :D </li> 
          <li> I am the #1 Weekly BBQ fan 🍖🍖 </li>
          <li> I am interested in Security, Startups and Trading. </li> 
          <br />

          If you would like to reach out, don't hesitiate! <br /> <br />
          <SocialIcon url="https://www.instagram.com/cammayhew/" /> &nbsp;&nbsp;&nbsp;&nbsp; <SocialIcon url="https://linkedin.com/in/cameron-mayhew" />
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
