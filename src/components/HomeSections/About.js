import { useEffect } from "react"
import Header from "../Header"
import { Hero } from "./index"
import { useGlobalContext } from "../../Context"

const About = () => {
  const { handleScroll} = useGlobalContext()
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <article className='w-full bg-primaryBackground relative'>
      <Header/>
      <Hero />
    </article>
  )
}
export default About
