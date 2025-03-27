import { assets } from "../../assets/assets"
// import { useGlobalContext } from "../../Context"

const HowItWorks = () => {
  // const {selectedColor} = useGlobalContext()
  return (
    <article
      id='how-it-works'
      className='pt-[5rem] pb-[7rem] xl:pb-[9rem] bg-white dark:bg-primaryDark dark:text-darkHeading font-jakarta px-[3%] lg:px-[4%] xl:px-[5%] 2xl:px-[10%]'
    >
      <div data-aos='fade-down'>
        <h1
          className='text-center text-[26px] font-semibold md:text-[40px] md:font-bold leading-[50px]
      lg:text-[50px] lg:leading-[55px] xl:text-[60px] xl:leading-[70px] 2xl:text-[75px] 2xl:leading-[85px] text-lightHeading dark:text-darkHeading'
        >
          The Complete Solutions
        </h1>
        <p className='text-center mt-[1rem] md:text-[17.5px] lg:mt-[2rem] xl:text-[18.5px] font-rubik text-custom-blue-80 dark:text-darkText'>
          Epahubb provides complete technology solutions, including software,
          web, e-commerce, and mobile app <br className='hidden xl:block' />{" "}
          services, to empower businesses and drive success.
        </p>
      </div>
      {/* card for education,  e-commerce and forex trading */}
      <div className='mt-[5rem] grid grid-cols-1 md:grid-cols-3 gap-y-[2rem] md:gap-x-[1rem] xl:gap-x-[4rem] 2xl:gap-x-[6rem]'>
        <div data-aos='fade-right'>
          <div className='flex items-center justify-center'>
            <img
              src={assets.epahubb_edu_softwares}
              alt='student looking at hologram'
              className=''
            />
          </div>
          <h2 className='text-center text-[21px] font-semibold mt-[1rem] md:text-[19px] lg:text-[22px] text-lightHeading 2xl:text-[25px] dark:text-darkHeading'>
            Education
          </h2>
          <p className='font-rubik text-center md:text-start mt-[1rem] text-[15px] md:text-[14px] xl:text-[15px] text-custom-blue-60 2xl:text-[17px] dark:text-darkText'>
            Epahubb transforms education with innovative e-learning solutions,
            virtual classrooms, and user-friendly platforms that enhance
            learning.
          </p>
        </div>
        <div data-aos='fade-up'>
          <div className='flex items-center justify-center'>
            <img
              src={assets.epahubb_ecommerce_softwares}
              alt='eaphubb forex trading softwares'
              className=''
            />
          </div>
          <h2 className='text-center text-[21px] font-semibold mt-[1rem] md:text-[19px] lg:text-[22px] text-lightHeading 2xl:text-[25px] dark:text-darkHeading'>
            Commerce
          </h2>
          <p className='font-rubik text-center md:text-start mt-[1rem] text-[15px] md:text-[14px] xl:text-[15px] text-custom-blue-60 2xl:text-[17px] dark:text-darkText'>
            Epahubb delivers secure, scalable, and user-friendly e-commerce
            solutions to enhance customer satisfaction, drive engagement, and
            optimize online sales.
          </p>
        </div>
        <div data-aos='fade-left'>
          <div className='flex items-center justify-center'>
            <img
              src={assets.epahubb_forex_trading_softwares}
              alt='epahubb forex trading softwares'
              className=''
            />
          </div>
          <h2 className='text-center text-[21px] font-semibold mt-[1rem] md:text-[19px] lg:text-[22px] text-lightHeading 2xl:text-[25px] dark:text-darkHeading'>
            Forex Trading
          </h2>
          <p className='font-rubik text-center md:text-start mt-[1rem] text-[15px] md:text-[14px] xl:text-[15px] text-custom-blue-60 2xl:text-[17px] dark:text-darkText'>
            Epahubb offers innovative Forex trading solutions with real-time
            analytics and secure platforms for seamless and efficient trading
            experiences.
          </p>
        </div>
      </div>
      {/* card for education,  e-commerce and forex trading */}

      {/*our growth of the year section start */}
      <div className='mt-[8rem]'>
        <div data-aos='fade-down'>
          <h1
            className='text-center text-[26px] font-semibold md:text-[40px] md:font-bold leading-[50px]
      lg:text-[50px] lg:leading-[55px] xl:text-[60px] xl:leading-[70px] 2xl:text-[75px] 2xl:leading-[85px] text-lightHeading dark:text-darkHeading'
          >
            Our Growth of the Year
          </h1>
          <p className='text-center text-custom-blue-80 mt-[1rem] md:text-[17.5px] lg:mt-[2rem] font-semibold xl:text-[18.5px] font-rubik dark:text-darkText'>
            This year, Epahubb has achieved significant milestones, expanding
            services, strengthening <br className='hidden xl:block' /> client
            relationships, and embracing innovation for continued success.
          </p>
        </div>
      </div>
      {/* planning start */}
      <div className='flex mt-[10rem] flex-col items-center md:flex-row gap-y-[2.5rem] gap-x-[2rem]'>
        {/* first column */}
        <div data-aos='fade-left' className='md:w-[47%] xl:w-[50%]'>
          <img src={assets.lady_with_a_man} alt='' />
        </div>
        {/* section column */}
        <div data-aos='fade-right' className='md:w-[53%] xl:w-[50%]'>
          {/* first one */}
          <div className='flex flex-row gap-x-[.8rem] group'>
            <div className='flex items-center justify-center flex-col gap-y-[1rem] md:gap-y-[.5rem] xl:gap-y-[1rem]'>
              <h1
                className={`w-[2.5rem] h-[2.5rem] xl:w-[3rem] xl:h-[3rem] flex items-center justify-center rounded-full bg-[#7827E6] font-bold text-white text-[20px] border-2 border-transparent transition-all duration-500 ease-in-out group-hover:bg-transparent group-hover:border-[2.5px] group-hover:border-[#7827E6] group-hover:text-[#7827E6] group-hover:scale-110`}
              >
                1
              </h1>
              <div className='w-[.13rem] h-[6rem] md:h-[4rem] bg-[#e4e4e4] dark:bg-[#363f54] xl:h-[5rem] 2xl:w-[.125rem] 2xl:h-[5.5rem]'></div>
            </div>
            <div>
              <h2 className='text-lightHeading dark:text-darkHeading font-semibold text-[19px] xl:text-[25px] 2xl:text-[30px]'>
                Planning and Requirement Analysis
              </h2>
              <p className='font-rubik mt-[1rem] text-lightText dark:text-darkText text-[14px] xl:text-[17px] 2xl:w-[70%] 2xl:text-[18.8px]'>
                We define project goals, scope, user needs, and gather
                requirements to create a roadmap for development projects.
              </p>
            </div>
          </div>
          {/* first end */}
          {/* second */}
          <div className='flex flex-row gap-x-[.8rem] mt-[2rem] md:mt-[1rem] xl:mt-[1.5rem] group'>
            <div className='flex items-center justify-center flex-col gap-y-[1rem] md:gap-y-[.5rem] xl:gap-y-[1rem]'>
              <h1 className='w-[2.5rem] h-[2.5rem] xl:w-[3rem] xl:h-[3rem] flex items-center justify-center rounded-full bg-[#7827E6] font-bold text-white text-[20px] border-2 border-transparent transition-all duration-500 ease-in-out group-hover:bg-transparent group-hover:border-[2.5px] group-hover:border-[#7827E6] group-hover:text-[#7827E6] group-hover:scale-110'>
                2
              </h1>
              <div className='w-[.13rem] h-[6rem] md:h-[4rem] bg-[#e4e4e4] dark:bg-[#363f54] xl:h-[5rem] 2xl:w-[.125rem] 2xl:h-[5.5rem]'></div>
            </div>
            <div>
              <h2 className=' text-lightHeading dark:text-darkHeading font-semibold text-[19px] xl:text-[25px] 2xl:text-[30px]'>
                Design
              </h2>
              <p className='font-rubik mt-[1rem] text-lightText dark:text-darkText text-[14px] xl:text-[17px] 2xl:w-[70%] 2xl:text-[18.8px]'>
                We create the architecture and design the system’s structure,
                user interface, and database, focusing on functionality and
                usability.
              </p>
            </div>
          </div>
          {/* second end */}
          {/* third start */}
          <div className='flex flex-row gap-x-[.8rem] mt-[2rem] md:mt-[1rem] xl:mt-[1.5rem] group'>
            <div className='flex items-center justify-center flex-col gap-y-[1rem] md:gap-y-[.5rem] xl:gap-y-[1rem]'>
              <h1 className='w-[2.5rem] h-[2.5rem] xl:w-[3rem] xl:h-[3rem] flex items-center justify-center rounded-full bg-[#7827E6] font-bold text-white text-[20px] border-2 border-transparent transition-all duration-500 ease-in-out group-hover:bg-transparent group-hover:border-[2.5px] group-hover:border-[#7827E6] group-hover:text-[#7827E6] group-hover:scale-110'>
                3
              </h1>
              <div className='w-[.13rem] h-[6rem] md:h-[4rem] bg-[#e4e4e4] dark:bg-[#363f54] xl:h-[5rem] 2xl:w-[.125rem] 2xl:h-[5.5rem]'></div>
            </div>
            <div>
              <h2 className=' text-lightHeading dark:text-darkHeading font-semibold text-[19px] xl:text-[25px] 2xl:text-[30px]'>
                Development (Coding)
              </h2>
              <p className='font-rubik mt-[1rem] text-lightText dark:text-darkText text-[14px] xl:text-[17px] 2xl:w-[70%] 2xl:text-[18.8px]'>
                We develop the software by writing the code according to the
                design, incorporating features, functions, and integrations
                required for the project.
              </p>
            </div>
          </div>
          {/* third end */}
          {/* fourth start */}
          <div className='flex flex-row gap-x-[.8rem] mt-[2rem] md:mt-[1rem] xl:mt-[1.5rem] group'>
            <div className=''>
              <h1 className='w-[2.5rem] h-[2.5rem] xl:w-[3rem] xl:h-[3rem] flex items-center justify-center rounded-full bg-[#7827E6] font-bold text-white text-[20px] border-2 border-transparent transition-all duration-500 ease-in-out group-hover:bg-transparent group-hover:border-[2.5px] group-hover:border-[#7827E6] group-hover:text-[#7827E6] group-hover:scale-110'>
                4
              </h1>
            </div>
            <div>
              <h2 className=' text-lightHeading dark:text-darkHeading font-semibold text-[19px] xl:text-[25px] 2xl:text-[30px]'>
                Testing and Deployment
              </h2>
              <p className='font-rubik mt-[1rem] text-lightText dark:text-darkText text-[14px] xl:text-[17px] 2xl:w-[70%] 2xl:text-[18.8px]'>
                we test the software for bugs and issues, then deploy it for
                real-world use. Ongoing support and updates are provided as
                needed.
              </p>
            </div>
          </div>
          {/* fourth end */}
        </div>
      </div>
      {/* planning ends */}
      {/*our growth of the year section start */}
    </article>
  )
}
export default HowItWorks
