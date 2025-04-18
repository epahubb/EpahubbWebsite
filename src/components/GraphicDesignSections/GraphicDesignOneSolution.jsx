import { assets } from "../../assets/assets"
import { useGlobalContext } from "../../Context"

const GraphicDesignOneSolution = () => {
  const { selectedColor, openProjectModal } = useGlobalContext()

  return (
    <article className='bg-[#F6F6FA] text-black dark:bg-black dark:text-white py-[3rem] md:pb-[5rem] px-[3%] lg:px-[6%] 2xl:px-[10%] sm:py-[4rem] font-jakarta'>
      <div className='flex flex-col md:flex-row md:gap-4 items-center xl:gap-8'>
        <div className=' w-full md:w-1/2'>
          <h4 className='font-jakarta text-[13px] font-semibold'>
            ONE-STOP SOLUTION
          </h4>
          <h1 className='font-jakarta mt-[1rem] text-[21px] font-semibold md:text-[28px] lg:text-[30px] 2xl:text-[35px]'>
            Get Started with Epahubb Today!
          </h1>
          <p className='font-rubik mt-[1rem] 2xl:mt-[2rem] text-[15px] xl:text-[17px] 2xl:text-[18px] text-[#071135] dark:text-darkText opacity-75'>
            Epahubb is a tech firm offering innovative solutions and expert
            consulting to shape the future of technology.
          </p>
          <div className='group-hover:block'>
            <button
              className='text-white text-[13px] sm:text-[15px] 2xl:text-[17px] hover:!bg-blue-700 transition mt-4 px-7 py-2 sm:px-10 sm:py-[10px] rounded-[3px]'
              style={{ backgroundColor: selectedColor }}
              onClick={openProjectModal}
            >
              Get Start
            </button>
          </div>
        </div>
        <div className='mt-16 md:mt-0 w-full md:w-1/2'>
        <img src={assets.epahubb_grahpic_design_one_solution_img} className="w-full" alt="" />
        </div>
      </div>
    </article>
  )
}
export default GraphicDesignOneSolution
