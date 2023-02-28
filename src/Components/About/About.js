import React from 'react'
import { Link } from 'react-router-dom'
import "./About.css"
export default function About() {
   return (
      <div className="about">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <div className="titlepage">
                     <h2 style={{marginTop:20}}>Why Choose US</h2>
                     <p>Why Choose me</p>
                     <hr />
                  </div>
               </div>
               <div className=" col-sm-12">
                  <div className="about_box">
                     <div className="write">
                        <div className="qwe">
                           <div className='we'>
                              <h3>Best INTERIOR Design</h3>
                              <p>Abeer Alamal Technical Works ... At Home-Designing, we document inspiration. Our aim is to bring to our readers a steady set of resources that would help them visualize, create and maintain beautiful homes. Our emphasis is on visuals that motivate you. We cover architectural innovations, cool homes, ideas for specific rooms, new design trends, products and occasionally decor tips. We hope to become your one stop source for home design inspiration!
                             
                              </p>
                              <h5>Here are a Few Highlights:</h5>
                              <ul >
                                 <li>Full Stack web and mobile development</li>
                                 <li>Interactive Front End as per the design</li>
                                 <li>React and React Native</li>
                                 <li>
Redux for State Mnanagement</li>
                                 <li>
Building REST API</li>
      <li>Managing database</li>
                              </ul>
                              </div>
                        <div className="pic">
         
                              <figure><img className='q' src="04.jpeg" style={{width:"100%"}} alt="#" /></figure>
                           
                        </div>
                           </div>

                        </div>
                  
               </div>
                     </div>
            </div>
         </div>
      </div>
   )
}
