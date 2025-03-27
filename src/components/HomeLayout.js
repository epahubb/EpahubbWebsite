import { useGlobalContext } from "../Context"
import CreateProjectModal from "./CreateProjectModal"
import Footer from "./Footer"
import {
  About,
  // Audience,
  Features,
  HowItWorks,
  Integration,
  Testimonials,
  WhyEpahubb,
} from "./HomeSections"
import ContactUs from "./HomeSections/ContactUs"
import Faqs from "./HomeSections/Faqs"
import TrustedClients from "./HomeSections/TrustedClients"
import ModalComponent from "./ModalComponent"

const HomeLayout = () => {
  const { darkMode } = useGlobalContext()
  return (
    <section className={`${darkMode && "dark"}`}>
      <About darkMode={darkMode} />
      <Features />
      <WhyEpahubb />
      {/* <Audience /> */}
      <Integration />
      <TrustedClients />
      <HowItWorks />
      <Testimonials />
      <Faqs />
      <ContactUs />
      <ModalComponent />
      <CreateProjectModal />
      <Footer />
    </section>
  )
}
export default HomeLayout
