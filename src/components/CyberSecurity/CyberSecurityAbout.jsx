import { useEffect } from "react"
import { CyberSecurityHeader, CyberSecurityHero } from "./index"
import { useGlobalContext } from "../../Context"

const CyberSecurityAbout = () => {
  const { handleScroll } = useGlobalContext()

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])
  
  return (
    <section>
      <CyberSecurityHeader
      />
      <CyberSecurityHero />
    </section>
  )
}
export default CyberSecurityAbout
