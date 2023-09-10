import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
//     <section id='experience'>
//       <h5>What skills I have</h5>
//       <h2>My Experience</h2>

//       <div className='container experience__container'>
//         <div className='experience__frontend'>
//           <h3>Frontend Development</h3>
//           <div className='experience__content'>
//             <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon'/>
//               <div>
//                 <h4>HTML</h4>
//                 <small className='text-light'>Experienced</small>
//               </div>
//             </article>
//             <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon'/>
//               <div>
//                 <h4>CSS</h4>
//                 <small className='text-light'>Experienced</small>
//               </div>
//             </article>
//             <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon'/>
//               <div>
//                 <h4>Javascript</h4>
//                 <small className='text-light'>Intermediate</small>
//               </div>
//             </article>
//             <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon'/>
//               <div>
//                 <h4>Bootstrap</h4>
//                 <small className='text-light'>Intermediate</small>
//               </div>
//             </article>
//             <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon'/>
//               <div>
//                 <h4>ReactJS</h4>
//                 <small className='text-light'>Intermediate</small>
//               </div>
//             </article>
//             <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon'/>
//               <div>
//                 <h4>NextJS</h4>
//                 <small className='text-light'>Intermediate</small>
//               </div>
//             </article>
//             <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon'/>
//               <div>
//                 <h4>Tailwind CSS</h4>
//                 <small className='text-light'>Intermediate</small>
//               </div>
//             </article>
//             <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon'/>
//               <div>
//                 <h4>Material UI</h4>
//                 <small className='text-light'>Intermediate</small>
//               </div>
//             </article>
//           </div>
//         </div>

//         {/* END OF FRONTEND */}


//         <div className='experience__backend'>
//           <h3>Backend Development</h3>
//           <div className='experience__content'>
//             <article className='experience__details'>
//             <BsPatchCheckFill className='experience__details-icon'/>
//               <div>
//                 <h4>NodeJS</h4>
//                 <small className='text-light'>Intermediate</small>
//               </div>
//             </article>
//             <article className='experience__details'>
//             <BsPatchCheckFill className='experience__details-icon'/>
//               <div>
//                 <h4>MongoDB</h4>
//                 <small className='text-light'>Intermediate</small>
//               </div>
//             </article>
//             <article className='experience__details'>
//             <BsPatchCheckFill className='experience__details-icon'/>
//               <div>
//                 <h4>ExpressJS</h4>
//                 <small className='text-light'>Intermediate</small>
//               </div>
//             </article>
//             <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon'/>
//               <div>
//                 <h4>TypeScript</h4>
//                 <small className='text-light'>Intermediate</small>
//               </div>
//             </article>
//             <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon'/>
//               <div>
//                 <h4>Postman</h4>
//                 <small className='text-light'>Intermediate</small>
//               </div>
//             </article>
//             <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon'/>
//               <div>
//                 <h4>Git-Github</h4>
//                 <small className='text-light'>Experienced</small>
//               </div>
//             </article>
//             {/* <article className='experience__details'>
//               <BsPatchCheckFill/>
//               <h4>MySQL</h4>
//               <small className='text-light'>Experienced</small>
//             </article>
//             <article className='experience__details'>
//               <BsPatchCheckFill/>
//               <h4>React</h4>
//               <small className='text-light'>Experienced</small>
//             </article> */}
//           </div>
//         </div>
          
//         </div>
        
//     </section>
//   )
// }

// export default Experience
// <!-- qualifications -->
      <section id="qualification" class="qualification section">
        <h2 data-heading="My Journey" class="section__title">
          Work Experience
        </h2>

        <div class="qualification__container container grid">
          

          <div class="experience">
           

            <div class="timeline">
              <div class="timeline__item">
                <div class="circle__dot"></div>
                <h3 class="timeline__title">Software Developer Intern</h3>
                <p class="timeline__text">Data Knobs</p>
                <span class="timeline__date"
                  ><i class="uil uil-calendar-alt"></i>
                  July 2023 - August 2023
                </span>
                <ul>
                  <li>
                    • Integrated  Pixabay API to enable real-time image searches , enhancing the visual appeal of the application.
                  </li>
                  <li>
                    • Designed and developed user-friendly, responsive interfaces using React and deployed the websites using Firebase.
                  </li>
                  {/* <li>
                    • Engaged proactively in team meetings, assisted in maintaining high code quality through participation in code reviews, providing valuable feedback, and optimizing performance.
                  </li> */}
                  </ul> 
              </div>
              <div class="timeline__item">
                <div class="circle__dot"></div>
                <h3 class="timeline__title">Tech Associate</h3>
                <p class="timeline__text">Geekster</p>

                <span class="timeline__date"
                  ><i class="uil uil-calendar-alt"></i>
                  January 2023 - July 2023
                </span>
                <ul>
                  <li>
                    • Developed and curated educational assignments on ReactJS, Tailwind CSS, JavaScript, HTML, and CSS for students, fostering practical learning and problem-solving skills.
                  </li>
                  <li>
                    • Conducted rigorous code reviews and delivered constructive feedback 500+ students in , fostering their growth in software development and reinforcing coding best practices.
                  </li>
                  
                  </ul> 
                
              </div>
              <div class="timeline__item">
                <div class="circle__dot"></div>
                <h3 class="timeline__title">DSA Mentor</h3>
                <p class="timeline__text">Coding Ninjas</p>
                <span class="timeline__date"
                  ><i class="uil uil-calendar-alt"></i>
                  June 2022 - September 2022
                </span>
                <ul>
                  <li>
                    • Mentored and guided students in data structures and algorithms, showcasing strong problem-solving abilities.

                  </li>
                  <li>
                    • Demonstrated debugging skills by assisting students in identifying and resolving complex coding issues, contributing to their overall programming proficiency .
                  </li>
                  
                  </ul> 
                
              </div>
            </div>
          </div>
        </div>
      </section>

)
}
 export default Experience