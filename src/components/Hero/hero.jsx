import React,{useEffect} from 'react'
import heroVideo from '../../assets/freeUsable0.mp4'
import './hero.scss'
import { GrLocation } from 'react-icons/gr'
import { HiFilter } from 'react-icons/hi'
import { FiFacebook } from 'react-icons/fi'
import { BsListTask } from 'react-icons/bs'
import { TbApps } from 'react-icons/tb'
import { AiOutlineInstagram } from 'react-icons/ai'
import { SiTripadvisor } from 'react-icons/si'

import Aos from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
//react hook to add a scroll animation...
useEffect(()=>{
  Aos.init({duration:2000})
},[]);


  return (
    <section className='home'>
       <div className='overlay'></div>
       <video src={heroVideo} muted autoPlay loop type="video/mp4"></video>
       <div className='homeContent container'>
           <div className='textDiv'>
              <span data-aos="fade-up" className='smallText'> Our Packages</span>
              <h1 data-aos="fade-up" className='homeTitle'>
                 Search your location and jetski...
              </h1>
           </div>

           <div data-aos="fade-up" className='cardDiv grid'>
            <div className='destinationInput'>
              <label htmlFor="city">Search Your Beach</label>
              <div className='input flex'>
                  <input type="text" placeholder='Enter name here' />
                  <GrLocation className='icon' color="black" />
              </div>
            </div>
            <div className='dateInput'>
              <label htmlFor="date">Search Your Beach</label>
              <div className='input flex'>
                  <input type="date"/>
                  {/* <GrLocation className='icon' /> */}
              </div>
            </div>
            <div className='priceInput'>
              <div className='label_total flex'>
                <label htmlFor="price">Max Price:</label>
                <h3 className='total'>AED 900</h3>
              </div>
              <div className='input flex'>
                <input type="range" max="" min="1000" />
              </div>
            </div>

            <div className='searchOptions flex'>
              <HiFilter className='icon' />
              <span>MORE FILTERS</span>
            </div>
           </div>

            <div data-aos="fade-up" className='homeFooterIcons flex'>
                <div className='rightIcons'>
                    <FiFacebook className='icon' />
                    <AiOutlineInstagram className='icon' />
                    <SiTripadvisor className='icon' />

                </div>
                <div className='leftIcons'>
                    <BsListTask className='icon' />
                    <TbApps className='icon' />
                </div>

            </div>

       </div>
    </section>
  )
}

export default Hero