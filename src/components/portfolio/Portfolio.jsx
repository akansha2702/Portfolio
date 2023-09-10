import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/port.PNG'
import IMG2 from '../../assets/gpt-mapper.PNG'
import IMG3 from '../../assets/myFinanceFriend.PNG'
import IMG4 from '../../assets/travel-guide.jpg'
import IMG5 from '../../assets/spotify-clone.PNG'
import IMG6 from '../../assets/sociopedia-img.PNG'
import IMG7 from '../../assets/car.PNG'

// we r going to generate portfolio dynamically using array map method
const data = [
  {
    id: 1,
    image: IMG6,
    techstack : 'React.js | Node.js | Express.js | MongoDB | Redux | Material UI',
    title: 'SocioPedia',
    github: 'https://github.com/akansha2002/SocioPedia',
    demo: 'https://sociopediaas.vercel.app/'

  },
  {
    id: 2,
    image: IMG7,
    techstack : 'Next.js | React.js | TypeScript | Tailwind CSS | Rapid API | Headless UI',
    title: 'CarHub',
    github: 'https://github.com/akansha2002/CarHub',
    demo: 'https://car-hub-akansha2002.vercel.app/'

  },

  {
    id: 3,
    image: IMG1,
    techstack : 'React.js | HTML | CSS ',
    title: 'Portfolio',
    github: 'https://github.com/akansha2002/Portfolio',
    demo: 'https://portfolio-livid-eight-56.vercel.app/'

  },

  {
    id: 4,
    image: IMG2,
    techstack : 'React.js | Node.js | Chart.js | Puppeeter | ChatGPT API',
    title: 'GPT Mapper',
    github: 'https://github.com/akansha2002/GPT-Mapper',
    demo: 'https://gptmapper.netlify.app/'

  },

  {
    id: 5,
    image: IMG3,
    techstack : 'HTML | CSS | JavaScript ',
    title: 'My Finance Friend',
    github: 'https://github.com/akansha2002/Ms_azure2022',
    demo: 'https://azuretesting2002.netlify.app//'

  },

  {
    id: 6,
    image: IMG4,
    techstack : 'React.js | HTML | CSS ',
    title: 'Travel Guide',
    github: 'https://github.com/akansha2002/SIH',
    demo: 'https://travel-guide-rho.vercel.app/'

  },
  {
    id: 7,
    image: IMG5,
    techstack : 'HTML | CSS | JavaScript ',
    title: 'Spotify Clone',
    github: 'https://github.com/akansha2002/Spotify-Clone',
    demo: 'https://spotify-clone-seven-ivory.vercel.app/'

  },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: 'Crypto Currency Dashboard & Financial Visulaization',
  //   github: 'https://github.com',
  //   demo: 'https:dribble.com/shots/16673735-Crypto-currency-dashboards-and-financial-data-visualization'

  // }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image,techstack, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title}/>
                  <h3>{title}</h3>
                  <div className='techstack'>
                  <p>{techstack}</p>
                  </div>
                  <div className='portfolio__item-cta'>
                    <a href={github} className='btn' target='_blank'>Github</a>
                    <a href={demo} className='btn btn-primary'>Live Demo</a>
                  </div>
                </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio
