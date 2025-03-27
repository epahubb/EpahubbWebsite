import React from "react"
import { assets } from "../../assets/assets"
import { SlEnvolope } from "react-icons/sl"
import { useGlobalContext } from "../../Context"

const ContactUs = () => {
  const {selectedColor} = useGlobalContext()
  return (
    <article
      id='contact-us'
      className='bg-gradient-to-b from-[#f6f6fa] to-[#FFFFFF] dark:bg-gradient-to-b dark:from-[#1e222e] dark:to-[#1e222e] flex flex-col lg:items-center lg:flex-row  pt-[3rem] pb-[6rem] px-[5%] sm:px-[8%] lg:px-[10%] xl:px-[12%] 2xl:px-[20%] font-jakarta'
    >
      <div className='px-[10%] lg:w-[50%] '>
        <div>
          <h1 className='text-center text-[2.5rem] font-medium mb-3 dark:text-darkHeading'>
            Contact Us
          </h1>
          <p className='text-center mb-[1rem] text-[1.1rem] text-[#000000B2] dark:text-darkText'>
            Email, call or complete the form to get in touch with us.
          </p>
          <h5 className='text-center text-[1rem] text-[#000000B2] dark:text-darkText'>
            <span className='text-black font-medium dark:text-darkText'>
              Email:
            </span>
            info@epahubb.com
          </h5>
          <h5 className='text-center text-[1rem] text-[#000000B2] mb-[1rem] dark:text-darkText'>
            <span className='text-black font-medium dark:text-darkText'>
              Call Us:
            </span>{" "}
            +233 53 117 8671
          </h5>
        </div>
        <div className='mb-[4rem] w-full lg:h-[34vh]'>
          <img
            src={assets.epahubb_contact_us_image}
            alt=''
            className='w-full lg:h-full object-cover'
          />
        </div>
      </div>
      <div className='bg-white px-[2rem] lg:w-[50%] py-[2rem] rounded-3xl shadow-lg dark:bg-primaryDark'>
        <h2 className='text-[2.5rem] font-medium dark:text-darkHeading'>
          Get in Touch
        </h2>
        <p className='text-[#000000B2] text-[1.13rem] mb-[2rem] dark:text-darkText'>
          You can reach us anytime...
        </p>
        <form>
          <div className='flex flex-col lg:flex-row lg:justify-between lg:gap-4 mb-4'>
            <div className='mb-4 xl:w-[50%]'>
              <input
                type='text'
                placeholder='First name'
                className='border-[1.5px] border-gray-200 dark:bg-primaryDark dark:border-black dark:shadow-md w-full px-4 lg:pl-4 lg:pr-1 py-2 rounded-full focus:outline-none dark:text-white'
              />
            </div>
            <div className='xl:w-[50%]'>
              <input
                type='text'
                placeholder='Last name'
                className='border-[1.5px] border-gray-200 dark:bg-primaryDark dark:border-black dark:shadow-md w-full px-4 py-2 lg:pl-4 lg:pr-1 rounded-full focus:outline-none dark:text-white'
              />
            </div>
          </div>
          <div className='relative'>
            <input
              type='email'
              placeholder='Your email'
              className='border-[1.5px] border-gray-200 dark:bg-primaryDark dark:border-black dark:shadow-md py-2 pl-10 pr-4 rounded-full w-[100%] mb-4 focus:outline-none dark:text-white'
            />
            <SlEnvolope className='absolute left-3 text-[1.3rem] top-[.74rem] z-20 text-[#000000B2]' />
          </div>
          <div className='relative'>
            <input
              type='tel'
              placeholder='Phone number'
              className='border-[1.5px] border-gray-200 dark:bg-primaryDark dark:border-black dark:shadow-md py-2 pl-[3.6rem] pr-4 rounded-full w-[100%] mb-5 focus:outline-none dark:text-white'
            />
            <p className='border-r-[1.5px] absolute z-10 py-2 pr-2 top-0 left-2 text-[#000000B2] border-gray-200 dark:border-black'>
              +233
            </p>
          </div>
          <div>
            <textarea
              name='comment'
              id='comment'
              placeholder='How can we help you?'
              className='border-[1.5px] border-gray-200 dark:bg-primaryDark dark:border-black dark:shadow-md w-[100%] h-[7rem] p-4 rounded-xl mb-4 focus:outline-none dark:text-white'
            ></textarea>
          </div>
          <div className='flex items-center justify-center mb-5'>
            <button
              type='submit'
              className={`bg-[${selectedColor}] text-[1.15rem] w-[100%] rounded-full py-2 text-white`}
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </article>
  )
}

export default ContactUs
