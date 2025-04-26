import CreateProjectModal from './CreateProjectModal'
import GeneralFooter from './GeneralFooter'
import { EveryThingInPlace, GetStarted} from './ItConsultancy'
import {HallMark, SoftwareAbout, SoftwareDevelopment, WebApplications} from './Software'

const SoftwareLayout = () => {
  return (
    <section>
      <article className='bg-white dark:bg-primaryDark dark:text-white'>
      <SoftwareAbout />
        <EveryThingInPlace />
        <HallMark />
        <WebApplications />
        <SoftwareDevelopment />
        <GetStarted />
        <CreateProjectModal />
        <GeneralFooter showRating={false} />
      </article>
    </section>
  )
}
export default SoftwareLayout