import { assets } from "../../assets/assets"

const WebApplications = () => {
  return (
    <article className='my-[2rem] px-[3%] xl:px-[10%] 2xl:px-[10%] font-jakarta'>
      <div className='px-4 md:px-6 lg:px-10  flex flex-col md:flex-row xl:gap-4 2xl:gap-6 items-center justify-between rounded-lg'>
        <div className='md:w-[50%] xl:w-[50%] flex items-center justify-center'>
          <img
            src={assets.lady_with_smilled_cheek}
            className='md:w-[80%] xl:w-[90%] 2xl:w-[100%]'
            alt=''
          />
        </div>
        <div className='mt-10 md:mt-0 md:w-[50%] xl:w-[50%]'>
          <h2 className='text-[12px] uppercase font-semibold text-gray-500 sm:text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[17px] dark:text-darkText'>
            Powerful Features
          </h2>
          <h4 className='font-bold mt-4 text-[20px] sm:text-[25px] md:text-[20px] lg:text-[25px] xl:text-[40px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[60px] xl:mt-6'>
            Websites and Web Applications
          </h4>
          <p className='mt-3 text-[13px] md:text-[12.5px] lg:text-[14px] xl:text-[17px] text-gray-500 font-medium xl:mt-6 dark:text-darkText'>
            Epahubb creates custom, responsive, and SEO-optimized websites tailored to business needs. Our user-friendly designs, high performance, security, and 24/7 support ensure seamless functionality, scalability, and a strong online presence.
          </p>
          <div className="grid grid-cols-6 items-center justify-start gap-1 mt-4 md:mt-6">
            <img src={assets.epahubb_software_img_one} alt="" />
            <img src={assets.epahubb_software_img_two} alt="" />
            <img src={assets.epahubb_software_img_three} alt="" />
            <img src={assets.epahubb_software_img_four} alt="" />
            <img src={assets.epahubb_software_img_five} alt="" />
            <img src={assets.epahubb_software_img_six} alt="" />
          </div>
        </div>
      </div>
    </article>
  )
}
export default WebApplications