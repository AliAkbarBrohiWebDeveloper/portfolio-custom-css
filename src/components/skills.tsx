import React from 'react'
import '@/styles/skills.css'
import Image from 'next/image'


const SkillsSection=[

    {
    img:"/html.png",
    desc:"HTMl",
    percentage:"90%"
    
    },
    {
    img:"/css.png",
    desc:"CSS",
    percentage:"75%"
    
    },
    
    {
      img:"/type.png",
      desc:"Type Script",
      percentage:"90%"
      
      },
      {
        img:"/java.png",
        desc:"Java Script",
        percentage:"70%"
        
        },
        {
          img:"/react.png",
          desc:"React",
          percentage:"65%"
          
          },
          {
            img:"/next.png",
            desc:"Next js",
            percentage:"75%"
            
            },
            
          
      
    
    ]
    
    
    

const Skills = () => {
  return (
    <main className='skills-main-dev'>
<div>
    <h5 className='skills-dev'>Skills</h5>
</div>
<div className='image-main-dev' data-aos="zoom-in">
    {
        SkillsSection.map((products,index)=>( <div key={index} className='image-second-dev'>

            <Image src={products.img} alt='html-logo' height={200} width={200}/>

<h5 className='desc-sec'>{products.desc}</h5>
<p className='para-sec'>{products.percentage}</p>

            </div>))
    }

    
</div>

    </main>
  )
}

export default Skills