import React, { useState } from 'react'
import './admission.css'
import { Link } from 'react-router-dom'


import { TbHexagonNumber1, TbHexagonNumber2, TbHexagonNumber3, TbHexagonNumber4, TbHexagonNumber5, TbHexagonNumber6, TbHexagonNumber7, TbHexagonNumber8, TbHexagonNumber9 } from 'react-icons/tb'
import { BiChevronRight } from 'react-icons/bi'
import  { IoMdArrowDropdown } from 'react-icons/io'
// import Slider2 from '../Slider/Slider2'
import Sldr from '../Final_Slider/Sldr'


export default function Admission() {
  const [scho,setScho] =useState(false);
  const [scho2,setScho2] =useState(false);
  const [scho3,setScho3] =useState(false);
  const [scho4,setScho4] =useState(false);
  const [scho5,setScho5] =useState(false);
  const [scho6,setScho6] =useState(false);
  const [scho7,setScho7] =useState(false);
  const [scho8,setScho8] =useState(false);
  const [scho9,setScho9] = useState(false)
  
  return (
    <>
      

      <div className="campus_background">

      </div>
      <div className="background_nav">
        <span className='campus_background_heading'>Admission</span>
        <div className='.background_nav_Links'>


          <div className="background_nav_link">
            <div className="background_nav_link_heading">
              <Link to="/">Home</Link>
            </div>
            <div className="background_nav_icon">
              <span><BiChevronRight /></span>

            </div>
            <div className="background_nav_link_heading">
              <Link to="/Admission">Admission</Link>
            </div>


          </div>
        </div>

      </div>




      <div className="campuslife_def">
        <span className='campus_heading'>"Discover the Pulse of Campus Life"</span>
        <div className="campus_para">
          <p>Our vibrant campus fosters a diverse and inclusive community where friendships flourish and cultural exchange thrives. Engage in a multitude of student organizations and clubs, igniting passions and shaping future leaders. Experience a rich tapestry of events, festivals, and sports, creating lasting memories and a sense of belonging. Benefit from state-of-the-art facilities and comprehensive support services for academic and personal growth. Join us on a transformative journey, where connections, knowledge, and endless possibilities await.</p>
        </div>
      </div>
      {
      
      
                            /* Slider */


      }
      <Sldr/>



      <div className="scholorship">
        <div className="scholorship_background">
          <span className='scholorship_mainheading'>SCHOLARSHIPS & FEE CONCESSIONS</span>
        </div>
        <div className="type_background">


          <div className="type_scholorship">
            <div className="type_upper">
              <div className="type_icn">
                <span><TbHexagonNumber1 /></span>
              </div>
              <div className="type_heading">
                <span> : MERIT BASED SCHOLARSHIP </span>
              </div>
              <div className="dropdown">
                <span className='dropdown_icn ' onClick={() => setScho(!scho)}><IoMdArrowDropdown/></span>
              </div>

            </div>
            {scho && <div className="type_lower">
              <p >TYC College promotes hard work and excellence by offering an exclusive scholarship program. Students who excel in academics can receive up to 100% Fee Waiver. Those with <b>75%</b>  or above marks are eligible for free education at the time of admission, while students with <b>70%</b> or above marks can apply for a special fee concession of <b>50%</b>. At TYC College, we believe in recognizing and supporting deserving students to help them achieve their educational goals.</p>
            </div>}
            
          </div>
          <div className="type_scholorship">
            <div className="type_upper">
              <div className="type_icn">
                <span><TbHexagonNumber2 /></span>
              </div>
              <div className="type_heading">
                <span> : ORPHAN STUDENTS </span>
              </div>
              <div className="dropdown">
                <span className='dropdown_icn ' onClick={() => setScho2(!scho2)}><IoMdArrowDropdown/></span>
              </div>

            </div>
            {scho2 &&  <div className="type_lower">
              <p > TYC College provides a special scholarship category for orphans who have lost their fathers or guardians. This scholarship aims to support and empower these students by offering them financial assistance to pursue their education at TYC College. We believe in creating an inclusive environment where all students, including those who have faced difficult circumstances, have equal access to educational opportunities.</p>
            </div>}
            
          </div>
          <div className="type_scholorship">
            <div className="type_upper">
              <div className="type_icn">
                <span><TbHexagonNumber3 /></span>
              </div>
              <div className="type_heading">
                <span> : KINSHIP </span>
              </div>
              <div className="dropdown">
                <span className='dropdown_icn ' onClick={() => setScho3(!scho3)}><IoMdArrowDropdown/></span>
              </div>

            </div>
            {scho3 &&
            <div className="type_lower">
              <p >TYC College values the well-being of its students and their families. As a testament to our commitment, we offer a special discount on education to the direct family members of both current and former students. We recognize the importance of supporting and assisting the families associated with our college community. By providing this discount, we aim to alleviate the financial burden and make education more accessible to the loved ones of our students. At TYC College, we prioritize the holistic well-being of our students and their families, fostering a supportive and inclusive educational environment.</p>
            </div>}
          </div>
          <div className="type_scholorship">
            <div className="type_upper">
              <div className="type_icn">
                <span><TbHexagonNumber4 /></span>
              </div>
              <div className="type_heading">
                <span> : TEACHERS’ CHILDREN </span>
              </div>
              <div className="dropdown">
                <span className='dropdown_icn ' onClick={() => setScho4(!scho4)}><IoMdArrowDropdown/></span>
              </div>

            </div>
            {scho4 &&
            <div className="type_lower">
              <p >TYC College prioritizes the well-being of teachers and their families by offering a special concession for their children's education. We understand the importance of providing high-quality education to the children of teachers working in both public sector and renowned private institutes. As a result, we extend this concession to ensure that their children can access excellent educational opportunities at TYC College. By offering this support, we aim to create a supportive environment for teachers and their families, fostering a strong educational community.</p>
            </div>}
          </div>
          <div className="type_scholorship">
            <div className="type_upper">
              <div className="type_icn">
                <span><TbHexagonNumber5 /></span>
              </div>
              <div className="type_heading">
                <span> : NEED BASED CONCESSION </span>
              </div>
              <div className="dropdown">
                <span className='dropdown_icn ' onClick={() => setScho5(!scho5)}><IoMdArrowDropdown/></span>
              </div>

            </div>
            {scho5 &&
            <div className="type_lower">
              <p >TYC College understands the financial challenges faced by many students and their families, acknowledging that not everyone can afford the fees. We are deeply concerned about the importance of education and are committed to addressing this need. To support students in need, we provide financial assistance in the form of concessions or even free education. These measures ensure that deserving students can access the education they deserve, regardless of their economic circumstances. At TYC College, we believe in providing equal opportunities for all students and are dedicated to making education accessible and affordable for everyone.</p>
            </div>}
          </div>
          <div className="type_scholorship">
            <div className="type_upper">
              <div className="type_icn">
                <span><TbHexagonNumber6 /></span>
              </div>
              <div className="type_heading">
                <span> : STUDENTS WITH SPECIAL NEEDS
                </span>
              </div>
              <div className="dropdown">
                <span className='dropdown_icn ' onClick={() => setScho6(!scho6)}><IoMdArrowDropdown/></span>
              </div>

            </div>
            {scho6 &&
            <div className="type_lower">
              <p >To motivate students with special needs for getting education and illuminating their minds with spark of hope, a special fee concession opportunity has been ensured for them.</p>
            </div>}
          </div>
          <div className="type_scholorship">
            <div className="type_upper">
              <div className="type_icn">
                <span><TbHexagonNumber7 /></span>
              </div>
              <div className="type_heading">
                <span> : SHUHDA’S CHILDREN </span>
              </div>
              <div className="dropdown">
                <span className='dropdown_icn ' onClick={() => setScho7(!scho7)}><IoMdArrowDropdown/></span>
              </div>
              

            </div>
            {scho7 &&
            <div className="type_lower">
              <p >TYC College places great importance on honoring the sacrifice of the brave men and women who have laid down their lives in service to our country as part of the armed forces and police. In recognition of their sacrifices, we extend special care to the children of these Shuhada. We provide a specific concession to ensure that these children can pursue their education at TYC College without facing any financial burden. It is our way of showing gratitude and support for the families of these national heroes. At TYC College, we strive to create an environment where the children of Shuhada can receive quality education and thrive academically without the added worry of financial constraints.</p>
            </div>}
          </div>
          <div className="type_scholorship">
            <div className="type_upper">
              <div className="type_icn">
                <span><TbHexagonNumber8 /></span>
              </div>
              <div className="type_heading">
                <span> : INCENTIVE POLICIES FOR MATRIC TOPPERS</span>
              </div>
              <div className="dropdown">
                <span className='dropdown_icn ' onClick={() => setScho8(!scho8)}><IoMdArrowDropdown/></span>
              </div>

            </div>
            {scho8 && 
            <div className="type_lower">
              <p >
                At TYC College, we believe in recognizing and celebrating academic excellence. As a testament to this commitment, we award students who secure top positions in the matriculation exams from all boards. Upon joining TYC College, these exceptional students are rewarded with exciting prizes, which can include brand new cars or cash prizes. We aim to inspire and motivate students to achieve their full potential by acknowledging their outstanding academic achievements. This prestigious recognition is a reflection of our dedication to nurturing talent and promoting a culture of excellence at TYC College.</p>
            </div>}

          </div>
          <div className="type_scholorship">
            <div className="type_upper">
              <div className="type_icn">
                <span><TbHexagonNumber9 /></span>
              </div>
              <div className="type_heading">
                <span> : INCENTIVE POLICIES FOR HIGH ACHIEVERS</span>
              </div>
              <div className="dropdown">
                <span className='dropdown_icn' onClick={() => setScho9(!scho9)}><IoMdArrowDropdown/></span>
              </div>

            </div>
            {scho9 &&
            <div className="type_lower">
              <p >At TYC College, we take great pride in celebrating the outstanding achievements of our students. We believe in acknowledging and honoring those who perform exceptionally well in their respective boards. As a testament to this commitment, we award the top position holders in the intermediate exams from all boards with prestigious rewards. These rewards can include brand new cars or cash prizes, serving as a token of our appreciation for their hard work, dedication, and remarkable academic accomplishments. We are dedicated to fostering a culture of excellence and providing meaningful recognition to our high-achieving students at TYC College.</p>
            </div>}
          </div>
        </div>
      </div>


      <div className="career">
        <div className="career_subheading">
          <h4>CHANGE YOUR LIFE</h4>
        </div>
        <hr className='career_hr' />
        <div className='career_heading'>
          <span>Start Your New Career With Us!</span>

        </div>
        <div className="career_btn">
          <Link to='/ApplyOnline'><button type="submit">REGISTER</button></Link>
        </div>
      </div>


      </>

  )
}
