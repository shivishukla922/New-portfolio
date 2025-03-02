import React from 'react'
import './Projects.css';

import { FaYoutubeSquare } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiUnacademy } from "react-icons/si";
import { PiAmbulanceThin } from "react-icons/pi";

const Projects = () => {
  return (
    <div id='projects' className='project-ctr'>
      <div className="project-heading">
    
      <h1>Projects</h1>
      
      </div>
      <div className="project-container">
        <div className="single-container">
          <div className="project-name">
          <FaYoutubeSquare  size='70px'/>
         
          <h2> PlayTube </h2>
         
         
          
            </div>
            <div className="details">
            <p> 
             Utilized ReactJS, JavaScript, and Tailwind CSS for the frontend
             Created a detailed video page displaying video title, description, views, and related videos
             Added a search feature to find videos based on keywords</p>
            </div>
        

        </div>
        <div className="single-container">
          <div className="project-name">
          <SiUnacademy size='70px'/>
            <h2> Glarus Academy </h2>
            </div>
            <div className="details">
            <p> Developed an academy project using ReactJS, JavaScript, Redux, and Bootstrap
             Created login and OTP pages for secure user authentication.
            Integrated various APIs for dynamic data management</p>
         
            </div>
         
          
          </div>
          <div className="single-container">
            <div className="project-name">
            <PiAmbulanceThin  size ='70px' />
            <h2> Ambulance helping system </h2>
            </div>
            <div className="details">
             
              <p>Designed a system that helps patients to book a nearby ambulance
               Utilized Java and Apache to implement the application and XML to create the frontend of
                 the application</p>
                 </div>
           
          
          </div>
         
          
         
      </div>
      </div>
  )
}

export default Projects