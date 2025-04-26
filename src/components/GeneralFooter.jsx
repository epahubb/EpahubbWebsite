import { assets } from "../assets/assets"
import { useGlobalContext } from "../Context"
import { FaSquareFacebook } from "react-icons/fa6"
import { FaTwitter } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa6";


const GeneralFooter = ({showRating=true}) => {
    const {darkMode} = useGlobalContext()
  return (
    <footer className={`pb-[2rem] px-[3%] lg:px-[6%] 2xl:px-[10%] ${showRating && 'py-[3rem] sm:py-[5rem]'} font-jakarta`}>
      <div>
        {showRating && (
          <>
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
          </>
        )}
      </div>
      {/* logo and links */}
      <div className='mt-10 sm:mt-16 flex flex-col md:gap-4 sm:flex-row sm:items-center xl:px-[3rem]'>
        <div className='hidden sm:block'>
          {darkMode ? (
            <img src={assets.epahubb_logo_two} className='w-[10rem]' alt='' />
          ) : (
            <img
              src={assets.epahubb_graphic_design_logo}
              className='w-[10rem]'
              alt=''
            />
          )}
        </div>
        <div className='grid grid-cols-2 gap-y-4 sm:grid-cols-4 sm:items-start w-full md:w-[80%] lg:w-[70%] xl:w-full font-jakarta'>
          <div>
            <h2 className='text-[15px] font-bold lg:text-[17px] xl:text-[18px]'>
              Company
            </h2>
            <ul className='dark:text-darkHeading'>
              <li>
                <a
                  href='https://facebook.com'
                  className='text-gray-500 text-[13px] lg:text-[14.5px] dark:text-darkText'
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href='https://twitter.com'
                  className='text-gray-500 text-[13px] lg:text-[14.5px] dark:text-darkText'
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href='https://instagram.com'
                  className='text-gray-500 text-[13px] lg:text-[14.5px] dark:text-darkText'
                >
                  Our Blog
                </a>
              </li>
              <li>
                <a
                  href='https://linkedin.com'
                  className='text-gray-500 text-[13px] lg:text-[14.5px] dark:text-darkText'
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='text-[15px] font-bold lg:text-[17px] xl:text-[18px]'>
              Products
            </h2>
            <ul className='dark:text-darkHeading'>
              <li>
                <a
                  href='https://kromonline.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-500 text-[13px] lg:text-[14.5px] dark:text-darkText'
                >
                  kromonline
                </a>
              </li>
              <li>
                <a
                  href='https://buydata.kromonline.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-500 text-[13px] lg:text-[14.5px] dark:text-darkText'
                >
                  buydata
                </a>
              </li>
              <li>
                <a
                  href='https://epasmart.epahubb.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-500 text-[13px] lg:text-[14.5px] dark:text-darkText'
                >
                  epasmart
                </a>
              </li>
              <li>
                <a
                  href='https://teappos.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-500 text-[13px] lg:text-[14.5px] dark:text-darkText'
                >
                  teappos
                </a>
              </li>
              <li>
                <a
                  href='https://teahrm.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-500 text-[13px] lg:text-[14.5px] dark:text-darkText'
                >
                  teahrm
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='text-[15px] font-bold lg:text-[17px] xl:text-[18px]'>
              Legal
            </h2>
            <ul className='dark:text-darkHeading'>
              <li>
                <a
                  href='https://facebook.com'
                  className='text-gray-500 text-[13px] lg:text-[14.5px] dark:text-darkText'
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href='https://facebook.com'
                  className='text-gray-500 text-[13px] lg:text-[14.5px] dark:text-darkText'
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='text-[15px] font-bold lg:text-[17px] xl:text-[18px]'>
              Connect With Us
            </h2>
            <ul className='dark:text-darkHeading'>
              <li>
                <a
                  href='https://facebook.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-500 text-[13px] lg:text-[14.5px] dark:text-darkText'
                >
                  info@epahubb.com
                </a>
              </li>
            </ul>
            <ul className='flex items-center mt-2 gap-2 group-hover:block'>
              <li className=''>
                <a
                  href='https://github.com/Banahene2041'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaSquareFacebook className='dark:text-white sm:text-[20px] text-gray-600 hover:text-black transition hover:dark:text-darkText' />
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/Banahene2041'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaGithub className='dark:text-white sm:text-[20px] text-gray-600 hover:text-black transition hover:dark:text-darkText' />
                </a>
              </li>
              <li>
                <a
                  href='https://twitter.com/gideon_owusu23?t=iwt1_svHDudwmSdjBLhlew&s=09'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaTwitter className='dark:text-white sm:text-[20px] text-gray-600 hover:text-black transition hover:dark:text-darkText' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='w-full h-[0.5px] bg-gray-200 mt-[3rem] dark:bg-gray-700' />
      <p className='mt-[2rem] text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] text-gray-500 dark:text-darkText'>
        © 2025 Epahubb. All Rights Reserved
      </p>
    </footer>
  )
}
export default GeneralFooter