import React, { useEffect } from 'react'
import footerVideo from '../../assets/freeusable1.mp4'
import { FiChevronRight, FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import './footer.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {

  useEffect(()=>{
  Aos.init({duration:2000})
},[]);
   
  return (
    <section className='footer'>
       <div className='videoDiv'>
         <video src={footerVideo} loop autoPlay muted type="video/mp4">
         </video>
       </div>

       <div className="secContent container">
           <div className='contactDiv flex'>
               <div data-aos="fade-up" className='text'>
                 <small>KEEP IN TOUCH</small>
                 <h2>Ride with US</h2>
               </div>

               <div className="inputDiv flex">
                  <input data-aos="fade-up" type="text" placeholder='Enter Email' />
                  <button data-aos="fade-up" className='btn flex' type='submit'>
                       Send <FiSend className='icon' />
                  </button>
               </div>
           </div>

           <div className="footerCard flex">
                <div className="footerIntro flex">
                   <div className="logoDiv">
                       <a href='#' className='logo flex'>
                          <MdOutlineTravelExplore className='icon' />
                          JetSki
                       </a>
                   </div>

                   <div data-aos="fade-up" className="footerParagraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, facere. Illo laboriosam similique saepe praesentium error molestias fugiat reiciendis qui.
                   </div>

                   <div data-aos="fade-up" className="footerSocials flex">
                      <AiOutlineTwitter />
                      <AiFillYoutube />
                      <AiFillInstagram />
                      <FaTripadvisor />
                   </div>
                </div>
             
                <div className='footerLinks grid'>
                     {/* Group One */}
                   <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                    <span className="groupTitle">
                      Our Connection
                    </span>

                    <li className="footerList flex">
                       Services <FiChevronRight />
                    </li>

                    <li className="footerList flex">
                       Insurance <FiChevronRight />
                    </li>

                    <li className="footerList flex">
                       Community <FiChevronRight />
                    </li>
                    <li className="footerList flex">
                       Travel and Tourism <FiChevronRight />
                    </li>
                    <li className="footerList flex">
                       Payment <FiChevronRight />
                    </li>
                   </div>

                   {/* Group Two */}
                   <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                    <span className="groupTitle">
                      Our Partner
                    </span>

                    <li className="footerList flex">
                       Booking <FiChevronRight />
                    </li>

                    <li className="footerList flex">
                       RentCars <FiChevronRight />
                    </li>

                    <li className="footerList flex">
                       HosteWorld <FiChevronRight />
                    </li>
                    <li className="footerList flex">
                       Trivago <FiChevronRight />
                    </li>
                    <li className="footerList flex">
                       Trip Adviser <FiChevronRight />
                    </li>
                   </div>

                   {/* Group Three */}
                   <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                    <span className="groupTitle">
                      Last MINUTE
                    </span>

                    <li className="footerList flex">
                       Malta <FiChevronRight />
                    </li>

                    <li className="footerList flex">
                       Luxamberg <FiChevronRight />
                    </li>

                    <li className="footerList flex">
                       Oman <FiChevronRight />
                    </li>
                    <li className="footerList flex">
                       Europe <FiChevronRight />
                    </li>
                    <li className="footerList flex">
                       Canada <FiChevronRight />
                    </li>
                   </div>
                </div>
                
                <div className="footerDiv flex">
                  <small>BEST TRAVEL WEBSITE</small>
                  <small>COPYRIGHTS ALL RIGHT RESERVED - GARUD INTERNATIONAL 2025</small>
                </div>

           </div>
       </div>
    </section>
  )
}

export default Footer