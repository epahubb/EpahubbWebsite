import { assets } from "../../assets/assets"

const SoftwareHero = () => {
  return (
    <article
      id='about-us'
      className='relative py-[2rem] pb-[3rem] h-auto md:h-[33rem] lg:h-[37rem] xl:h-[42rem] 2xl:h-[45rem] mt-[8vh] lg:mt-[9vh] xl:mt-[10vh] pl-[3%] md:pl-[4%] md:pr-0 lg:pl-[6%] lg:pr-0 xl:pl-[12%] xl:pr-0 2xl:pl-[14%] 2xl:pr-0 bg-itHeroBackground dark:bg-itHeroBackground rounded-b-[2.4rem] sm:rounded-b-[4rem]'
    >
      <div className='flex flex-col-reverse items-center md:flex-row gap-y-[2.5rem] gap-x-[2rem]'>
        {/* first column */}
        {/* section column */}
        <div className='md:w-[80%] lg:w-[70%] xl:w-[55%] 2xl:w-[60%] pr-2 md:pr-0'>
          {/* first one */}
          <div className='flex flex-row gap-x-[.8rem] group'>
            <div className='flex items-center justify-center flex-col gap-y-[1rem] md:gap-y-[.5rem] xl:gap-y-[1rem]'>
              <h1
                className={`w-[2.5rem] h-[2.5rem] xl:w-[3rem] xl:h-[3rem] flex items-center justify-center rounded-full bg-[#BE6CBE] font-bold text-white text-[20px] border-2 border-transparent transition-all duration-500 ease-in-out group-hover:bg-transparent group-hover:border-[2.5px] group-hover:border-[#BE6CBE] group-hover:text-[#BE6CBE] group-hover:scale-110`}
              >
                1
              </h1>
              <div className='w-[.13rem] h-[4rem] md:h-[3rem] bg-gray-300 xl:h-[5rem] 2xl:w-[.125rem] 2xl:h-[5.5rem]'></div>
            </div>
            <div>
              <h2 className='text-lightHeading font-semibold text-[19px] md:text-[17px] xl:text-[22px] 2xl:text-[25px]'>
                Website and Web Application Developments
              </h2>
              <p className='font-rubik mt-[1rem] text-lightText text-[14px] xl:text-[17px] 2xl:w-[70%] 2xl:text-[18.8px]'>
                Epahubb creates responsive, secure, and SEO-optimized websites,
                including e-commerce, CMS, and custom web applications.
              </p>
            </div>
          </div>
          {/* first end */}
          {/* second */}
          <div className='flex flex-row gap-x-[.8rem] mt-[1rem] xl:mt-[1.5rem] group'>
            <div className='flex items-center justify-center flex-col gap-y-[1rem] md:gap-y-[.5rem] xl:gap-y-[1rem]'>
              <h1 className='w-[2.5rem] h-[2.5rem] xl:w-[3rem] xl:h-[3rem] flex items-center justify-center rounded-full bg-[#BE6CBE] font-bold text-white text-[20px] border-2 border-transparent transition-all duration-500 ease-in-out group-hover:bg-transparent group-hover:border-[2.5px] group-hover:border-[#BE6CBE] group-hover:text-[#BE6CBE] group-hover:scale-110'>
                2
              </h1>
              <div className='w-[.13rem] h-[4rem] md:h-[3rem] bg-gray-300 xl:h-[5rem] 2xl:w-[.125rem] 2xl:h-[5.5rem]'></div>
            </div>
            <div>
              <h2 className=' text-lightHeading font-semibold text-[19px] md:text-[17px] xl:text-[22px] 2xl:text-[25px]'>
                Software Development
              </h2>
              <p className='font-rubik mt-[1rem] text-lightText text-[14px] xl:text-[17px] 2xl:w-[70%] 2xl:text-[18.8px]'>
                Epahubb develops custom, secure, and scalable software
                solutions, including mobile, web, and enterprise applications.
              </p>
            </div>
          </div>
          {/* second end */}
          {/* third start */}
          <div className='flex flex-row items-start gap-x-[.8rem] mt-[1rem] xl:mt-[1.5rem] group'>
            <div className='flex items-center justify-center flex-col gap-y-[1rem] md:gap-y-[.5rem] xl:gap-y-[1rem]'>
              <h1 className='w-[2.5rem] h-[2.5rem] xl:w-[3rem] xl:h-[3rem] flex items-center justify-center rounded-full bg-[#BE6CBE] font-bold text-white text-[20px] border-2 border-transparent transition-all duration-500 ease-in-out group-hover:bg-transparent group-hover:border-[2.5px] group-hover:border-[#BE6CBE] group-hover:text-[#BE6CBE] group-hover:scale-110'>
                3
              </h1>
            </div>
            <div>
              <h2 className=' text-lightHeading font-semibold text-[19px] md:text-[17px] xl:text-[22px] 2xl:text-[25px]'>
                Mobile Application Development
              </h2>
              <p className='font-rubik mt-[1rem] text-lightText text-[14px] xl:text-[17px] 2xl:w-[70%] 2xl:text-[18.8px]'>
                Epahubb develops secure, scalable, and user-friendly mobile apps
                for iOS, Android, and cross-platform solutions.
              </p>
            </div>
          </div>
          {/* third end */}
        </div>
        <div className='md:w-[80%] lg:w-auto'>
          <img src={assets.epahubb_software_hero} alt='' />
        </div>
      </div>
      <svg
        className='absolute bottom-0 left-0 w-full h-10 sm:h-12 text-white dark:text-primaryDark'
        viewBox='0 0 100 10'
        preserveAspectRatio='none'
      >
        <path d='M0,0 C25,10 75,10 100,0 V10 H0 Z' fill='currentColor' />
      </svg>
    </article>
  )
}
export default SoftwareHero