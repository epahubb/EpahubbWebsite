import { assets } from "../../assets/assets"
import { useGlobalContext } from "../../Context"

const GetStarted = () => {
    const { selectedColor, openProjectModal } = useGlobalContext()

return (
    <article className='py-[5rem] px-[3%] xl:px-[12%] 2xl:px-[14%] font-jakarta'>
        <h2 className='text-center text-[18px] font-semibold text-[#353F4F] dark:text-white sm:text-[20px] lg:text-[22px]'>
            Epahubb is loved and trusted by thousands
        </h2>
        <div className='mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6 items-center justify-items-center'>
            <img
                src={assets.epahubb_itConsult_intDeco}
                className='w-[8rem] lg:w-[9rem] xl:w-auto'
                alt='intDeco'
            />
            <img
                src={assets.epahubb_itConsult_spark}
                className='w-[8rem] lg:w-[9rem] xl:w-auto'
                alt='spark'
            />
            <img
                src={assets.epahubb_itConsult_mountain}
                className='w-[8rem] lg:w-[9rem] xl:w-auto'
                alt='mountain'
            />
            <img
                src={assets.epahubb_itConsult_lorem_log}
                className='w-[8rem] lg:w-[9rem] xl:w-auto'
                alt='lorem'
            />
            <img
                src={assets.epahubb_itConsult_pegasus}
                className='w-[8rem] lg:w-[9rem] xl:w-auto'
                alt='pegasus'
            />
            <img
                src={assets.epahubb_itConsult_factory}
                className='w-[8rem] lg:w-[9rem] xl:w-auto'
                alt='factory'
            />
        </div>
        <div className='mt-[3rem] md:mt-[6rem] pt-[1rem] sm:pt-0 bg-[#F3F1FC] text-black dark:bg-gradient-to-b dark:from-[#1e222e] dark:to-[#1e222e] dark:text-white pl-[1rem] md:pl-[2rem] lg:pl-[3rem] xl:pl-[4rem] flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4 rounded-md md:rounded-xl lg:rounded-2xl'>
            <div className='sm:w-1/2'>
                <h2 className='font-bold text-[1.4rem] sm:text-[1.8rem] xl:text-[2.2rem] 2xl:text-[2.8rem]'>
                    Getting started with Epahubb today!
                </h2>
                <p className='text-[13.5px] mt-4 sm:text-[15px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] text-gray-500 dark:text-darkText'>
                    Transform your business with Epahubb’s technology, cybersecurity,
                    and IT solutions for secure infrastructure, workflow optimization,
                    and consultancy..
                </p>
                <button
                    className='text-white text-[13px] sm:text-[15px] 2xl:text-[17px] hover:!bg-blue-700 transition mt-4 px-7 py-2 sm:px-10 sm:py-[10px] rounded-[3px]'
                    style={{ backgroundColor: selectedColor }}
                    onClick={openProjectModal}
                >
                    Get Start
                </button>
            </div>
            <div className='mt-8 sm:mt-0 w-full sm:w-1/2 md:w-1/2'>
                <img
                    src={assets.epahubb_itConsult_banner}
                    className='md:h-full'
                    alt='banner'
                />
            </div>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-between mt-[2rem] sm:mt-[3rem]'>
            <h2 className='font-bold text-[24px] md:text-[20px] lg:text-[22px] xl:text-[35px] xl:leading-[45px] 2xl:text-[38px] 2xl:leading-[45px] opacity-70 text-center md:text-start'>
                Stay up to date with our news, ideas and updates
            </h2>
            <div className='flex flex-col md:flex-row items-center md:justify-end gap-4 mt-4 md:mt-0 w-full'>
                <div className="w-full md:w-[60%]">
                    <input
                        type='text'
                        placeholder='Your email address'
                        className='border border-gray-200 py-[8px] lg:py-[10px] px-2 w-full self-stretch outline-none'
                        style={{ borderRadius: "5px",fontSize: "14px" }}
                    />
                </div>
                <button
                    className='text-white text-[13px] sm:text-[15px] 2xl:text-[17px] hover:!bg-blue-700 transition mt-4 md:mt-0 px-7 py-2 sm:px-10 sm:py-[10px] md:px-4 md:py-[8px] lg:py-[10px] xl:py-[8px] rounded-[3px]'
                    style={{ backgroundColor: selectedColor }}
                >
                    Subscribe Now
                </button>
            </div>
        </div>
    </article>
)
}
export default GetStarted