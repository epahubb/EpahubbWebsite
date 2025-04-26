import { assets } from "../../assets/assets"

const Productivity = () => {
  return (
    <article className='py-[3rem] mt-16 sm:mt-20 md:mt-24 lg:mt-32 2xl:mt-36 bg-[#F3F1FC] text-black dark:bg-gradient-to-b dark:from-[#1e222e] dark:to-[#1e222e] dark:text-white px-[3%] lg:px-[6%] 2xl:px-[10%] font-jakarta'>
      <div className='flex flex-col gap-y-6 md:gap-y-0 md:flex-row md:items-center md:gap-6 justify-between'>
        <div className='md:w-1/2'>
          <h2 className='text-xs uppercase lg:text-[15px] xl:text-[15px] text-gray-500 dark:text-darkText font-rubik'>
            Improved Productivity
          </h2>
          <h1 className='mt-4 lg:mt-7 font-bold text-xl sm:text-[32px] leading-normal md:leading-[40px] lg:leading-[45px] xl:text-[35px] xl:leading-[50px] 2xl:text-[45px] 2xl:leading-[60px]'>
            Simplify your work, amplify productivity
          </h1>
          <p className='text-gray-500 text-[13px] sm:text-[14px] mt-4 lg:mt-7 xl:text-[15.5px] xl:leading-[25px] 2xl:leading-[30px] dark:text-darkText'>
            Partnering with Epahubb for IT consultancy ensures expert guidance in technology strategy, cybersecurity, infrastructure optimization, and digital transformation. Our tailored solutions enhance efficiency, security, and innovation, driving long-term business growth and success.
          </p>
        </div>
        <div className='md:w-1/2'>
          <img
            src={assets.epahubb_itConsult_productivity}
            className='w-full'
            alt='head of graphic design'
          />
        </div>
      </div>
    </article>
  )
}
export default Productivity