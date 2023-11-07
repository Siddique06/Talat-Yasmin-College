import './Contact.css'
import { Link } from 'react-router-dom'
import { BiChevronRight } from 'react-icons/bi'
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react'

export default function Contact() {
    const form = useRef();

    const [contactData, setcontactData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''

    });
    const [submitted, setSubmitted] = useState(false);
    const  sendMessage = async (e) => {
        e.preventDefault();
        
        try {
            await emailjs.sendForm(
              'service_q6k3r9y',
              'template_tpunk9o',
              form.current,
              'dOFqfBrxjZfuSBkeB'
            );
        
            console.log('Message sent successfully');
            console.log('Message sent');
            setSubmitted(true);
        
            setTimeout(() => {
              setSubmitted(false);
            }, 5000);
          } catch (error) {
            console.log('Error sending message:', error.text);
          }


    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setcontactData((prevData) => ({ ...prevData, [name]: value }));
    };
    return (
        <div>
            <div className="campus_background">

            </div>
            <div className="background_nav">
                <span className='campus_background_heading'>Contact Us</span>
                <div className='.background_nav_Links'>


                    <div className="background_nav_link">
                        <div className="background_nav_link_heading">
                            <Link to="/">Home</Link>
                        </div>
                        <div className="background_nav_icon">
                            <span><BiChevronRight /></span>

                        </div>
                        <div className="background_nav_link_heading">
                            <Link to="/ContactUs">Contact Us</Link>
                        </div>


                    </div>
                </div>

            </div>
            <div className="contact">
                <div className="c1">
                    <div className="contactBackground">
                        <div className="background_heading">
                            <span>Address</span>
                        </div>
                        <div className="background_address">
                            <p>Talat Yasmin College|Shahkot Road|Sangla Hill|Dist Nankana Sahib|Pakistan</p>
                        </div>
                    </div>

                    <div className="contactBackground">
                        <div className="background_heading">
                            <span>Contact Number</span>
                        </div>
                        <div className="background_address">
                            <p>+92-308-1505505</p>
                        </div>
                    </div>
                </div>
                <div className="c2">
                    <div className="contactBackground">
                        <div className="background_heading">
                            <span>Email Address</span>
                        </div>
                        <div className="background_address">
                            <p>tycinstitute@gmail.com</p>
                        </div>
                    </div>
                </div>



            </div>

            <div className="contactBottom">
                <div className="map">
                    <img src="./assests/contact_logo.JPG" alt="logo" />
                </div>
                <div className="message">

                    <form ref={form} className="form_start" onSubmit={sendMessage}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={contactData.name} onChange={handleChange} required />

                        <label htmlFor="email">Your Email:</label>
                        <input type="text" id="email" name="email" value={contactData.email} onChange={handleChange} required />

                        <label htmlFor="subject">Subject:</label>
                        <input type="text" id="subject" name="subject" value={contactData.subject} onChange={handleChange} required />

                        <label htmlFor="message">Your Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={contactData.message}
                            onChange={handleChange}
                            rows="4"
                            cols="50"
                            required
                        ></textarea>
                        <button type="submit" >Submit</button>
                    </form>
                </div>
                {submitted && (
                    <div className="success-popup">
                        <h3>Form submitted successfully!</h3>
                        <p>Thank you for your submission.</p>
                    </div>
                )}

            </div>
        </div>

    )
}
