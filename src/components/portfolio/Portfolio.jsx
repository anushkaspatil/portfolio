import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
/*import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'*/

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio',
    github: "https://github.com/anushkaspatil/Portfolio",
    demo: ""
  },
  {
    id: 2,
    image: IMG2,
    title: 'Log Ingestor and Query Interface',
    github: "https://github.com/anushkaspatil/Log-Ingestor-and-Query-Interface",
    demo: ""
  },
  {
    id: 3,
    image: IMG3,
    title: 'This is a portfolio item title',
    github: "https://github.com/anushkaspatil",
    demo: ""
  },
  /*{
    id: 4,
    image: IMG4,
    title: 'This is a portfolio item title',
    github: "https://github.com",
    demo: "https://dribbble.com/"
  },
  {
    id: 5,
    image: IMG5,
    title: 'This is a portfolio item title',
    github: "https://github.com",
    demo: "https://dribbble.com/"
  },
  {
    id: 6,
    image: IMG6,
    title: 'This is a portfolio item title',
    github: "https://github.com",
    demo: "https://dribbble.com/"
  }*/
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
      {
        data.map(({id,image,title,github,demo}) =>{
        return(
          <article key={id} className='portfolio_item'>
           <div className="portfolio_item-image">
            <img src={image} alt={title} />
           </div>
            <h3>{title}</h3>
            <div className='portfolio_item-cta'>
              <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
              <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
        </article>
        )
  })
}
      </div>
    </section >
  )
}
export default Portfolio