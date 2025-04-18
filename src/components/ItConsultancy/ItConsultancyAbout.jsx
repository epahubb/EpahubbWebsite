import { useEffect } from "react"
import { ItConsultancyHeader, ItConsultancyHero } from "./index.js"
import { useGlobalContext } from "../../Context.js"

const ItConsultancyAbout = () => {
  const { handleScroll } = useGlobalContext()

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <section className='w-full relative'>
      <ItConsultancyHeader/>
      <ItConsultancyHero />
    </section>
  )
}
export default ItConsultancyAbout
