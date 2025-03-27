import React from "react"
import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <section className='bg-white py-[3rem] dark:bg-primaryDark px-[5%] sm:px-[8%] lg:px-[10%] border-t-[1.5px] border-t-gray-100 dark:border-t-[#474b5a] font-jakarta'>
      <div className='rounded-3xl flex flex-col lg:flex-row justify-between bg-gray-100 dark:bg-black-300 xl:px-[5%] py-[2.5rem] px-[1rem]'>
        {/* first section */}
        <div className='lg:w-[35%] 2xl:w-[45%]'>
          <h2 className='text-purple-600 text-center lg:text-start text-[2rem] font-bold mb-2'>
            Epahubb
          </h2>
          <p className='text-center lg:text-start text-[1.1rem] text-[#000000B2] dark:text-darkText mb-8'>
            Epahubb is a tech firm that provides innovative solutions,
            leveraging advanced technologies and expert consulting to help
            businesses. They focus on solving current challenges while shaping
            the future of technology
          </p>
          <div className='flex items-center justify-center gap-4'>
            <div className='bg-[#9747FF] px-[.6rem] py-[.3rem] rounded-md'>
              <img src={assets.epahubb_facebook_icon} alt='' className='' />
            </div>
            <div className='bg-[#9747FF] px-[.2rem] py-[.21rem] rounded-md'>
              <img src={assets.epahubb_twitter_icon} alt='' className='' />
            </div>
            <div className='bg-[#9747FF] px-[.2rem] py-[.21rem] rounded-md'>
              <img src={assets.epahubb_instagram_icon} alt='' className='' />
            </div>
          </div>
        </div>
        {/* second section */}
        <div className='lg:w-[65%] 2xl:w-[55%] xl:gap-x-[5rem] lg:flex justify-end'>
          <div className='mt-[5rem] lg:mt-0 pl-[2rem]'>
            <h3 className='text-[1.4rem] font-semibold mb-2 dark:text-darkHeading'>
              Connect With Us
            </h3>
            <ul className='list-disc dark:text-darkHeading pl-[1rem]'>
              <li>
                <a
                  href='https://facebook.com'
                  className='text-[#00000080] dark:text-darkText text-[1.05rem]'
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href='https://twitter.com'
                  className='text-[#00000080] dark:text-darkText text-[1.05rem]'
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href='https://instagram.com'
                  className='text-[#00000080] dark:text-darkText text-[1.05rem]'
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href='https://linkedin.com'
                  className='text-[#00000080] dark:text-darkText text-[1.05rem]'
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          {/* third section */}
          {/* fourth section */}
          <div className='mt-[3rem] lg:mt-0 pl-[2rem]'>
            <h3 className='text-[1.4rem] font-semibold mb-2 dark:text-darkHeading'>
              Connect With Us
            </h3>
            <ul className='list-disc dark:text-darkHeading pl-[1rem]'>
              <li>
                <a
                  href='https://facebook.com'
                  className='text-[#00000080] dark:text-darkText text-[1.05rem]'
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href='https://twitter.com'
                  className='text-[#00000080] dark:text-darkText text-[1.05rem]'
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href='https://instagram.com'
                  className='text-[#00000080] dark:text-darkText text-[1.05rem]'
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href='https://linkedin.com'
                  className='text-[#00000080] dark:text-darkText text-[1.05rem]'
                >
                  Terms of Services
                </a>
              </li>
            </ul>
          </div>
          {/* fifth section */}
        </div>
      </div>
      <div className='flex flex-col-reverse text-center mt-[2rem] lg:flex-row lg:items-center lg:justify-center'>
        <p className='flex items-center justify-center gap-2 dark:text-darkText'>
          Copyright 2025<span className="mr-1">©️</span>
        </p>
        <p className='dark:text-darkText'>
          All Rights Reserved. Developed by Epahubb - Consult
        </p>
      </div>
    </section>
  )
}

export default Footer
