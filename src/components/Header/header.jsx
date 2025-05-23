import React, { useState } from 'react'
import './header.scss'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'

const Header = () => {

   const[active,setActive] = useState('navBar');
   const showNav=()=>{
    setActive('navBar activeNavbar')
   } 

   const removeNavbar=()=>{
    setActive('navBar')
   } 

   
  return (
    <section className='navBarSection'>
      <header className="header flex">
         <div className="logoDiv">
            <a href="#!" onClick={(e) => e.preventDefault()} className="logo flex">
                <h1>
                    <MdOutlineTravelExplore className='icon' /> JETSKI
                </h1>
            </a>
         </div>
          
         <div className={active}>
            <ul className="navLists flex">
                <li className="navItem">
                    <a href="#!" onClick={(e) => e.preventDefault()} className="navLink">Home</a>
                </li>
                <li className="navItem">
                    <a href="#!" onClick={(e) => e.preventDefault()} className="navLink">Packages</a>
                </li>
                <li className="navItem">
                    <a href="#!" onClick={(e) => e.preventDefault()} className="navLink">Shop</a>
                </li>
                <li className="navItem">
                    <a href="#!" onClick={(e) => e.preventDefault()} className="navLink">About</a>
                </li>
                <li className="navItem">
                    <a href="#!" onClick={(e) => e.preventDefault()} className="navLink">Pages</a>
                </li>
                <li className="navItem">
                    <a href="#!" onClick={(e) => e.preventDefault()} className="navLink">News</a>
                </li>
                <li className="navItem">
                    <a href="#!" onClick={(e) => e.preventDefault()} className="navLink">Contact</a>
                </li>
                <button className='btn'>
                    <a href="#!" onClick={(e) => e.preventDefault()}>BOOK NOW</a>
                </button>
            </ul>
            <div onClick={removeNavbar} className="closeNavBar">
                <AiFillCloseCircle className='icon' />
            </div>
         </div> 

         <div onClick={showNav} className="toggleNavBar">
            <TbGridDots className='icon' />
         </div>

      </header>
    </section>
  )
}

export default Header