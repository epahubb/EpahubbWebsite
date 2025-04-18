import { useEffect } from "react"
import { useGlobalContext } from "../../Context"
import { SoftwareHeader, SoftwareHero } from "./index"
const SoftwareAbout = () => {
  const { handleScroll } = useGlobalContext()

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <section>
      <SoftwareHeader />
      <SoftwareHero />
    </section>
  )
}
export default SoftwareAbout
