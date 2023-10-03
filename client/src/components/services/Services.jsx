import React from 'react'
import './services.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <h4>Craft visually appealing and user-friendly interfaces for web and mobile applications.</h4>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <h4>Conduct in-depth user research to understand your target audience's needs, behaviors, and pain points.</h4>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <h4>Create interactive prototypes and design animations that bring your concepts to life. </h4>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <h4>Conduct usability testing sessions with real users to gather feedback and identify pain points in the design. </h4>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <h4>Organize and structure information within digital products to optimize user navigation and content discovery. </h4>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>WEB DEVELOPMENT</h3>
          </div>
          
          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <h4>Create fully customized and responsive websites tailored to your clients' specific needs.</h4>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <h4>Craft engaging and user-friendly front-end interfaces that provide an exceptional user experience.</h4>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <h4>Build robust and scalable back-end systems to power web applications.</h4>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <h4>Develop custom CMS solutions or integrate popular CMS platforms like WordPress, Joomla, or Drupal. </h4>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <h4>Create online stores and e-commerce platforms that facilitate seamless transactions and enhance the online shopping experience.</h4>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <h4>Provide high-quality written content for websites, blogs, articles, and marketing materials. </h4>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <h4>Create persuasive and compelling copy for advertisements, product descriptions, landing pages, and social media posts. </h4>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <h4>Produce and edit videos for various purposes, including marketing campaigns, tutorials, product demonstrations, and vlogs. </h4>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <h4>Design visually appealing graphics and images for websites, social media posts, infographics, and marketing collateral.</h4>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <h4>Develop and execute social media content strategies for businesses and individuals.</h4>
            </li>
          </ul>
        </article>
        {/* END OF Content Creation */}
      </div>
    </section>
  )
}

export default Services