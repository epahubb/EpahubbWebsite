import React from "react"
import { Link } from "react-router-dom"
import { assets } from "../assets/assets"

const ErrorPage = () => {
  return (
    <section className='min-h-[100vh] text-center w-full flex justify-center items-center px-[.1rem]'>
      <div>
        <div className='flex items-center justify-center'>
          <img src={assets.error_image} alt='' className='mt-[-5rem]' />
        </div>
        <h3 className='mb-1 font-semibold'>Ohh! page not found</h3>
        <p className='leading-[1.5rem] mt-[.3rem] text-[13px] lg:text-[15px] mb-[.2rem] sm:mb-[.4rem]'>
          we can't seem to find the page you are looking for
        </p>
        <Link
          to={"/"}
          className='text-[#3d50a9] font-medium text-[14px] sm:text-[16px]'
        >
          Back Home
        </Link>
      </div>
    </section>
  )
}

export default ErrorPage
