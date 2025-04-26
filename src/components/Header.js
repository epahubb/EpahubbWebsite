import { Link } from "react-router-dom"
import { assets } from "../assets/assets"
import { useGlobalContext } from "../Context"
import { links } from "../utils/data"
import Sidebar from "./HomeSections/Sidebar"
import { HamburgerDark, HamburgerWhite } from "./icons"
import { MdOutlineArrowDropDown } from "react-icons/md"

const Header = () => {
  const { darkMode, openSidebar, closeSideBar, selectedColor, isSticky } =
    useGlobalContext()

  const isSmallScreen = window.innerWidth < 1024

  const productLinks = links[2].subLinks
  const servicesLinks = links[1].subLinks

  return (
    <header
      className={`flex justify-between lg:justify-around w-full px-[8%] items-center h-[8vh] lg:h-[9vh] xl:h-[10vh] font-jakarta 
    fixed top-0 left-0 right-0 transition-all duration-500 ease-in-out z-40
    ${
      isSticky
        ? "lg:fixed shadow-sm bg-[#FFFFFFFA] dark:bg-[#1d222f] lg:bg-white-transparent lg:backdrop-blur-md lg:dark:bg-[#1d222f] xl:h-[9vh]"
        : "lg:bg-primaryBackground dark:bg-[#1d222f] lg:dark:bg-primaryBackground"
    }`}
    >
      <Link to={"/"}>
        {isSticky ? (
          <>
            {isSmallScreen ? (
              <>
                <img
                  src={assets.epahubb_logo}
                  className='w-[7.3rem] md:w-[8rem] lg:w-[8rem] xl:w-[9rem]'
                  alt=''
                />
              </>
            ) : (
              <>
                <img
                  src={assets.epahubb_logo}
                  className='w-[7.3rem] md:w-[8rem] lg:w-[7rem] xl:w-[8rem]'
                  alt=''
                />
              </>
            )}
          </>
        ) : (
          <>
            {isSmallScreen ? (
              <>
                <img
                  src={assets.epahubb_logo}
                  className='w-[7.3rem] md:w-[8rem] lg:w-[8rem] xl:w-[9rem]'
                  alt=''
                />
              </>
            ) : (
              <>
                <img
                  src={assets.epahubb_logo_two}
                  className='w-[7.3rem] md:w-[8rem] lg:w-[8rem] xl:w-[9rem]'
                  alt=''
                />
              </>
            )}
          </>
        )}
      </Link>

      {/* links start */}
      <div className='hidden lg:block'>
        <ul className='flex items-center gap-[2rem]'>
          <li className='flex items-center gap-1 relative cursor-pointer z-0 group py-[.6rem]'>
            <span
              className={`capitalize lg:text-[15px] xl:text-[17px] font-medium ${
                isSticky ? "dark:text-darkText" : "text-white"
              }`}
            >
              <span>About Us</span>
            </span>
            <span>
              <MdOutlineArrowDropDown
                className={`text-[1.5rem] ${
                  isSticky ? "dark:text-darkText" : "text-white"
                }`}
              />
            </span>
            {/* sublinks of about */}
            <div className='absolute top-[2.8rem] left-[-1.5rem] w-max bg-white dark:bg-[#403f52] py-[1rem] pl-[1rem] pr-[2rem] rounded-lg border-none shadow-md hidden group-hover:block transition-all duration-300 ease-in-out'>
              <ul className='flex flex-col gap-[.5rem]'>
                <span className='py-[.4rem] px-[.5rem] rounded-md hover:bg-[#e9e9e9] dark:hover:bg-[rgba(0,0,0,0.1)] hover:text-[#c64a4a] dark:hover:text-[#c64a4a] transition-colors duration-200 font-semibold dark:text-darkText'>
                  <a href='#why-epahubb'>Why Epahubb?</a>
                </span>
                <span className='py-[.4rem] px-[.5rem] rounded-md hover:bg-[#e9e9e9] dark:hover:bg-[rgba(0,0,0,0.1)] hover:text-[#c64a4a] dark:hover:text-[#c64a4a] transition-colors duration-200 font-semibold dark:text-darkText'>
                  <a href='#integration'>Integration</a>
                </span>
                <span className='py-[.4rem] px-[.5rem] rounded-md hover:bg-[#e9e9e9] dark:hover:bg-[rgba(0,0,0,0.1)] hover:text-[#c64a4a] dark:hover:text-[#c64a4a] transition-colors duration-200 font-semibold dark:text-darkText'>
                  <a href='#how-it-works'>How It Works</a>
                </span>
                <span className='py-[.4rem] px-[.5rem] rounded-md hover:bg-[#e9e9e9] dark:hover:bg-[rgba(0,0,0,0.1)] hover:text-[#c64a4a] dark:hover:text-[#c64a4a] transition-colors duration-200 font-semibold dark:text-darkText'>
                  <a href='#testimonials'>Testimonials</a>
                </span>
                <span className='py-[.4rem] px-[.5rem] rounded-md hover:bg-[#e9e9e9] dark:hover:bg-[rgba(0,0,0,0.1)] hover:text-[#c64a4a] dark:hover:text-[#c64a4a] transition-colors duration-200 font-semibold dark:text-darkText'>
                  <a href='#best-solution'>Best Solution</a>
                </span>
              </ul>
            </div>
            {/* sublinks of about ends */}
          </li>
          <li className='flex items-center gap-1 relative cursor-pointer z-0 group py-[.6rem]'>
            <span
              className={`capitalize lg:text-[15px] xl:text-[17px] font-medium ${
                isSticky ? "dark:text-darkText" : "text-white"
              } `}
            >
              Services
            </span>
            <span>
              <MdOutlineArrowDropDown
                className={`text-[1.5rem] ${
                  isSticky ? "dark:text-darkText" : "text-white"
                }`}
              />
            </span>
            {/* services links */}
            <div className='absolute capitalize shadow-md top-[2.6rem] left-1/2 transform -translate-x-1/2 bg-white rounded-[.3rem] dark:bg-[#403f52] hidden group-hover:block'>
              <div className='w-max grid grid-cols-3 gap-4 p-4'>
                {servicesLinks.map((sublink, index) => {
                  return (
                    <span
                      key={index}
                      className='py-[.4rem] px-[1rem] rounded-md hover:bg-[#e9e9e9] dark:hover:bg-[rgba(0,0,0,0.1)] hover:text-[#c64a4a] dark:hover:text-[#c64a4a] transition-colors duration-200 font-semibold dark:text-darkText'
                    >
                      <Link to={sublink.url}>{sublink.name}</Link>
                    </span>
                  )
                })}
              </div>
            </div>
          </li>
          <li className='flex items-center gap-1 relative cursor-pointer py-[.6rem] group'>
            <span
              href='#a'
              className={`capitalize lg:text-[15px] xl:text-[17px] font-medium ${
                isSticky ? "dark:text-darkText" : "text-white"
              } `}
            >
              Products
            </span>
            <span>
              <MdOutlineArrowDropDown
                className={`text-[1.5rem] ${
                  isSticky ? "dark:text-darkText" : "text-white"
                }`}
              />
            </span>
            {/* product links start */}
            <div className='absolute capitalize shadow-md top-[2.6rem] left-1/2 transform -translate-x-1/2 bg-white rounded-[.3rem] dark:bg-[#403f52] hidden group-hover:block'>
              <div className='w-max grid grid-cols-3 gap-4 p-4'>
                {productLinks.map((sublink, index) => {
                  return (
                    <span
                      key={index}
                      className='py-[.4rem] px-[1rem] rounded-md hover:bg-[#e9e9e9] dark:hover:bg-[rgba(0,0,0,0.1)] hover:text-[#c64a4a] dark:hover:text-[#c64a4a] transition-colors duration-200 font-semibold dark:text-darkText'
                    >
                      <a
                        href={sublink.url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {sublink.name}
                      </a>
                    </span>
                  )
                })}
              </div>
            </div>
            {/* product links ends */}
          </li>
          <li>
            <a
              href='#faqs'
              className={`lg:text-[15px] xl:text-[17px] font-medium ${
                isSticky ? "dark:text-darkText" : "text-white"
              } `}
            >
              FAQs
            </a>
          </li>
          <li>
            <a
              href='#contact-us'
              className={`lg:text-[15px] xl:text-[17px] font-medium ${
                isSticky ? "dark:text-darkText" : "text-white"
              } `}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      {/* links ends */}
      <div>
        <a
          href='https://portal.epahubb.com/sign-in/'
          target='_blank'
          rel='noreferrer'
          className={`capitalize text-sm xl-[0.9rem] hidden bg-[${selectedColor}] text-white lg:block lg:px-[1rem] lg:py-[.3rem] xl:px-[2rem] xl:py-[.6rem] rounded-[.2rem] font-medium`}
          style={{ backgroundColor: selectedColor }}
        >
          Sign In
        </a>
        <div className='lg:hidden'>
          <button onClick={openSidebar}>
            {darkMode ? <HamburgerWhite /> : <HamburgerDark />}
          </button>
        </div>
      </div>
      <Sidebar darkMode={darkMode} closeSideBar={closeSideBar} />
    </header>
  )
}

export default Header
