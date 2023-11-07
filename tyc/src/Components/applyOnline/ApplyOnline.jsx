import './ApplyOnline.css'
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { FaUserGraduate } from 'react-icons/fa'
import { PiStudentBold } from 'react-icons/pi'
import { useState } from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react'




export default function ApplyOnline() {
    
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();
      
        try {
          await emailjs.sendForm(
            'service_5zq8g23',
            'template_ql5rpoo',
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

    const [formData, setFormData] = useState({
        name: '',
        fatherName: '',
        matricNumber: '',
        address: '',
        contactNumber: '',
        school: '',
        course: 'Select Course',
        graduationCourses:'Select Course',
        interNumber:'',
        college:''

    });
    const [inter , setInter] = useState(false);
    const [grad , setGrad] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    

    const handleInter = ()=>{
        setInter(!inter);
        setGrad(false);
    }
    const handleGrad = () => {
        setGrad(!grad);
        setInter(false);


    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    
    return (
        <>
            <div className="campus_background">

            </div>
            <div className="background_nav">
                <span className='campus_background_heading'>Apply Online</span>
                <div className='.background_nav_Links'>


                    <div className="background_nav_link">
                        <div className="background_nav_link_heading">
                            <Link to="/">Home</Link>
                        </div>
                        <div className="background_nav_icon">
                            <span><BiChevronRight /></span>

                        </div>
                        <div className="background_nav_link_heading">
                            <Link to="/ApplyOnline">Apply Online</Link>
                        </div>


                    </div>
                </div>


            </div>
            <div className="apply_main">
                <div className="apply_online">
                    <div className="apply_icn">
                        <PiStudentBold />
                    </div>
                    <div className="apply_heading">
                        <span onClick={handleInter}>Intermediate</span>
                    </div>
                </div>
                <div className="apply_online">
                    <div className="apply_icn">
                        <FaUserGraduate />
                    </div>
                    <div className="apply_heading">
                        <span onClick={handleGrad}>Under-Graduation</span>
                    </div>
                </div>
            </div>
            {
               inter && !grad && (
            
            <div className='Form'>
                <h2 className='form_heading'>  Student Information Form (Intermediate)</h2>
                <form ref={form} className='form_start' onSubmit={sendEmail}>
                    <label  htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

                    <label htmlFor="fatherName">Father's Name:</label>
                    <input type="text" id="fatherName" name="fatherName" value={formData.fatherName} onChange={handleChange} required />

                    <label htmlFor="matricNumber">Matric Marks:</label>
                    <input type="number" id="matricNumber" name="matricNumber" value={formData.matricNumber} onChange={handleChange} required />

                    <label htmlFor="course">Courses:</label>
                    <select id="course" name="course" value={formData.course} onChange={handleChange} required>
                        <option value="Select Course" disabled>Select Course</option>
                        <option value="FSC Engineering">FSC ( Pre-Engineering)</option>
                        <option value="FSC Medical">FSC (Pre-Medical)</option>
                        <option value="ICS (Physics)">ICS (Physics)</option>
                        <option value="ICS (Economics)">ICS (Economics)</option>
                        <option value="FA">FA</option>
                        <option value="FA (IT)">FA (IT)</option>
                        {/* Add more options as needed */}
                    </select>

                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />

                    <label htmlFor="contactNumber">Contact Number:</label>
                    <input type="number" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />

                    <label htmlFor="school">School:</label>
                    <input type="text" id="school" name="school" value={formData.school} onChange={handleChange} required />

                    <button type="submit">Submit</button>
                </form>
            </div>
            )}
            {
                grad && !inter && (
            
            <div className='Form'>
                <h2 className='form_heading'>  Student Information Form (UnderGraduate)</h2>
                <form ref={form} className='form_start' onSubmit={sendEmail}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

                    <label htmlFor="fatherName">Father's Name:</label>
                    <input type="text" id="fatherName" name="fatherName" value={formData.fatherName} onChange={handleChange} required />

                    <label htmlFor="interNumber">Inter Marks:</label>
                    <input type="text" id="interNumber" name="interNumber" value={formData.interNumber} onChange={handleChange} required />

                    <label htmlFor="course">Courses:</label>
                    <select id="graduationCourses" name="graduationCourses" value={formData.graduationCourses} onChange={handleChange} required>
                        <option value="Select Course" disabled>Select Course</option>
                        <option value="BS_Zoloogy">BS ZOLOOGY</option>
                        
                        <option value="BSURDU">BS URDU</option>
                        <option value="BS_ENGLISH">BS ENGLISH</option>
                        <option value="BSCS">BSCS</option>
                        {/* Add more options as needed */}
                    </select>

                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />

                    <label htmlFor="contactNumber">Contact Number:</label>
                    <input type="text" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />

                    <label htmlFor="college">College:</label>
                    <input type="text" id="college" name="college" value={formData.college} onChange={handleChange} required />

                    <button type="submit">Submit</button>
                </form>
            </div>
            )}
            {submitted && (
        <div className="success-popup">
          <h3>Form submitted successfully!</h3>
          <p>Thank you for your submission.</p>
        </div>
      )}


        </>
    )
}
