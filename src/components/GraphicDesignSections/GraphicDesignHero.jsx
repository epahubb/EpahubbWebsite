import { assets } from "../../assets/assets"

const GraphicDesignHero = () => {
  return (
    <article
      id='about-us'
      className='py-[2rem] mt-[8vh] px-[3%] relative z-0 bg-white dark:bg-primaryDark font-jakarta'
    >
      <div className='lg:px-[6%] 2xl:px-[10%]'>
        <h2 className='font-bold text-center lg:text-start text-[26px] dark:text-darkHeading leading-[34px] md:text-[33px] lg:text-[40px] font-jakarta lg:w-[70%] lg:leading-[45px] xl:text-[50px] xl:leading-[60px] xl:w-[60%]'>
          We provide solutions for your creative ideas
        </h2>
        <p className='dark:text-darkHeading text-center lg:text-start text-[0.83rem] md:text-[0.9rem] text-gray-500 font-medium mt-4 lg:text-[1rem] xl:w-[75%] 2xl:text-[1.1rem] 2xl:leading-[2rem] leading-[1.7rem]'>
          Epahubb Consult offers creative and professional graphic design
          solutions tailored to elevate your brand. From logos to social media
          graphics and full brand identities, we craft high-quality visuals that
          leave a lasting impression. Our designs blend originality, strategy,
          and attention to detail, ensuring your brand stands out and
          communicates effectively.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 mt-4 md:mt-5 lg:mt-6 md:gap-2 xl:gap-8 2xl:px-4'>
        <div>
          <img src={assets.epahubb_graphic_camera_img} className="w-full h-[33vh] sm:h-[50vh] md:h-auto" alt='' />
          <div className='mt-4'>
            <img src={assets.epahubb_graphic_design_img} className="w-full h-[33vh] sm:h-[50vh] rounded-lg md:rounded-none md:h-auto" alt='' />
          </div>
        </div>
        <div className='mt-4 md:mt-0'>
          <div>
            <img src={assets.epahubb_graphic_animated_img} className="w-full h-[33vh] sm:h-[50vh] md:h-auto rounded-lg md:rounded-none" alt='' />
          </div>
          <div className='grid md:grid-cols-2 mt-5 md:gap-2'>
            <div>
              <img src={assets.epahubb_graphic_background_img} className="w-full h-[33vh] sm:h-[50vh] md:h-auto" alt='' />
            </div>
            <div className="mt-5 md:mt-0">
              <img src={assets.epahubb_graphic_uiux_img} className="w-full h-[33vh] sm:h-[50vh] md:h-auto rounded-lg md:rounded-none" alt='' />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
export default GraphicDesignHero
