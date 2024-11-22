
import Hero from '@/components/Hero'
import Project from "@/components/Poject"
import Aboutpage from './About/page'
import Contactpage from './Contact/page'
import Skills from '@/components/skills'

const page = () => {
  return (
    <main>
      <Hero/>
      <Project/>
      <Skills/>
      <Aboutpage/>
      <Contactpage/>

    </main>
    
  )
}

export default page