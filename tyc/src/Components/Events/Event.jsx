import './event.css'
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export default function Event() {
    return (
        <>
            <div className="campus_background">

            </div>
            <div className="background_nav">
                <span className='campus_background_heading'>Events at TYC</span>
                <div className='.background_nav_Links'>


                    <div className="background_nav_link">
                        <div className="background_nav_link_heading">
                            <Link to="/">Home</Link>
                        </div>
                        <div className="background_nav_icon">
                            <span><BiChevronRight /></span>

                        </div>
                        <div className="background_nav_link_heading">
                            <Link to="/Event">Event</Link>
                        </div>


                    </div>
                </div>


            </div>
            <div className="events_para">
                <span>Welcome to TYC College, where we offer a vibrant college experience with diverse events throughout the year. Enjoy our Cultural Festivals, Sports Events, and Academic Conferences. Our Skill-Building Workshops and Community Service Events foster growth and give back to society. Join themed parties, Art Exhibitions, and wellness sessions for a well-rounded journey. Explore campus tours and trips for lasting memories. Embrace excitement, learning, and belonging at TYC College. Let's make your college experience unforgettable!</span>
            </div>
            <div className="Gallery_heading">
                <span > Events Gallery</span>
                <hr className='gallery_hr'/>
            </div>
            <div className="Events_Gallery">
                <div className="Events_Gallerry_pic">
                    <img src="./assests/Event_Gallerry/11.jpeg" alt="Events At TYC" />

                </div>
                <div className="Events_Gallerry_pic">
                    <img src="./assests/Event_Gallerry/10.jpeg" alt="Events At TYC" />

                </div>
                <div className="Events_Gallerry_pic">
                    <img src="./assests/Event_Gallerry/2.jpg" alt="Events At TYC" />

                </div>
                

            </div>
            <div className="Events_Gallery2">
                <div className="Events_Gallerry_pic">
                    <img src="./assests/Event_Gallerry/4.jpg" alt="Events At TYC2" />

                </div>
                <div className="Events_Gallerry_pic">
                    <img src="./assests/Event_Gallerry/6.jpg" alt="Events At TYC" />

                </div>
                <div className="Events_Gallerry_pic">
                    <img src="./assests/Event_Gallerry/1.jpg" alt="Events At TYC" />

                </div>
                

            </div>
            <div className="Events_Gallery2">
                <div className="Events_Gallerry_pic">
                    <img src="./assests/Event_Gallerry/9.jpeg" alt="Events At TYC" />

                </div>
                <div className="Events_Gallerry_pic">
                    <img src="./assests/Event_Gallerry/8.jpg" alt="Events At TYC" />

                </div>
                <div className="Events_Gallerry_pic">
                    <img src="./assests/Event_Gallerry/7.jpg" alt="Events At TYC" />

                </div>
                

            </div>
            <div className="Events_Gallery2">
                <div className="Events_Gallerry_pic">
                    <img src="./assests/Event_Gallerry/3.jpg" alt="Events At TYC" />

                </div>
                <div className="Events_Gallerry_pic">
                    <img src="./assests/Event_Gallerry/12.jpeg" alt="Events At TYC" />

                </div>
                <div className="Events_Gallerry_pic">
                    <img src="./assests/Event_Gallerry/5.jpg" alt="Events At TYC" />

                </div>
                

            </div>
        </>
    )
}
