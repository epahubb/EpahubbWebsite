import { assets } from "../../assets/assets"

const GraphicDesignConnections = () => {
  return (
    <article className='py-[3rem] font-jakarta'>
      <div className='w-full h-[1px] bg-gray-100 dark:bg-gray-700' />
      <h2 className='text-center font-semibold text-[18px] mt-2'>
        Connected to Many
      </h2>
      <div className='mt-10 grid grid-cols-1 sm:px-[5rem] md:px-[5rem] sm:grid-cols-4 lg:px-[10rem] justify-items-center xl:px-[20rem] 2xl:px-[25rem] 2xl:gap-2'>
        <img
          src={assets.epahubb_graphic_alsina_img}
          className='w-[7rem] sm:w-[6rem] md:w-[8rem] mb-4 xl:mb-0 2xl:w-[10rem]'
          alt='alsana'
        />
        <img
          src={assets.epahubb_graphic_design_david_img}
          className='w-[7rem] sm:w-[6rem] md:w-[8rem] mb-4 xl:mb-0 2xl:w-[10rem]'
          alt='david camera'
        />
        <img
          src={assets.epahubb_graphic_design_camera}
          className='w-[7rem] sm:w-[6rem] md:w-[8rem] mb-4 xl:mb-0 2xl:w-[10rem]'
          alt='camera'
        />
        <img
          src={assets.epahubb_graphic_design_odako_img}
          className='w-[7rem] sm:w-[6rem] md:w-[8rem] mb-4 xl:mb-0 2xl:w-[10rem]'
          alt='odako design'
        />
      </div>
      <div className='w-full h-[1px] bg-gray-100 dark:bg-gray-700' />
    </article>
  )
}
export default GraphicDesignConnections