import React from 'react';

import './contact.styles.scss';

const Contact = () => (
  <div className="form">
    <h2>Contact Me</h2>
    <label for="firstname">First name</label>
    <input type="text" id="firstname" name="firstname" />
    <label for="lastname">Last name</label>
    <input type="text" id="lastname" name="lastname" />
    <label for="message">Message</label>
    <textarea type="text" id="message" name="message" />
    {/* <input type="text" id="firstname" name="firstname" /> */}
    <input type="submit" value="Submit" />
  </div>
);

export default Contact;