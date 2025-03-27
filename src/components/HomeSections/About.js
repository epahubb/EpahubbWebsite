import { useEffect, useState } from "react"
import Header from "../Header"
import { Hero } from "./index"

const About = () => {
  const [isSticky, setIsSticky] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 40) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }
  }

  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <article className='w-full bg-primaryBackground relative'>
      <Header isSticky={isSticky} />
      <Hero />
    </article>
  )
}
export default About
