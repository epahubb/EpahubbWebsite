import { assets } from "../../assets/assets"

const Integration = () => {
  return (
    <article
      id='integration'
      className='bg-white dark:bg-primaryDark dark:text-darkHeading px-[3%] lg:px-[4%] xl:px-[5%] py-[15%] md:py-[8%] xl:py-[7%] 2xl:px-[10%] font-jakarta'
    >
      <div data-aos='fade-down'>
        <h1 className='text-center font-jakarta text-lightHeading text-[22px] font-semibold md:text-[28px] lg:text-[32px] xl:text-[38px] 2xl:text-[50px] 2xl:leading-[70px] 2xl:tracking-normal 2xl:font-normal dark:text-darkHeading'>
          You
          <span className='font-extrabold text-[26px] md:text-[40px] lg:text-[45px] xl:text-[55px] 2xl:text-[70px]'>
             Propose
          </span>
          , we
          <span className='font-extrabold text-[26px] md:text-[40px] lg:text-[45px] xl:text-[55px] 2xl:text-[70px]'>
             develop
          </span>
          ; <br className='hidden md:block' /> Just as you want it. With
          Epahubb,
          <br className='hidden md:block' /> its always a
          <span className='font-extrabold text-[26px] md:text-[40px] xl:text-[55px] lg:text-[45px] 2xl:text-[70px] ml-1 md:ml-2'>
            win-win
          </span>
        </h1>
      </div>

      {/* numbers */}
      <div className='flex flex-col md:flex-row mt-[4rem] md:mt-[5rem] xl:mt-[6rem] font-jakarta font-semibold px-[3%] xl:px-[5%]'>
        <div data-aos='fade-right' className='md:w-[25%]'>
          <h1 className='text-center text-[50px] 2xl:text-[70px]'>2+</h1>
          <h2 className='text-center 2xl:text-[20px]'>Year Experience</h2>
        </div>
        <div data-aos='fade-left' className='mt-[1rem] md:mt-0 md:w-[25%]'>
          <h1 className='text-center text-[50px] 2xl:text-[70px]'>15</h1>
          <h2 className='text-center 2xl:text-[20px]'>Companies</h2>
        </div>
        <div data-aos='fade-right' className='mt-[1rem] md:mt-0 md:w-[25%]'>
          <h1 className='text-center text-[50px] 2xl:text-[70px]'>1K</h1>
          <h2 className='text-center 2xl:text-[20px]'>Customers</h2>
        </div>
        <div data-aos='fade-left' className='mt-[1rem] md:mt-0 md:w-[25%]'>
          <h1 className='text-center text-[50px] 2xl:text-[70px]'>2</h1>
          <h2 className='text-center 2xl:text-[20px]'>Branches</h2>
        </div>
      </div>

      {/* one stop solution */}
      <div className='flex flex-col md:flex-row mt-[7rem] py-[4rem] border-t-[1px] border-t-[#0000001A] gap-y-[5rem] gap-x-[1rem] 2xl:gap-x-[10rem] font-jakarta text-lightHeading md:items-center dark:text-darkHeading'>
        {/* first part */}
        <div data-aos='fade-left' data-aos-duration='900' className='md:w-[45%] 2xl:w-[35%]'>
          <h4 className='font-jakarta text-[13px] font-semibold'>
            ONE-STOP SOLUTION
          </h4>
          <h1 className='font-jakarta mt-[1.8rem] text-[21px] font-semibold md:text-[28px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px]'>
            EPAHUBB CONSULT
          </h1>
          <p className='font-rubik mt-[1rem] 2xl:mt-[2rem] text-[15px] xl:text-[17px] 2xl:text-[18px] text-[#071135] dark:text-darkText opacity-75'>
            Epahubb is a tech firm offering innovative solutions and expert
            consulting to shape the future of technology.
          </p>
          <div className='flex items-start gap-2 md:gap-3 mt-[1rem]'>
            <img
              src={assets.checked_icon}
              alt=''
              className='w-[1.4rem] 2xl:w-auto'
            />
            <h2 className='text-[15px] lg:text-[16.5px] font-semibold xl:text-[17px] 2xl:text-[19px]'>
              Mobile Application Development
            </h2>
          </div>
          <div className='flex items-start gap-2 md:gap-3 mt-[1rem]'>
            <img
              src={assets.checked_icon}
              alt=''
              className='w-[1.4rem] 2xl:w-auto'
            />
            <h2 className='text-[15px] lg:text-[16.5px] font-semibold xl:text-[17px] 2xl:text-[19px]'>
              IT Consultancy
            </h2>
          </div>
          <div className='flex items-start gap-2 md:gap-3 mt-[1rem]'>
            <img
              src={assets.checked_icon}
              alt=''
              className='w-[1.4rem] 2xl:w-auto'
            />
            <h2 className='text-[15px] lg:text-[16.5px] font-semibold xl:text-[17px] 2xl:text-[19px]'>
              Software Engineering
            </h2>
          </div>
          <div className='flex items-start gap-2 md:gap-3 mt-[1rem]'>
            <img
              src={assets.checked_icon}
              alt=''
              className='w-[1.4rem] 2xl:w-auto'
            />
            <h2 className='text-[15px] lg:text-[16.5px] font-semibold xl:text-[17px] 2xl:text-[19px]'>
              Web Development
            </h2>
          </div>
          <div className='flex items-start gap-2 md:gap-3 mt-[1rem]'>
            <img
              src={assets.checked_icon}
              alt=''
              className='w-[1.4rem] 2xl:w-auto'
            />
            <h2 className='text-[15px] lg:text-[16.5px] font-semibold xl:text-[17px] 2xl:text-[19px]'>
              UI/UX Design
            </h2>
          </div>
          <div className='flex items-start gap-2 md:gap-3 mt-[1rem]'>
            <img
              src={assets.checked_icon}
              alt=''
              className='w-[1.4rem] 2xl:w-auto'
            />
            <h2 className='text-[15px] lg:text-[16.5px] font-semibold xl:text-[17px] 2xl:text-[19px]'>
              Cyber Security
            </h2>
          </div>
          <div className='flex items-start gap-2 md:gap-3 mt-[1rem]'>
            <img
              src={assets.checked_icon}
              alt=''
              className='w-[1.4rem] 2xl:w-auto'
            />
            <h2 className='text-[15px] lg:text-[16.5px] font-semibold xl:text-[17px] 2xl:text-[19px]'>
              3D Modeling
            </h2>
          </div>
        </div>
        {/* second part */}
        <div data-aos='fade-right' data-aos-duration='900' className='md:w-[50%]'>
          <img src={assets.epahubb_project_image} alt='' />
        </div>
        {/* second part ends */}
      </div>
    </article>
  )
}
export default Integration
