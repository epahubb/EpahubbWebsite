import { assets } from "../../assets/assets"
import { itConsultancy } from "../../utils/data"

const EveryThingInPlace = () => {
  return (
    <article className='py-[5rem] px-[3%] xl:px-[12%] 2xl:px-[14%]'>
      <div>
        <p className='text-center text-[16px] text-gray-500 font-semibold'>
          Our clients love us as much as we love them
        </p>
        <div className='flex mt-6 sm:flex-row sm:px-[1rem] md:px-[2rem] lg:px-[6rem] xl:px-[14rem] sm:gap-2 items-center justify-between'>
          <div>
            <div className='flex items-center justify-center'>
              <img
                src={assets.epahubb_graphic_captera_logo}
                className='w-[5rem] sm:w-[7rem] md:w-[9rem]'
                alt='captera logo'
              />
            </div>
            <div className='flex flex-row items-center justify-center mt-3 shadow-lg px-2 py-1 rounded-full'>
              <div className='flex flex-row items-center gap-1'>
                <img
                  src={assets.epahubb_full_rating_icon}
                  className='w-[12px]'
                  alt='rating icon'
                />
                <img
                  src={assets.epahubb_full_rating_icon}
                  className='w-[12px]'
                  alt='rating icon'
                />
                <img
                  src={assets.epahubb_full_rating_icon}
                  className='w-[12px]'
                  alt='rating icon'
                />
                <img
                  src={assets.epahubb_full_rating_icon}
                  className='w-[12px]'
                  alt='rating icon'
                />
                <img
                  src={assets.epahubb_half_rating_icon}
                  className='w-[12px]'
                  alt='rating icon'
                />
                <h2 className='ml-4 hidden sm:block font-bold text-[12px]'>
                  4.7/5
                </h2>
              </div>
            </div>
          </div>
          <div className='sm:mt-0'>
            <div className='flex items-center justify-center'>
              <img
                src={assets.epahubb_graphic_trustpilot_logo}
                className='w-[5rem] sm:w-[7rem] md:w-[9rem]'
                alt='captera logo'
              />
            </div>
            <div className='flex flex-row items-center justify-center shadow-lg px-2 py-1 rounded-full mt-3'>
              <div className='flex flex-row items-center gap-1'>
                <img
                  src={assets.epahubb_full_rating_icon}
                  className='w-[12px]'
                  alt='rating icon'
                />
                <img
                  src={assets.epahubb_full_rating_icon}
                  className='w-[12px]'
                  alt='rating icon'
                />
                <img
                  src={assets.epahubb_full_rating_icon}
                  className='w-[12px]'
                  alt='rating icon'
                />
                <img
                  src={assets.epahubb_full_rating_icon}
                  className='w-[12px]'
                  alt='rating icon'
                />
                <img
                  src={assets.epahubb_full_rating_icon}
                  className='w-[12px]'
                  alt='rating icon'
                />
                <h2 className='ml-4 hidden sm:block font-bold text-[12px]'>
                  4.95/5
                </h2>
              </div>
            </div>
          </div>
          <div className='sm:mt-0'>
            <div className='flex items-center justify-center'>
              <img
                src={assets.epahubb_graphic_crowd_logo}
                className='w-[5rem] sm:w-[7rem] md:w-[9rem]'
                alt='captera logo'
              />
            </div>
            <div className='flex flex-row items-center justify-center mt-3 shadow-lg px-2 py-1 rounded-full'>
              <div className='flex flex-row items-center gap-1'>
                <img
                  src={assets.epahubb_full_rating_icon}
                  className='w-[12px]'
                  alt='rating icon'
                />
                <img
                  src={assets.epahubb_full_rating_icon}
                  className='w-[12px]'
                  alt='rating icon'
                />
                <img
                  src={assets.epahubb_full_rating_icon}
                  className='w-[12px]'
                  alt='rating icon'
                />
                <img
                  src={assets.epahubb_full_rating_icon}
                  className='w-[12px]'
                  alt='rating icon'
                />
                <img
                  src={assets.epahubb_empty_rating_icon}
                  className='w-[12px]'
                  alt='rating icon'
                />
              </div>
              <h2 className='ml-4 hidden sm:block font-bold text-[12px]'>
                4.24/5
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-[0.5px] bg-gray-200 mt-[3rem] sm:mt-[4rem] xl:mt-[5rem] dark:bg-gray-700' />
      <div className="mt-[3rem]">
        <h2 className='text-center text-[26px] sm:text-[30px] md:text-[32px] lg:text-[35px] xl:text-[45px] xl:leading-[55px] 2xl:text-[60px] 2xl:leading-[60px] font-semibold'>
          Everything in One <br className="hidden xl:block" /> Place
        </h2>
        <p className="text-center text-gray-500 dark:text-darkText text-[14px] mt-2">Below are the services that epahubb It consult provides</p>
      </div>
      <div className='mt-[2rem] md:mt-[3rem] grid grid-cols-1 sm:grid-cols-2 sm:gap-8'>
              {itConsultancy.map((item) => {
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
    </article>
  )
}
export default EveryThingInPlace
