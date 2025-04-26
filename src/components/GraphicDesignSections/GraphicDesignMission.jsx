const GraphicDesignMission = () => {
  return (
    <article className='py-[5rem] px-[3%] lg:px-[6%] 2xl:px-[10%] relative z-0 bg-white dark:bg-primaryDark font-jakarta'>
      <h2 className='font-bold text-xl md:text-2xl xl:text-3xl'>
        Mission and impact
      </h2>
      {/* main mission */}
      <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 xl:gap-4 items-start'>
        <div>
          <p className='text-gray-500 dark:text-[#ACB2C8] font-medium text-sm xl:text-[1rem]'>
            Epahubb Consult provides creative and professional graphic design
            solutions tailored to enhance brand identity and engagement. Our
            services include:
          </p>
        </div>
        <div className='px-4'>
          <ul className='list-disc'>
            <li className='text-gray-500 dark:text-[#ACB2C8] font-medium text-sm xl:text-[1rem]'>
              UI/UX Design – Website and mobile app interface designs for an
              intuitive user experience.
            </li>
          </ul>
        </div>
        <div className='px-4'>
          <ul className='list-disc'>
            <li className='text-gray-500 dark:text-[#ACB2C8] font-medium text-sm xl:text-[1rem]'>
              Branding & Identity Design – Logos, business cards, letterheads,
              and brand guidelines.
            </li>
          </ul>
        </div>
        <div className='px-4'>
          <ul className='list-disc'>
            <li className='text-gray-500 dark:text-[#ACB2C8] font-medium text-sm xl:text-[1rem]'>
              Packaging Design – Product packaging, labels, and box designs that
              attract customers.
            </li>
          </ul>
        </div>
        <div className='px-4'>
          <ul className='list-disc'>
            <li className='text-gray-500 dark:text-[#ACB2C8] font-medium text-sm xl:text-[1rem]'>
              Marketing & Advertising Design – Flyers, posters, brochures,
              banners, and social media graphics.
            </li>
          </ul>
        </div>
        <div className='px-4'>
          <ul className='list-disc'>
            <li className='text-gray-500 dark:text-[#ACB2C8] font-medium text-sm xl:text-[1rem]'>
              Motion Graphics & Animation – Animated logos, explainer videos,
              and promotional visuals.
            </li>
          </ul>
        </div>
      </div>
      {/* customer rating */}
      <div className='mt-14 md:mt-16 lg:mt-20 flex flex-col items-center justify-center sm:gap-2 sm:flex-row md:justify-between sm:items-center md:gap-10 lg:gap-16'>
        <div className="sm:mt-0">
          <h1 className='font-bold text-center text-[22px] sm:text-start font-jakatar mb-2 lg:text-[28px] 2xl:text-[35px]'>150</h1>
          <div className='w-full h-[0.05rem] bg-gray-300 dark:bg-gray-700' />
          <h2 className='text-[14px] sm:text-[13px] text-center sm:text-start mt-2 font-bold md:text-[15px] lg:text-[16.5px] 2xl:text-[18px]'>Happy Customers</h2>
          <p className='mt-2 text-[13px] sm:text-[12.5px] text-center sm:text-start md:text-[13px] 2xl:text-[14px] text-gray-500'>
            Customers love our creativity, quality, professionalism,
            reliability, and brand-focused designs.
          </p>
        </div>
        <div className="mt-8 sm:mt-0">
          <h1 className='font-bold text-center text-[22px] sm:text-start font-jakatar mb-2 lg:text-[28px] 2xl:text-[35px]'>132</h1>
          <div className='w-full h-[0.05rem] bg-gray-300 dark:bg-gray-700' />
          <h2 className='text-[14px] sm:text-[13px] text-center sm:text-start mt-2 font-bold md:text-[15px] lg:text-[16.5px] 2xl:text-[18px]'>Positive Ratings</h2>
          <p className='mt-2 text-[13px] sm:text-[12.5px] text-center sm:text-start md:text-[13px] 2xl:text-[14px] text-gray-500'>
            Epahubb Consult earns high ratings for creativity, quality,
            professionalism, and reliability.
          </p>
        </div>
        <div className="mt-8 sm:mt-0">
          <h1 className='font-bold text-center text-[22px] sm:text-start font-jakatar mb-2 lg:text-[28px] 2xl:text-[35px]'>4.87/5</h1>
          <div className='w-full h-[0.05rem] bg-gray-300 dark:bg-gray-700' />
          <h2 className='text-[14px] sm:text-[13px] text-center sm:text-start mt-2 font-bold md:text-[15px] lg:text-[16.5px] 2xl:text-[18px]'>Ratings</h2>
          <p className='mt-2 text-[13px] sm:text-[12.5px] text-center sm:text-start md:text-[13px] 2xl:text-[14px] text-gray-500'>
            Epahubb Consult is highly rated for creativity, quality,
            professionalism, and reliability.
          </p>
        </div>
      </div>
    </article>
  )
}
export default GraphicDesignMission
