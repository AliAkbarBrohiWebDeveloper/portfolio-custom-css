import React from 'react'
import "@/styles/projects.css"
import Image from 'next/image'


const projects=[{

    src:"/amazon.png",
    desc:"Amazon Clone",
    languages:["HTML ,","CSS"]
    
    
    
    
    },
    {
    
    
      src:"/food.png",
    desc:"Food Website Clone",
    languages:["HTML ,","CSS"]
    
    
    
    },
    
    
    {
      src:"/currency.png",
      desc:"Currency Converter",
      languages:["HTML ," ,"CSS ," ,"Java Script"]
      
    
    
    },
    {
    src:"/cal1.png",
    desc:"Calcultar",
    languages:["HTML ,","CSS ,","java script"]

    }
    ]
const Poject = () => {
  return (
    <section className='top-section'>

<div className='projects-section'>

<h3>My Projects</h3>

</div>
<div className='projects-images'>
{
    projects.map((item,index)=>(

<div key={index} data-aos="zoom-in">


<Image src={item.src} alt='projects-images' height={200} width={300}/>
<h3>{item.desc}</h3>
<br />
<span className='span'>{item.languages}</span>





</div>



    ))
}


</div>

    </section>
  )
}

export default Poject