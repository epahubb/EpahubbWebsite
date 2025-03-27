import { Bulb, Shield, Board, Graph } from "../icons"

const Features = () => {
  return (
    <article
      id='features'
      className='py-[12%] md:py-[10%] xl:py-[8%] 2xl:py-[6%] px-[4%] bg-primary dark:bg-primaryDark'
    >
      <h2
        className='text-center text-[26px] font-semibold text-lightHeading dark:text-darkHeading md:text-[40px] md:font-bold leading-[50px]
      lg:text-[50px] lg:leading-[55px] xl:text-[60px] xl:leading-[70px] 2xl:text-[75px] 2xl:leading-[85px] font-jakarta'
      >
        Excellent tailored features <br className='hidden md:block' /> just for
        you
      </h2>
      <p className='text-center text-lightText mt-[1rem] md:text-[17.5px] lg:mt-[2rem] font-semibold xl:text-[18.5px] dark:text-darkText font-rubik'>
        At Epahubb, we understand that every user is unique, which is why we <br className="hidden xl:block" />
        offer features designed to meet your specific needs. Our platform
        provides:
      </p>
      <div data-aos='fade-up' data-aos-duration='800' className='mt-[2rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-[3rem] 2xl:px-[12%] gap-x-[2rem] items-start md:mt-[3rem]'>
        <div className='flex items-center justify-center flex-col'>
          <Bulb />
          <h1 className='text-[21px] mt-3 font-semibold text-lightHeading dark:text-darkHeading'>
            Graphic Design
          </h1>
          <p className='text-center mt-3 text-[14.5px] font-rubik dark:text-darkText text-lightText'>
            Epahubb offers brand identity, print, digital, UI/UX, illustration,
            packaging, and motion graphics design services.
          </p>
        </div>
        <div className='flex items-center justify-center flex-col'>
          <Shield />
          <h1 className='text-[21px] mt-3 font-semibold text-lightHeading dark:text-darkHeading'>
            Cyber Security
          </h1>
          <p className='text-center mt-3 text-[14.5px] font-rubik dark:text-darkText text-lightText'>
            Protect your systems, networks, and data from digital attacks and
            unauthorized access.
          </p>
        </div>
        <div className='flex items-center justify-center flex-col'>
          <Board />
          <h1 className='text-[21px] mt-3 font-semibold text-lightHeading dark:text-darkHeading'>
            Software Engineering
          </h1>
          <p className='text-center mt-3 text-[14.5px] font-rubik dark:text-darkText text-lightText'>
            Epahubb Consult offers custom software development, integration,
            mobile apps, web applications, testing, and maintenance.
          </p>
        </div>
        <div className='flex items-center justify-center flex-col'>
          <Graph />
          <h1 className='text-[21px] mt-3 font-semibold text-lightHeading dark:text-darkHeading'>
            IT Consultancy
          </h1>
          <p className='text-center mt-3 text-[14.5px] font-rubik dark:text-darkText text-lightText'>
            Epahubb Consult provides technology strategy, system optimization
            and IT infrastructure advice.
          </p>
        </div>
      </div>
    </article>
  )
}
export default Features
