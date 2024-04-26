import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className='contact-us-container'>
      <h2>Contact Us</h2>
      <div className='contact-us-form'>
        <form>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' />
          </div>

          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className='form-group'>
            <label htmlFor='name'>Subject</label>
            <input type='text' id='name' />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Message</label>
            <textarea id='message' rows='5'></textarea>
          </div>
          <button className='submit-button'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
