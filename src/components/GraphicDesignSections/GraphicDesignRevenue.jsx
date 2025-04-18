import { graphicDesignRevenue } from "../../utils/data"

const GraphicDesignRevenue = () => {
  return (
    <article className='py-[3rem] px-[3%] lg:px-[6%] 2xl:px-[10%] sm:py-[4rem] font-jakarta'>
      <h1
        className='text-center text-[26px] font-semibold md:text-[40px] md:font-bold leading-[30px] md:leading-[40px]
      lg:text-[50px] lg:leading-[55px] xl:text-[60px] xl:leading-[70px] 2xl:text-[60px] 2xl:leading-[75px]'
      >
        We make your business gain more revenue at a glance
      </h1>
      <p className='text-center mt-2 md:text-[17.5px] lg:mt-[2rem] xl:text-[18.5px] font-rubik text-gray-500'>
        Your propose, we design.
      </p>
      <div className='mt-[2rem] md:mt-[3rem] grid grid-cols-1 sm:grid-cols-2 sm:gap-8'>
        {graphicDesignRevenue.map((item) => {
          return (
            <div key={item.id} className="mt-8 sm:mt-0">
              <div className='flex flex-col items-center sm:items-start sm:flex-row gap-3 w-full'>
                <div>
                  {item.icons}
                </div>
                <div>
                  <h2 className='text-[18px] text-center sm:text-start sm:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-bold'>
                    {item.title}
                  </h2>
                  <p className=' text-[14px] text-center sm:text-start sm:text-[12px] lg:text-[13px] mt-1 xl:text-[14px] 2xl:text-[15px] text-gray-600 dark:text-darkText'>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      {/* <div className='mt-[2rem] md:mt-[3rem] grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:gap-4'>
        <div className='flex items-start flex-row gap-3 w-full'>
          <div>
            <Bulb />
          </div>
          <div>
            <h2 className='text-[16px] font-bold'>Creative Unique Designs</h2>
            <p className='text-[12px] mt-1 text-gray-600 dark:text-darkText'>
              We craft unique, visually compelling designs tailored to your
              brand’s identity, ensuring originality, market appeal, and strong
              audience engagement.
            </p>
          </div>
        </div>
        <div className='flex items-start flex-row gap-3 w-full'>
          <div>
            <Bulb />
          </div>
          <div>
            <h2 className='text-[16px] font-bold'>Creative Unique Designs</h2>
            <p className='text-[12px] mt-1 text-gray-600 dark:text-darkText'>
              We craft unique, visually compelling designs tailored to your
              brand’s identity, ensuring originality, market appeal, and strong
              audience engagement.
            </p>
          </div>
        </div>
      </div> */}
    </article>
  )
}
export default GraphicDesignRevenue