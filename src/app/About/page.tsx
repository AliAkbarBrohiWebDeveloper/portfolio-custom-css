import React from 'react'
import "@/styles/About.css"
import Image from 'next/image'
import Aboutimg from "/public/About.jpg"

const Aboutpage = () => {
  return (
<section className='top-section'>

<main className='main1-dev' data-aos="fade-left">

<div className='second-dev'>

<h3> About Me</h3>
<p>As a frontend web developer I specialize in creating engaging and user-friendly interfaces that enhance the overall web experience. With a keen eye for design and a strong grasp of HTML CSS and JavaScript I transform creative concepts into functional websites. I am passionate about staying updated with the latest industry trends and technologies. ensuring that my projects are not only visually appealing but also optimized for performance and accessibility. Collaborating with designers and backend developers I strive to deliver seamless and dynamic web applications that meet users needs.</p>
<button>Hire Me</button>


</div>
<div className='last-dev-img'>
<Image src={Aboutimg} alt='About-section-img' height={500} width={500}/>


</div>

</main>


</section>
  )
}

export default Aboutpage