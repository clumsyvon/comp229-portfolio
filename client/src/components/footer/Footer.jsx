import React from 'react'
import './footer.css'
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>VON</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Project</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com"><FaFacebookF /></a>
        <a href="https://www.twitter.com"><FaTwitter /></a>
        <a href="https://www.instagram.com"><FaInstagram /></a>
        <a href="https://www.linkedin.com"><FaLinkedinIn /></a>
      </div>

      <div className="footer__copyright">
        <small> Copyright &copy; COMP229 - Web Application Development. All Rights Reserve.</small>
      </div>
    </footer>
  )
}

export default Footer