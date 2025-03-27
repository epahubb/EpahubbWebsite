import { assets } from "../../assets/assets"
import { useGlobalContext } from "../../Context"

const Hero = () => {
  const { openProjectModal,selectedColor } = useGlobalContext()

  return (
    <article id="about-us" className='py-[4rem] mt-[8vh] flex flex-col gap-y-[3rem] xl:gap-[4%] md:flex-row px-[3%] 2xl:px-[10%] relative z-0'>
      <div className="md:w-[50%] xl:w-[55%] justify-center md:pt-[5%] lg:pt-[9%] xl:pt-[11%] 2xl:pt-[8%]">
        <div data-aos='fade-right' ><h1 className='text-center md:text-start text-[32px] leading-[34px] text-white font-semibold md:text-[35px] lg:text-[50px] md:leading-[45px] lg:leading-[60px] md:font-bold xl:text-[68px] xl:leading-[75px] 2xl:text-[90px] 2xl:leading-[100px] font-jakarta'>
          Innovative <br className="hidden 2xl:block" /> Product  <br className="hidden 2xl:block" /> Engineering
        </h1></div>
        <div data-aos='fade-up' ><p className='text-center md:text-start mt-[1.5rem] text-white text-[16.4px] xl:text-[19px] font-medium xl:w-[85%] xl:mt-[2rem] 2xl:mt-[3rem] font-jakarta'>
          Epahubb Consult aims to deliver high-quality services and innovative
          solutions, focusing on areas such as UI/UX design, software
          engineering, and digital marketing.
        </p></div>
        <div data-aos='fade-up' className='flex items-center justify-center mt-[2rem] md:items-start md:justify-start'>
          <button className={`bg-[${selectedColor}] capitalize text-white w-[60%] md:w-[50%] xl:w-[35%] py-[.5rem] border-transparent text-center text-[18px] xl:text-[19px] rounded-[.2rem] font-semibold font-jakarta border-solid border-2 hover:bg-transparent hover:border-white transition duration-300 ease-in-out `} onClick={openProjectModal}>
            try epahubb
          </button>
        </div>
      </div>
      <div data-aos='zoom-in'  data-aos-delay="300" className="md:w-[50%] xl:w-[45%]">
        <img src={assets.hero_image} alt='hero pic' />
      </div>
      <img src={assets.epahubb_ellipse} alt="" className="hidden lg:block absolute lg:w-[90%] lg:bottom-0 -z-10 2xl:bottom-0 xl:bottom-0 xl:w-[75%] 2xl:w-[60%] 2xl:left-[4rem]" />
    </article>
  )
}
export default Hero
