import { assets } from "../../assets/assets"

const HallMark = () => {
return (
    <article className='py-[2rem] sm:py-[5rem] px-[3%] xl:px-[12%] 2xl:px-[14%] font-jakarta'>
        <div className='bg-[#F4F4F9] dark:bg-gradient-to-b dark:from-[#1e222e] dark:to-[#1e222e] p-4 py-8 md:px-6 md:py-10 lg:px-10 xl:px-14 2xl:py-14 flex flex-col-reverse md:flex-row items-center justify-between rounded-lg'>
            <div className='mt-10 md:mt-0 md:w-[50%] xl:w-[50%]'>
                <h2 className='text-[12px] uppercase font-semibold text-gray-500 sm:text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[17px] dark:text-darkText'>
                    Our hallmark
                </h2>
                <h4 className='font-bold mt-4 text-[20px] sm:text-[25px] md:text-[20px] lg:text-[25px] xl:text-[40px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[60px] xl:mt-6'>
                    Mobile Application Development
                </h4>
                <p className='mt-3 text-[12.5px] sm:text-[13px] md:text-[12.5px] lg:text-[14px] xl:text-[17px] text-gray-500 font-medium xl:mt-6 dark:text-darkText'>
                    Epahubb delivers custom, secure, and high-performance mobile apps
                    for iOS, Android, and hybrid platforms. With user-centric design,
                    agile development, and 24/7 support, we ensure seamless
                    functionality, scalability, and long-term reliability.
                </p>
                <ul className='list-disc pl-5 mt-4 lg:mt-6 text-[16px] text-gray-500 dark:text-darkText font-medium'>
                    <li className='text-[12.6px] sm:text-[13px] md:text-[12.5px] lg:text-[13.5px] xl:text-[16px]'>
                            Building intuitive and user-friendly mobile experiences.
                    </li>
                    <li className='text-[12.6px] sm:text-[13px] md:text-[12.5px] lg:text-[13.5px] xl:text-[16px] mt-2'>
                            Ensuring high performance and security in mobile applications.
                    </li>
                </ul>
            </div>
            <div className='md:w-[50%] xl:w-[50%] flex items-center justify-center'>
                <img
                    src={assets.hero_image}
                    className='md:w-[80%] xl:w-[90%] 2xl:w-[100%]'
                    alt=''
                />
            </div>
        </div>
    </article>
)
}
export default HallMark