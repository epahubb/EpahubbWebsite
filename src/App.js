import { Route, Routes } from "react-router-dom"
import { HomePage, ErrorPage } from "./pages"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 0,
    })
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  )
}
export default App
