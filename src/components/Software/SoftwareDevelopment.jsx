import { assets } from "../../assets/assets"

const SoftwareDevelopment = () => {
  return (
    <article className='py-[3rem] mt-16 sm:mt-20 md:mt-24 lg:mt-32 2xl:mt-36 bg-[#F3F1FC] text-black dark:bg-gradient-to-b dark:from-[#1e222e] dark:to-[#1e222e] dark:text-white px-[3%] lg:px-[6%] 2xl:px-[10%] font-jakarta'>
      <div className='flex flex-col gap-y-6 md:gap-y-0 md:flex-row md:items-center md:gap-6 justify-between'>
        <div className='md:w-1/2'>
          <img
            src={assets.epahubb_software_shoe}
            className='w-full'
            alt='head of graphic design'
          />
        </div>
        <div className='md:w-1/2'>
          <h2 className='text-[17px] uppercase md:text-[18px] 2xl:text-[20px] font-bold'>
            Improved Productivity
          </h2>
          <p className='text-gray-500 text-[13px] sm:text-[14px] mt-4 lg:mt-7 xl:text-[15.5px] xl:leading-[25px] 2xl:leading-[30px] dark:text-darkText'>
            Epahubb develops custom, secure, and scalable software solutions for
            businesses. With user-friendly design, high performance, and 24/7
            support, we ensure efficiency, innovation, and long-term reliability
            across various industries and platforms.
          </p>
          <h2 className='text-[17px] mt-6 uppercase md:text-[18px] 2xl:text-[20px] font-bold'>
            Web Application Development
          </h2>
          <p className='text-gray-500 text-[13px] sm:text-[14px] mt-4 lg:mt-7 xl:text-[15.5px] xl:leading-[25px] 2xl:leading-[30px] dark:text-darkText'>
            Epahubb specializes in custom, secure, and high-performance web
            applications, ensuring scalability, user-friendly design, and
            seamless functionality. With agile development and 24/7 support, we
            deliver innovative solutions tailored to business needs.
          </p>
        </div>
      </div>
    </article>
  )
}
export default SoftwareDevelopment