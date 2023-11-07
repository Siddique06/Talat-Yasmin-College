import { GiTeacher, GiNotebook, GiPuzzle } from 'react-icons/gi'
import { TfiBook } from 'react-icons/tfi'
import { PiBooks, PiCertificateLight } from 'react-icons/pi'
import { AiOutlineSafetyCertificate } from 'react-icons/ai'
import { LiaSchoolSolid } from 'react-icons/lia'
import { TbCertificate } from 'react-icons/tb'
import { MdSportsTennis } from 'react-icons/md'


import './home.css';
import Count from '../Count/Count'

export default function Home() {




    return (





        <>

            <div className="container">
                <div className="background">

                </div>
            </div>
            <hr />
            <div className="container2">
                <div className="b1">
                    <div className="box1">
                        <div className="Top">
                            <span className='icon'>< GiTeacher /></span>
                        </div>
                        <div className="Mid">
                            <span className='title'>Certified Teachers</span>
                        </div>
                        <div className="Bottom">
                            <span className='bottom_para'> Certified Teachers are skilled and qualified educators with official recognition, dedicated to maintaining high educational standards and fostering a positive learning environment for students.</span>
                        </div>
                    </div>
                    <div className="box2">
                        <div className="Top">
                            <span className='icon'><TfiBook /></span>
                        </div>
                        <div className="Mid">
                            <span className='title'>Special Education</span>
                        </div>
                        <div className="Bottom">
                            <span className='para'>Special Education involves tailored teaching approaches and support systems designed to meet the unique learning needs of individuals with disabilities or exceptionalities, ensuring inclusive and equitable education for all.</span>
                        </div>
                    </div>
                </div>
                <div className="b2">
                    <div className="box1">
                        <div className="Top">
                            <span className='icon'><PiBooks /></span>
                        </div>
                        <div className="Mid">
                            <span className='title'>Book & Library</span>
                        </div>
                        <div className="Bottom">
                            <span className='para'>
                                The college's Book & Library facilities offer a rich and diverse resource of knowledge, providing students with valuable learning materials to enhance their academic pursuits.</span>
                        </div>
                    </div>
                    <div className="box2">
                        <div className="Top">
                            <span className='icon'><PiCertificateLight /></span>
                        </div>
                        <div className="Mid">
                            <span className='title'>Sport Clubs</span>
                        </div>
                        <div className="Bottom">
                            <span className='para'>Sport Clubs in college offer students a vibrant platform to pursue their athletic passions, foster teamwork, and promote a healthy and active lifestyle within the campus community.</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="Container3">
                <div className="Left">
                    <div className="offerHeading">
                        <span>What We Offer</span>

                    </div>
                    <div className="offerPara">
                        <span>"We offer a diverse range of enriching educational programs and opportunities that empower students to thrive academically, personally, and professionally."</span>
                    </div>
                    <div className="boxes">
                        <div className="offerbox1">
                            <div className="offer_left">
                                <div className="offer_icn">
                                    <span className='offer_Left_icon'><AiOutlineSafetyCertificate /></span>
                                </div>

                            </div>
                            <div className="offer_right">

                                <span className='offer_right_heading'>Safety First<br /></span>
                                <div className="offer_right_para">
                                    <span >
                                        Safety first in college TYC ensures prioritizing the well-being and protection of students and staff in all aspects of campus life and activities.






                                    </span>
                                </div>
                            </div>

                        </div>
                        <div className="offerbox1">
                            <div className="offer_left">
                                <div className="offer_icn">
                                    <span className='offer_Left_icon'><LiaSchoolSolid /></span>
                                </div>

                            </div>
                            <div className="offer_right">

                                <span className='offer_right_heading'>Regular Classes<br /></span>
                                <div className="offer_right_para">
                                    <span >Regular classes  entail the customary and recurring educational sessions where students engage in systematic learning under the guidance of qualified instructors.</span>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="boxes">
                        <div className="offerbox1">
                            <div className="offer_left">
                                <div className="offer_icn">
                                    <span className='offer_Left_icon'><TbCertificate /></span>
                                </div>

                            </div>
                            <div className="offer_right">

                                <span className='offer_right_heading'>Certified Teachers<br /></span>
                                <div className="offer_right_para">
                                    <span >Students' academic journeys are enriched by teachers who ignite curiosity, facilitate intellectual growth, and empower them.</span>
                                </div>
                            </div>

                        </div>
                        <div className="offerbox1">
                            <div className="offer_left">
                                <div className="offer_icn">
                                    <span className='offer_Left_icon'><GiNotebook /></span>
                                </div>

                            </div>
                            <div className="offer_right">

                                <span className='offer_right_heading'>Sufficient Classrooms<br /></span>
                                <div className="offer_right_para">
                                    <span >TYC have Sufficient classrooms , providing conducive spaces for learning, collaboration, and a comfortable academic environment.</span>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="boxes">
                        <div className="offerbox1">
                            <div className="offer_left">
                                <div className="offer_icn">
                                    <span className='offer_Left_icon'><GiPuzzle /></span>
                                </div>

                            </div>
                            <div className="offer_right">

                                <span className='offer_right_heading'>Creative Lessons<br /></span>
                                <div className="offer_right_para">
                                    <span >The goal of Creative Lessons in college is to inspire imagination, encourage innovation, and offer students the opportunity to explore and express their creativity.</span>
                                </div>
                            </div>

                        </div>
                        <div className="offerbox1">
                            <div className="offer_left">
                                <div className="offer_icn">
                                    <span className='offer_Left_icon'><MdSportsTennis /></span>
                                </div>

                            </div>
                            <div className="offer_right">

                                <span className='offer_right_heading'>Sports Facilities<br /></span>
                                <div className="offer_right_para">
                                    <span >College offers top-notch sports facilities, enabling students to excel in athletics and enjoy a well-rounded campus life.</span>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="Right">
                    <img src="./assests/Liabrary.jpg" alt="Liabray of TYC" />


                </div>
            </div>



            {/* ///Number of Students */}
            <Count />



        </>


    )
}
