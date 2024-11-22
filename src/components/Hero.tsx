import React from 'react'
import "@/styles/heo.css"
import Image from 'next/image'
import profile1 from "/public/profile1.png"

const Hero = () => {

    
    const header="I am Ali Akbar Brohi \n Front-end Developer"
  return (

<section className='section'>
<main className='main-dev'data-aos="zoom-in-down">

<div className='second-dev'>

<h1>{header}</h1>

<p>As a frontend web developer, I focus on crafting intuitive and visually appealing user interfaces that elevate digital experiences. I leverage my expertise in HTML, CSS, and JavaScript to bring designs to life, ensuring that websites are both functional and responsive across all devices.</p>
<button>View My Work</button>
</div>
<div>
    <Image src={profile1} alt='profile=picture' height={400} width={400} className='img-dev'/>
</div>

</main>

</section>
  )
}

export default Hero