import React, { useState } from 'react';

function Contact() {
    const fixedRecipientEmail = 'uzezihectoratto@gmail.com';
    const [message, setMessage] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleUserEmailChange = (event) => {
        setUserEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const emailSubject = encodeURIComponent('ZELDA WIKI PORTAL: Inquiry');
        const emailBody = encodeURIComponent(`From: ${userEmail}\n\n${message}\n\n -Sent from ZWP Webpage`);
        const mailtoLink = `mailto:${fixedRecipientEmail}?from=${userEmail}&subject=${emailSubject}&body=${emailBody}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className='font-thick directory'>
            <h1>
                Contact Me
            </h1>
            <form className='contact' onSubmit={handleSubmit}>
                <label className='contact'>
                    Your Email:
                    <input type="email" className='contact-font'
                    value={userEmail} onChange={handleUserEmailChange} required />
                </label>
                <label className='contact'>
                    Your Message:
                    <textarea className='msg-box contact-font' 
                    value={message} onChange={handleMessageChange} required />
                </label>
                <button className='btn' type="submit">
                    Send Email
                </button>
            </form>
        </div>
    );
}

export default Contact;