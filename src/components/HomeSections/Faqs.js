import { useState } from "react"
import { assets } from "../../assets/assets"
import { faqs } from "../../utils/data"

const Faqs = () => {
  const [activeFaq, setActiveFaq] = useState(null)

  const handleActiveFaq = (id) => {
    setActiveFaq((prev) => (prev === id ? null : id))
  }

  return (
    <article
      id='faqs'
      className='bg-white dark:bg-primaryDark dark:text-darkHeading font-jakarta px-[3%] lg:px-[4%] xl:px-[5%] 2xl:px-[8%] pb-[5rem] xl:pb-[1rem]'
    >
      {/* title */}
      <h1 data-aos='fade-down' className='text-center text-[26px] font-semibold md:text-[40px] md:font-bold md:leading-[50px] lg:text-[50px] lg:leading-[55px] xl:text-[60px] xl:leading-[70px] 2xl:text-[67px] 2xl:leading-[80px] text-lightHeading dark:text-darkHeading'>
        Questions & Answers
      </h1>

      {/* FAQs Section */}
      <div className='flex flex-col md:flex-row mt-[1rem] md:mt-[5rem] xl:mt-[2rem] items-center gap-y-[2rem] md:gap-x-[2rem] lg:gap-x-[4rem]'>
        <div data-aos='zoom-in' className="md:w-[50%]">
          <img src={assets.faqs_image} alt='faqs' />
        </div>
        <div data-aos='fade-left' className="md:w-[50%]">
          <button className='bg-[#7827E6] text-white text-[16px] p-[.5rem] font-semibold rounded-[5px] xl:text-[18px] tracking-wider'>
            Frequently Asked
          </button>
          <h1 className='mt-[1rem] text-[21px] font-semibold xl:text-[35px]'>
            Get The Answers You Need
          </h1>
          <p className='dark:text-darkText text-lightText mt-[1rem] xl:text-[19px]'>
            Your Comprehensive Guide to Our Services, Ordering Process, Payments, Shipping, Returns, and Everything Else You Need to Know
          </p>

          {/* FAQs */}
          <div className='mt-[2rem]'>
            {faqs.map((faq, index) => {
              const { id, question, answer } = faq
              const isActive = activeFaq === id

              return (
                <div
                  key={id}
                  className={`bg-purple-20 ${isActive && 'bg-purple-600 text-white'} transition-all duration-300 ease-in-out px-2 rounded-md`}
                >
                  <div
                    className='flex items-center justify-between cursor-pointer text-[16px] font-semibold h-[4rem] xl:px-[.5rem] mt-[1rem] 2xl:mt-[1.5rem] gap-x-[2rem]'
                    onClick={() => handleActiveFaq(id)}
                  >
                    <span className="xl:text-[18px]">
                      {index + 1}. {question}
                    </span>
                    <span>
                      <img
                        src={assets.faqs_arrow_up}
                        alt='toggle'
                        className='w-4 h-4'
                      />
                    </span>
                  </div>
                  <div
                    className={`overflow-hidden transition-[max-height] duration-[0.7s] ease-in-out ${
                      isActive ? "max-h-[200px] p-2 xl:pb-4" : "max-h-0"
                    }`}
                  >
                    <p className='text-[15px]'>
                      {answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </article>
  )
}

export default Faqs
