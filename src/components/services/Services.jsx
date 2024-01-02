import React from 'react'
import './services.css' //Position of responsibility
import { BsCheckAll } from "react-icons/bs";  

const Services = () => {
  return (
    <section id='services'>
      <h5>Here's</h5>
      <h2>Position Of Responsiblity</h2>

      <div className="container services_container">

        <article className='service'>
          <div className="service_head">
            <h3>Ambassador</h3>
          </div>
          <ul className='service_list'>
            <li>
            <BsCheckAll />
            <p>Ambassador of Giakaa Open Web3 Community at PVGCOET.</p>
            </li>
            <li>
            <BsCheckAll />
            <p>Initiated the Web3 foundation at PVGCOET, uniting NFT, Crypto, Metaverse, and DeFi enthusiasts.</p>
            </li>
            <li>
            <BsCheckAll />
            <p>Fostered knowledge sharing and exploration within the community.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Google DSC Lead at PVGCOET</h3>
          </div>
          <ul className='service_list'>
            <li>
            <BsCheckAll />
            <p>Addressed 250+ students in the 1st informative session, resulting in a 54% increase in community membership</p>
            </li>
            <li>
            <BsCheckAll />
            <p>Encouraged 50+ students to participate in the Google Solution Challenge (GSC) by conducting an interactive session with Arin Yadav</p>
            </li>
            <li>
            <BsCheckAll />
            <p>The Top 10 Finalist, the only team representing India globally in the GSC 2023. </p>
            </li>
            <li>
            <BsCheckAll />
            <p>Successfully completed the PR Officer role in 2022-23.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Internships</h3>
          </div>
          <ul className='service_list'>
            <li>
            <BsCheckAll />
            <p>Former Artificial Intelligence Intern at RadiacalX AI </p>
            </li>
            <li>
            <BsCheckAll />
            <p> Working on an AI-powered interview preparation tool designed to assist users in honing their skills</p>
            </li>
            <li>
            <BsCheckAll />
            <p>It would guide the users through technical questions, situational judgment tests</p>
            </li>
            
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services