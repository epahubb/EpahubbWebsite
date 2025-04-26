import { ItConsultancyAbout, EveryThingInPlace,ItCompliance,ResourcePlanning,Productivity,GetStarted } from "./ItConsultancy"
import CreateProject from "../components/CreateProjectModal"
import GeneralFooter from "./GeneralFooter"

const ItConsultancyLayout = () => {
  return (
    <section>
      <ItConsultancyAbout />
      <article className='bg-white dark:bg-primaryDark dark:text-white'>
        <EveryThingInPlace />
        <ItCompliance />
        <ResourcePlanning />
        <Productivity />
        <GetStarted />
        <CreateProject />
        <GeneralFooter showRating={false} />
      </article>
    </section>
  )
}
export default ItConsultancyLayout
