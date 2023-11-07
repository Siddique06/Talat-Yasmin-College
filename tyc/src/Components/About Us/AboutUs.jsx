import './About.css'
import { Link } from 'react-router-dom'
import { BiChevronRight } from 'react-icons/bi'
import Count from '../Count/Count'
export default function AboutUs() {
    return (
        <>

            <div className="campus_background">

            </div>
            <div className="background_nav">
                <span className='campus_background_heading'>About Us</span>
                <div className='.background_nav_Links'>


                    <div className="background_nav_link">
                        <div className="background_nav_link_heading">
                            <Link to="/">Home</Link>
                        </div>
                        <div className="background_nav_icon">
                            <span><BiChevronRight /></span>

                        </div>
                        <div className="background_nav_link_heading">
                            <Link to="/AboutUs">About Us</Link>
                        </div>


                    </div>
                </div>

            </div>
            <div className="left_heading">
                <span>Talat Yasmin College  Established Since 2021 </span>
                <hr className='gallery_hr'/>
            </div>
            <div className="About_college">
                <div className="about_left">

                    <div className="left_para">
                        <p>Talat Yasmin College is a renowned institution located in <b>Sangla Hill</b>, Punjab. Our mission is to provide a transformative educational experience, fostering personal growth and academic excellence. With a team of dedicated faculty and state-of-the-art facilities, we empower students to become responsible global citizens. Our core values of integrity, innovation, and inclusivity create a dynamic learning environment. Join us at TYC, where dreams are nurtured, and possibilities abound. Welcome to a place where excellence meets empowerment!</p>

                    </div>
                </div>
                <div className="about_right">
                    <img src="./assests/reAbout.jpg" alt="Staff of TYC" />

                </div>

            </div>
            <div className="scholorship_background">
                <span className='scholorship_mainheading'>MISSION & VISION</span>
            </div>

            <div className="left_heading">
                <span>"Empowering Minds, Transforming Futures" </span>
                <hr className='gallery_hr'/>
            </div>

            <div className="mission">
                <div className="mission_left">
                <img src="./assests/reChairman.jpg" alt="" />
                </div>
                <div className="mission_right">
                    <div className="mission_right_para">
                    <p><b>Talat Yasmin College</b> is committed to providing a transformative and inclusive learning environment that empowers students with knowledge and skills to thrive in a global society. Our mission is to nurture creativity, critical thinking, and ethical leadership, fostering a passion for lifelong learning. As a leading institution of academic excellence, we envision shaping the future leaders and innovators of tomorrow. Through dedication to innovation, research, and community engagement, we strive to make a positive impact on society and create a brighter world. At Talat Yasmin College, we are dedicated to empowering minds and transforming futures.</p>

                        
                    </div>
                    <div className="mission_right_ch">
                        <span>—TALAT YASMIN</span>
                    </div>

                </div>

            </div>
            <Count/>
            <div className="Gallery_heading">
                <span>Gallery</span>
                <hr className='gallery_hr'/>
            </div>
            <div className="Gallery">
                <div className="Gallerry_pic">
                    <img src="./assests/Gallerry/G1.jpg" alt="" />

                </div>
                <div className="Gallerry_pic">
                    <img src="./assests/Gallerry/G2.jpg" alt="" />

                </div>
                <div className="Gallerry_pic">
                    <img src="./assests/Gallerry/G3.jpg" alt="" />

                </div>
                

            </div>
            <div className="Gallery">
                <div className="Gallerry_pic">
                    <img src="./assests/Gallerry/G4.jpg" alt="" />

                </div>
                <div className="Gallerry_pic">
                    <img src="./assests/Gallerry/G5.jpg" alt="" />

                </div>
                <div className="Gallerry_pic">
                    <img src="./assests/Gallerry/G6.jpg" alt="" />

                </div>
                

            </div>
        </>
    )
}
