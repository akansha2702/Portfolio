import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/port.PNG'
import IMG2 from '../../assets/gpt-mapper.PNG'
import IMG3 from '../../assets/myFinanceFriend.PNG'
import IMG4 from '../../assets/travel-guide.jpg'
import IMG5 from '../../assets/spotify-clone.PNG'
// import IMG6 from '../../assets/port.jpg'

// we r going to generate portfolio dynamically using array map method
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio',
    github: 'https://github.com/akansha2002/Portfolio',
    demo: 'https://portfolio-livid-eight-56.vercel.app/'

  },

  {
    id: 2,
    image: IMG2,
    title: 'GPT Mapper',
    github: 'https://github.com/akansha2002/GPT-Mapper',
    demo: 'https://gptmapper.netlify.app/'

  },

  {
    id: 3,
    image: IMG3,
    title: 'My Finance Friend',
    github: 'https://github.com/akansha2002/Ms_azure2022',
    demo: 'https://azuretesting2002.netlify.app//'

  },

  {
    id: 4,
    image: IMG4,
    title: 'Travel Guide',
    github: 'https://github.com/akansha2002/SIH',
    demo: 'https://travelwithakansha.herokuapp.com///'

  },
  {
    id: 5,
    image: IMG5,
    title: 'Spotify Clone',
    github: 'https://github.com/akansha2002/Spotify-Clone',
    demo: ''

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
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title}/>
                  <h3>{title}</h3>
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
