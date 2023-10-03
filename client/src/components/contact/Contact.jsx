import React, { useRef, useState } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false); // State to manage message sent confirmation

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_bnpcp87', 'template_p9eut4h', form.current, 'jQisjojUmCFVoJ54C')
      .then(() => {
        setMessageSent(true); // Set message sent confirmation to true
        form.current.reset(); // Clear the form
      })
      .catch((error) => {
        console.error('Email send error:', error);
        setMessageSent(false); // Reset message sent confirmation
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>von.manaois@gmail.com</h5>
            <a href="mailto:von.manaois@gmail.com>" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Von Manaois</h5>
            <a href="https://m.me/von.manaois" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+1234567890</h5>
            <a href="https://api.whatsapp.com/send?phone=+1234567890" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} action='#'>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

        {messageSent && (
          <div className="message-sent">
            <p>Message Sent Successfully!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
