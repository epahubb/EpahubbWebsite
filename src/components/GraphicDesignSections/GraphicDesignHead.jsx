import { assets } from "../../assets/assets"
import { useGlobalContext } from "../../Context"

const GraphicDesignHead = () => {
    const { selectedColor } = useGlobalContext()
  return (
    <article className='py-[3rem] bg-[#F3F1FC] text-black dark:bg-primaryDark dark:text-white px-[3%] lg:px-[6%] 2xl:px-[10%] font-jakarta'>
      <div className='flex flex-col gap-y-6 md:gap-y-0 md:flex-row md:items-center md:gap-6 justify-between'>
        <div className='md:w-1/2'>
          <h2 className='text-xs lg:text-[15px] xl:text-[15px] uppercase text-gray-500 dark:text-darkText font-rubik'>
            Graphics design head
          </h2>
          <h1 className='mt-4 lg:mt-7 font-bold text-xl lg:text-[32px] xl:text-[35px] 2xl:text-[40px]'>
            Benedict Obeng-Darko
          </h1>
          <p className='text-gray-500 text-[13px] lg:text-[14px] mt-4 lg:mt-7 xl:text-[15.5px] xl:leading-[25px] 2xl:leading-[30px] dark:text-darkText'>
            At Epahubb Consult, we believe great design is more than
            visuals—it’s about storytelling, engagement, and impact. Our team is
            committed to delivering creative, high-quality, and strategic
            graphic design solutions that enhance brand identity and captivate
            audiences. Let’s collaborate to bring your vision to life with
            innovation and excellence
          </p>
          <div className='mt-5 group-hover:block'>
            <button
              className='text-white text-[13px] p-2 px-4 rounded-[4px] transition hover:!bg-blue-700'
              style={{ backgroundColor: selectedColor }}
            >
              Start Now
            </button>
          </div>
        </div>
        <div className='md:w-1/2 relative'>
          <img
            src={assets.epahubb_graphic_design_head_img}
            className='w-full'
            alt='head of graphic design'
          />
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <img src={assets.epahubb_graphic_play_button} className="w-14 h-14 cursor-pointer sm:w-20 sm:h-20 md:w-14 md:h-14 lg:w-20 lg:h-20 2xl:w-24 2xl:h-24" alt='play button' />
          </div>
        </div>
      </div>
    </article>
  )
}
export default GraphicDesignHead