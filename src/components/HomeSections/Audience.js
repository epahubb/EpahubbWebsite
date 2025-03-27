import { assets } from "../../assets/assets"

const Audience = () => {
  return (
    <article className="dark:bg-primaryDark pb-[40%] md:pb-[19%] lg:pb-[14%] xl:pb-[11%] 2xl:pb-[9%]">
      <div className='flex flex-col-reverse md:flex-row pt-[3rem] dark:bg-primaryDark px-[3%] 2xl:px-[13%] md:px-[4%] gap-y-[3rem] gap-x-[2rem] py-[6rem] xl:py-[5%]'>
        <div className='md:w-[50%] md:mt-[2rem] lg:mt-[5rem] xl:mt-[7rem]'>
          <h1 className='mt-[1.5rem] text-lightHeading dark:text-darkHeading text-[25px] font-semibold font-jakarta lg:text-[40px] xl:text-[55px] 2xl:mt-[2rem]'>
            Innovative Approach
          </h1>
          <p className='mt-[1rem] text-[14px] font-rubik text-lightText dark:text-darkText lg:text-[16px] xl:text-[18px]'>
            Epahubb leverages cutting-edge technologies, creative
            problem-solving, and customer-focused innovation to deliver agile,
            future-proof, and scalable solutions tailored to your unique needs.
          </p>
          <h1 className='mt-[1.5rem] text-lightHeading dark:text-darkHeading text-[25px] font-semibold font-jakarta lg:text-[40px] xl:text-[55px] 2xl:mt-[3rem]'>
            Adaptability
          </h1>
          <p className='mt-[.7rem] text-[14px] font-rubik text-lightText dark:text-darkText lg:text-[16px] xl:text-[18px]'>
            At Epahubb Consult, we are very Flexible to adjust solutions and
            strategies as technologies and client needs evolve.
          </p>
        </div>
        <div className='md:w-[50%]'>
          <img src={assets.man_with_glasses} alt='a lady with smiled cheek' />
        </div>
      </div>
      <div>
        <h2
          className='text-center text-[28px] leading-[35px] font-semibold text-lightHeading dark:text-darkHeading md:text-[40px] md:font-bold md:leading-[50px]
      lg:text-[50px] lg:leading-[55px] xl:text-[60px] xl:leading-[70px] 2xl:text-[75px] 2xl:leading-[85px] font-jakarta'
        >
          Reach your audience through <br className='hidden md:block' /> social
          media
        </h2>
        <p className='text-center text-lightText mt-[1rem] md:text-[17.5px] lg:mt-[2rem] font-semibold xl:text-[18.5px] dark:text-darkText font-rubik md:px-[5%]'>
          Social media is a powerful tool to connect with your audience, build
          your brand, and drive <br className="hidden xl:block" /> meaningful engagement.
        </p>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-between500 mt-[3rem] px-[3%] gap-y-[2rem] md:gap-x-[1rem] md:px-[4%] xl:px-[6%] 2xl:gap-x-[2rem] 2xl:px-[16%] '>
        <div className='md:w-[50%] px-[10%] py-[12%] rounded-[1rem] dark:bg-[#1D212C] bg-[#F4F4F9] flex flex-col-reverse md:flex-col md:py-[4%] md:px-[5%] md:gap-y-[1.6rem] lg:py-[6%] 2xl:py-[4.5%]'>
          <div>
            <h1 className='mt-[1.2rem] text-center font-jakarta text-[19px] font-semibold text-lightHeading dark:text-darkHeading md:mt-[0rem] lg:text-[25px] 2xl:text-[30px]'>
              Marketing Integrations
            </h1>
            <p className='mt-[1rem] text-center font-rubik text-[15px] text-lightText dark:text-darkText lg:text-[17px] 2xl:text-[19px]'>
              Aliquam a augue suscipit luctus diam neque purus ipsum neque and
              dolor primis libero
            </p>
          </div>
          <div>
            <img src={assets.google_analytics_img} alt='google analytic' />
          </div>
        </div>
        <div className='md:w-[50%] px-[10%] py-[12%] rounded-[1rem] dark:bg-[#1D212C] bg-[#F4F4F9] md:py-[4%] md:px-[5%] md:gap-y-[1.6rem] lg:py-[6%] 2xl:py-[5%]'>
          <div>
            <img src={assets.video_img} alt='video img' />
          </div>
          <div>
            <h1 className='mt-[1.2rem] text-center font-jakarta text-[19px] font-semibold text-lightHeading dark:text-darkHeading lg:text-[25px] 2xl:text-[30px]'>
              Enhance Engagement
            </h1>
            <p className='mt-[1rem] text-center font-rubik text-[15px] text-lightText dark:text-darkText lg:text-[17px] 2xl:text-[19px]'>
              Aliquam a augue suscipit luctus diam neque purus ipsum neque and
              dolor primis libero
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}
export default Audience