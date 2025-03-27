import React, { useState, useEffect } from "react"
import { IoMdClose } from "react-icons/io"
import { assets } from "../assets/assets"
import { useGlobalContext } from "../Context"

const ModalComponent = () => {
  const { openProjectModal } = useGlobalContext()
  const [showModal, setShowModal] = useState(false)
  const [animateCard, setAnimateCard] = useState(false)

  useEffect(() => {
    const modalDismissed = localStorage.getItem("modalDismissed")
    if (!modalDismissed) {
      const delayModal = setTimeout(() => {
        setShowModal(true)
        setTimeout(() => setAnimateCard(true), 100)
      }, 4000)

      return () => clearTimeout(delayModal)
    }
  }, [])

  const handleCloseModal = () => {
    setAnimateCard(false)
    setTimeout(() => {
      setShowModal(false)
      localStorage.setItem("modalDismissed", "true")
    }, 300)
  }

  return (
    <>
      {showModal && (
        <div
          className='fixed inset-0 font-jakarta bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300'
          role='dialog'
        >
          <div
            className={`bg-primaryBackground w-[90%] md:w-[60%] lg:w-[45%] xl:w-[35%] 2xl:w-[30%] px-4  py-2 rounded-lg shadow-lg transform transition-transform duration-300 ${
              animateCard
                ? "translate-y-0 opacity-100"
                : "-translate-y-12 opacity-0"
            }`}
          >
            {/* modal content */}
            <div className='py-1'>
              {/* button to close the modal */}
              <div className='flex justify-end items-center'>
                <button
                  className='bg-white rounded-full p-[.1rem]'
                  onClick={handleCloseModal}
                >
                  <IoMdClose className='text-[19px]' />
                </button>
              </div>
              {/* button to close the model end */}
              <span className='flex relative py-6 md:py-7 2xl:py-10 top-3'>
                <img
                  src={assets.epahubb_logo_two}
                  alt=''
                  className='w-[7rem] md:w-[8.5rem] 2xl:w-[13rem] object-cover absolute top-[-2rem] left-[45%] -translate-x-[45%]'
                />
              </span>
              {/* model text content */}
              <div className='text-white gap-1 uppercase font-bold flex items-center justify-center'>
                <div>
                  <h1 className='text-[13px] md:text-[19px]  md:tracking-tighter 2xl:text-[26px]'>
                    let's
                  </h1>
                  <h2 className='mt-[-0.3rem] text-[13px] md:text-[19px] md:mt-[-0.6rem] 2xl:mt-[-0.9rem] md:tracking-tighter 2xl:text-[26px]'>
                    get
                  </h2>
                </div>
                <div>
                  <h1 className='text-[23px] md:text-[50px] 2xl:text-[58px] relative md:tracking-tighter'>
                    <span className='md:font-extrabold'>Down</span>
                    <span className='absolute text-[12px] md:text-[14px] bottom-0 md:bottom-2 md:right-[-1.5rem] md:tracking-normal'>
                      to
                    </span>
                  </h1>
                </div>
              </div>
              {/* project text */}
              <h1 className='text-center uppercase font-bold text-[24px] md:text-[48px] 2xl:text-[60px] md:tracking-tighter md:font-extrabold text-white mt-[-0.7rem] md:mt-[-1.5rem] 2xl:mt-[-2rem]'>
                project
              </h1>
              {/* get started button */}
              <div className='grid place-items-center mt-3'>
                <button
                  className='text-[11px] py-1 px-2 rounded-md bg-[#c64a4a] text-white md:py-2 md:text-[14px] 2xl:text-[17px] 2xl:px-8'
                  onClick={() => {
                    handleCloseModal()
                    openProjectModal()
                  }}
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ModalComponent
