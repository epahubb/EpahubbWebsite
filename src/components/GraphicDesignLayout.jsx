import CreateProjectModal from "./CreateProjectModal"
import GeneralFooter from "./GeneralFooter"
import {
  GraphicDesignAbout,
  GraphicDesignHead,
  GraphicDesignMission,
  GraphicDesignRevenue,
  GraphicDesignConnections,
  GraphicDesignOneSolution
} from "./GraphicDesignSections/index"

const GraphicDesignLayout = () => {
  return (
    <section className='bg-white dark:bg-primaryDark dark:text-white'>
      <GraphicDesignAbout />
      <GraphicDesignMission />
      <GraphicDesignHead />
      <GraphicDesignRevenue />
      <GraphicDesignConnections />
      <GraphicDesignOneSolution />
      <CreateProjectModal />
      <GeneralFooter />
    </section>
  )
}
export default GraphicDesignLayout
