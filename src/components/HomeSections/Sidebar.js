import { useState } from "react"
import { useGlobalContext } from "../../Context"
import { ClosesHamburgerDark, ClosesHamburgerWhite } from "../icons"
import { links } from "../../utils/data"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { IoMoonOutline } from "react-icons/io5"
import { LuSunMoon } from "react-icons/lu"

const Sidebar = () => {
  const { darkMode, closeSideBar, isSidebarOpen,toggleTheme } = useGlobalContext()
  const [activeLink, setActiveLink] = useState(null)

  const handleActiveLink = (id) => {
    setActiveLink((prev) => (prev === id ? null : id))
  }

  return (
    <div
      className={`lg:hidden fixed top-0 right-0 left-0 bottom-0 z-50 flex ${
        isSidebarOpen ? "translate-x-0" : "translate-x-[100%]"
      } transition-transform duration-[.4s] ease-in-out`}
    >
      <div className='h-full w-[20%] md:w-[60%]'>
        <div className='h-[8vh] bg-white dark:bg-sidebarDarkHeader flex items-center justify-end pr-[1rem]'>
          <button onClick={closeSideBar}>
            {darkMode ? <ClosesHamburgerDark /> : <ClosesHamburgerWhite />}
          </button>
        </div>
        <div
          className='h-[92vh] bg-dark-transparent'
          onClick={closeSideBar}
        ></div>
      </div>
      <div className='h-full w-[80%] md:w-[40%] bg-primary dark:bg-sidebarDark border-l-[1.5px] border-l-[#e1e1e1] dark:border-none relative'>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <button
                className={`w-full flex items-center justify-between px-4 py-[.8rem] text-left border-b-[0.1px] border-t-[0.1px] dark:border-b-[#262b39] dark:border-t-[#262b39] hover:bg-[#e9e9e9] dark:hover:bg-[rgba(0,0,0,0.1)]
                transition-colors duration-200`}
                onClick={() => handleActiveLink(link.id)}
              >
                <span className='text-[#747474] font-semibold text-[16px] dark:text-primary'>
                  {link.name}
                </span>
                {link.subLinks?.length > 0 && (
                  <MdOutlineKeyboardArrowDown
                    className={`transform ${
                      activeLink === link.id ? "rotate-180" : ""
                    } transition-transform duration-[.8s] ease-in-out text-2xl text-[#a1a1a1] dark:text-primary`}
                  />
                )}
              </button>

              <ul
                className={`overflow-hidden transition-[max-height] duration-[.8s] ease-in-out ${
                  activeLink === link.id ? "max-h-[1000px]" : "max-h-0"
                }`}
                onClick={closeSideBar}
              >
                {link.subLinks?.length > 0 &&
                  link.subLinks.map((sublink, index) => (
                    <li
                      key={index}
                      className='text-[14.5px] text-[#747474] font-semibold dark:text-[#b1b7cd] px-3 py-[.66rem]'
                    >
                      <a
                        href={sublink.url}
                        target={link.id === 3 ? "_blank" : "_self"}
                        rel={link.id === 3 ? "noopener noreferrer" : ""}
                      >
                        {sublink.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
        </ul>
        <button className='w-full flex'>
          <a
            href='https://epahubb.com'
            className='bg-[#c64a4a] w-[100%] px-4 py-[.8rem] text-[16px] text-white font-semibold text-start'
          >
            Sign in
          </a>
        </button>
        <div className='absolute bottom-2 left-0 right-0 grid place-items-center'>
          <button onClick={toggleTheme} className="flex items-center gap-4 py-4">
            <span className='dark:text-[#fd7e41]'>
              {darkMode ? (
                <>
                  <LuSunMoon className="text-[20px]" />
                </>
              ) : (
                <>
                  <IoMoonOutline className="text-[20px]" />
                </>
              )}
            </span>
            <span className='text-[16px] dark:text-[#fd7e41]'>
              Change appearance
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
