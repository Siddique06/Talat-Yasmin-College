import React from 'react'
import './footer.css'
import { TfiLocationPin } from 'react-icons/tfi'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { BiChevronRight, BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi'
import { Link } from 'react-router-dom'


export default function Footer() {
  const facebookPageUrl = "https://www.facebook.com/TYCWorld";
  const instagramLink = `https://instagram.com/tyc.world?igshid=MzRlODBiNWFlZA==`;
  return (
    <div className='main'>
      <div className="mini_main">


        <div className="Container1">
          <div className="heading">
            <span>Have a Questions?</span>
          </div>
          <div className="Address">
            <div className="icon">
              <TfiLocationPin />
            </div>
            <div className='Address_heading' >
              <span>Talat Yasmin College|Shahkot Road|Sangla Hill|Dist Nankana Sahib|Pakistan </span>
            </div>
          </div>
          <div className="Address">
            <div className="icon">
              <BsTelephone />
            </div>
            <div className='Address_heading' >
              <span>+92-308-1505505</span>
            </div>
          </div>
          <div className="Address">
            <div className="icon">
              <AiOutlineMail />
            </div>
            <div className='Address_heading' >
              <span>tycinstitute@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="Container2">
          <div className="heading">
            <span>Links</span>
          </div>
          <div className="Links">
            <div className="icon2">
              <span><BiChevronRight /></span>

            </div>
            <div className="link_heading">
              <Link to="/"> Home</Link>
            </div>

          </div>
          <div className="Links">
            <div className="icon2">
              <span><BiChevronRight /></span>

            </div>
            <div className="link_heading">
              <Link to="/Admission">Admission</Link>
            </div>
          </div>
          <div className="Links">
            <div className="icon2">
              <span><BiChevronRight /></span>

            </div>
            <div className="link_heading">
              <Link to="/ApplyOnline">Apply Online</Link>
            </div>

          </div>
          <div className="Links">
            <div className="icon2">
              <span><BiChevronRight /></span>

            </div>
            <div className="link_heading">
              <Link to="/AboutUs">About </Link>
            </div>

          </div>
          
          <div className="Links">
            <div className="icon2">
              <span><BiChevronRight /></span>

            </div>
            <div className="link_heading">
              <Link to="/Event">Events</Link>
            </div>

          </div>
          <div className="Links">
            <div className="icon2">
              <span><BiChevronRight /></span>

            </div>
            <div className="link_heading">
              <Link to="/ContactUs">Contact Us</Link>
            </div>

          </div>



        </div>
        <div className="Container4">

          <div className="heading">
            <span>Subscribe Us!<br /></span>
          </div>
          <div className="sub">
            <div className="sub_input">
              <input type="email " placeholder='Enter email address' name="" id="" />
            </div>
            <div className="sub_btn">
              <button type="submit">Subscribe</button>
            </div>
          </div>
          <div className="heading4">
            <span>Connect With Us<br /></span>
          </div>
          <div className="main_social">
            <div className="socials">
              <div className="social_icn">
              <a href={facebookPageUrl} target="_blank" rel="noopener noreferrer"> <span  className='icns fb'><BiLogoFacebook /></span> </a>
              </div>


            </div>
            <div className="socials ">
              <div className="social_icn">
              <a href={instagramLink} target="_blank" rel="noopener noreferrer"><span className='icns insta'><BiLogoInstagram /></span></a>
              </div>


            </div>

          </div>

        </div>

       

      </div>
      <div className="copyright">
          <span>© 2023 SidByte. All rights reserved.</span>
        </div>

    </div>
  )
}
