"use client"
import { useState } from 'react'
import React from 'react'
import "@/styles/header.css"
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
const [isMenuOpen,setIsMenuOpen]=useState(false) ;

const toggleMenu=()=>{
  setIsMenuOpen(!isMenuOpen)
}

  return (
    <header className='header'>

<main className='main-dev'>

<div className='second-dev'>

<h1>Ali Akbar Brohi</h1>


</div>

<nav>
    <ul>
<li className='ul-list1'>

<Link href={'/'}>Home</Link>


<Link href={"/About"}>About</Link>



<Link href={'/Contact'}> Contact us</Link>

</li>

    </ul>
    <div className='navbar-menu-icon' onClick={toggleMenu}>
      {isMenuOpen ? <AiOutlineClose size={30}/>: <AiOutlineMenu size={30}/>}


    </div>
    
</nav>

{isMenuOpen&&(
 <ul>
 <li className={`ul-list    ${isMenuOpen ? "open" : ""}`}>
 
 <Link href={'/'} onClick={toggleMenu}>HOME</Link>
 
 
 <Link href={"/About"} onClick={toggleMenu}>ABOUT</Link>
 
 
 
 <Link href={'/Contact'} onClick={toggleMenu}>CONTACT</Link>
 
 </li>
 
     </ul>  

)}

</main>


    </header>
  )
}

export default Header