import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import menuIcon from '../../assets/menu-icon.png'


const Navbar = () => {

  const [sticky, setSticky] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[])

  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu =()=>{
    openMenu ? setOpenMenu(false) : setOpenMenu(true);
  }


  return (
    <nav className={`container ${sticky? 'dark-nav':''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul className={openMenu?"":'hide-menu'}>
            <li> <Link to='hero' smooth={true} offset={0} duration={600} >Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={600} >Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={600} >About Us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={600} >Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={600} >Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={600} ><button className='btn'>Contact Us</button></Link></li>
        </ul>
        <img src={menuIcon} alt="" className='menu' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
