import React, { useEffect } from 'react'
import './main.scss';

import img from '../../assets/images/pjumeira.jpg';
import img1 from '../../assets/images/dubai-marine-beach-resort.jpg';
import img2 from '../../assets/images/pjumeira.jpg';
import img3 from '../../assets/images/GoldShorline.jpg';
import img4 from '../../assets/images/royalAtlantis.jpg';
import img5 from '../../assets/images/jetskii8.jpg';
import img6 from '../../assets/images/jetskii6.jpg';
import img7 from '../../assets/images/jetskii7.jpg';
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi';
import Aos from 'aos';
import 'aos/dist/aos.css';

const destinations = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Gold Shoreline Tour',
    location: 'Dubai - Jumeirah Beach',
    grade: 'Waterfun with Relax',
    fees: 'AED 750',
    duration: '2 hours',
    description: 'Experience thrilling jet ski rides along Jumeirah Beach with golden skyline views and refreshing sea breeze for ultimate excitement.'
  },
  {
    id: 2,
    imgSrc: img1,
    destTitle: 'Marina Jet Rush',
    location: 'Dubai - Dubai Marina',
    grade: 'High-Speed Action',
    fees: 'AED 850',
    duration: '1.5 hours',
    description: 'Jet across the crystal-clear waters of Dubai Marina, exploring iconic landmarks and feeling the adrenaline with every wave.'
  },
  {
    id: 3,
    imgSrc: img2,
    destTitle: 'Palm Island Circuit',
    location: 'Dubai - Palm Jumeirah',
    grade: 'Scenic Explorer',
    fees: 'AED 900',
    duration: '2 hours',
    description: 'Circle the iconic Palm Jumeirah on a jet ski, catching views of Atlantis and Burj Al Arab along the route.'
  },
  {
    id: 4,
    imgSrc: img3,
    destTitle: 'Sunset Wave Tour',
    location: 'Dubai - Kite Beach',
    grade: 'Romantic Adventure',
    fees: 'AED 700',
    duration: '1 hour',
    description: 'Ride the waves as the sun sets at Kite Beach, offering breathtaking views and a calm yet exciting water experience.'
  },
  {
    id: 5,
    imgSrc: img4,
    destTitle: 'Atlantis Water Loop',
    location: 'Dubai - Palm Jumeirah',
    grade: 'Family Friendly',
    fees: 'AED 800',
    duration: '1.5 hours',
    description: 'A fun-filled loop around Atlantis, The Palm, perfect for families looking for a safe, scenic, and splashy adventure.'
  },
  {
    id: 6,
    imgSrc: img5,
    destTitle: 'Luxury Skyline Ride',
    location: 'Dubai - JBR Beach',
    grade: 'Luxury Experience',
    fees: 'AED 1000',
    duration: '2 hours',
    description: 'Cruise past skyscrapers and beaches at JBR, combining luxury and speed for an unforgettable jet ski tour.'
  },
  {
    id: 7,
    imgSrc: img6,
    destTitle: 'Burj Al Arab Dash',
    location: 'Dubai - Umm Suqeim Beach',
    grade: 'Thrill Seeker',
    fees: 'AED 950',
    duration: '1 hour',
    description: 'Dash across turquoise waters toward the Burj Al Arab, feeling the rush and soaking in spectacular beachfront views.'
  },
  {
    id: 8,
    imgSrc: img7,
    destTitle: 'Coastal Explorer Ride',
    location: 'Dubai - Sunset Beach',
    grade: 'Explorer Vibes',
    fees: 'AED 720',
    duration: '1.5 hours',
    description: 'Explore Dubai’s western coast with a fun ride across Sunset Beach, enjoying clear waters and dramatic city backdrops.'
  },
  // {
  //   id: 9,
  //   imgSrc: img,
  //   destTitle: 'Island Sprint Adventure',
  //   location: 'Dubai - The World Islands',
  //   grade: 'Extreme Sports',
  //   fees: 'AED 1100',
  //   duration: '2.5 hours',
  //   description: 'Sprint between The World Islands with high-speed thrills, island views, and the open ocean as your playground.'
  // }
];



const Main = () => {

  useEffect(()=>{
  Aos.init({duration:2000})
},[]);


  return (
    <section className='main container section'>
      <div className='secTitle'>
        <h3 data-aos="fade-right" className='title'>Most Popular Beaches</h3>
      </div>

      <div className='secContent grid'>

        {
          destinations.map(({id,imgSrc,destTitle,location,grade,fees,description })=>
            <div key={id} data-aos="fade-up" className='singleDestination'>

            <div className='imageDiv'>
               <img src={imgSrc} alt={destTitle} />
            </div>

            <div className='cardInfo'>
              <h4 className='destTitle'>{destTitle}</h4>
              <span className='continent flex'>
                <HiOutlineLocationMarker className='icon' />
                <span className='name'>{location}</span>
              </span>
              
              <div className='fees flex'>
                <div className='grade'>
                  <span>{grade}<small>+1</small></span>
                </div>
                <div className='price'>
                   <h5>{fees}</h5>
                </div>
              </div>

              <div className='desc'>
                 <p>{description}</p>
              </div>
               
               <button className='btn flex'>
                 See More <HiOutlineClipboardCheck className='icons' />
               </button>

            </div>

            </div>
          )
        }

      </div>
    </section>
  )
}

export default Main