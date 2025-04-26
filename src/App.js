import { Route, Routes } from "react-router-dom"
import {
  HomePage,
  ErrorPage,
  Software,
  ItConsultancy,
  GraphicDesign,
  CyberSecurity,
} from "./pages"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { useGlobalContext } from "./Context"

const App = () => {
  const {darkMode} = useGlobalContext()
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 0,
    })
  }, [])

  return (
    <section className={`${darkMode && "dark"} dark:bg-primaryDark dark:text-white`}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/software' element={<Software />} />
        <Route path='/cyber-security' element={<CyberSecurity />} />
        <Route path='/graphic-design' element={<GraphicDesign />} />
        <Route path='/it-consult' element={<ItConsultancy />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </section>
  )
}
export default App
