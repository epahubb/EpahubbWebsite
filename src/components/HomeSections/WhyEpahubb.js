import { assets } from "../../assets/assets"

const WhyEpahubb = () => {
  return (
    <article
    id="why-epahubb"
      className='flex flex-col md:flex-row pt-[3rem] border-t-[1px] border-t-[#0000001A] dark:border-t-[#383b4b] border-solid dark:bg-primaryDark px-[3%] 2xl:px-[13%] md:px-[4%] gap-y-[3rem] gap-x-[2rem] py-[8%]'
    >
      <div data-aos='fade-left' data-aos-duration='900' className='md:w-[50%]'>
        <img
          src={assets.lady_with_smilled_cheek}
          alt='a lady with smiled cheek'
        />
      </div>
      <div data-aos='fade-right' data-aos-duration='900' className='md:w-[50%] md:mt-[2rem] lg:mt-[5rem] xl:mt-[10rem]'>
        <h2 className='dark:text-[#EEEEEE] text-[#6F7880] text-[13px] font-bold font-jakarta'>
          ENHANCE ENGAGEMENT
        </h2>
        <h1 className='mt-[1.5rem] text-lightHeading dark:text-darkHeading text-[25px] font-semibold font-jakarta lg:text-[40px] xl:text-[55px] 2xl:mt-[3rem]'>
          Expertise You Can Trust
        </h1>
        <p className='mt-[1rem] text-[14px] font-rubik text-lightText dark:text-darkText lg:text-[16px] xl:text-[18px]'>
          Epahubb combines certified professionals, deep industry knowledge, a
          proven track record, and the latest technological innovations to
          deliver reliable, customized solutions that empower your business to
          thrive.
        </p>
        <h1 className='font-jakarta mt-[1rem] text-lightHeading dark:text-darkHeading text-[21px] font-semibold lg:text-[28px] xl:text-[34px] 2xl:mt-[4rem]'>
          Tailored Solutions
        </h1>
        <p className='mt-[.7rem] text-[14px] font-rubik text-lightText dark:text-darkText lg:text-[16px] xl:text-[18px]'>
          Epahubb provide customized strategies and solutions designed to meet
          your specific business needs and goals.
        </p>
      </div>
    </article>
  )
}
export default WhyEpahubb
