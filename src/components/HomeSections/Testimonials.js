import { assets } from "../../assets/assets"
import { customerReviews } from "../../utils/data"
import { Splide, SplideSlide } from "@splidejs/react-splide"

const Testimonials = () => {
  return (
    <article
      id='testimonials'
      className='pt-[3.5rem] md:pt-[5rem] pb-[5rem] lg:pb-[8rem] bg-white dark:bg-primaryDark dark:text-darkHeading font-jakarta px-[3%] lg:px-[4%] xl:px-[5%] 2xl:px-[10%] bg-gradient-to-b from-[#f6f6fa] to-[#FFFFFF] dark:bg-gradient-to-b dark:from-[#1e222e] dark:to-[#1e222e]'
    >
      <div data-aos='fade-up'>
        <h1
          className='text-center text-[26px] font-semibold md:text-[40px] md:font-bold md:leading-[50px]
      lg:text-[50px] lg:leading-[55px] xl:text-[60px] xl:leading-[70px] 2xl:text-[67px] 2xl:leading-[80px] text-lightHeading dark:text-darkHeading'
        >
          Here’s what our amazing clients <br className='hidden md:block' /> are
          saying
        </h1>
      </div>
      {/* Carousel */}
      <Splide
        options={{
          type: "loop",
          perPage: 3,
          perMove: 1,
          gap: "3.5rem",
          autoplay: true,
          interval: 4000,
          arrows: false,
          pagination: true,
          breakpoints: {
            767: { perPage: 1 },
            768: { perPage: 2, gap: "1.4rem" },
            1024: { perPage: 2, gap: "2rem" },
          },
          transitionSpeed: 600,
          easing: "cubic-bezier(0.25, 0.8, 0.25, 1)",
        }}
        className='mt-[4rem] md:mt-[5rem]'
      >
        {customerReviews.map((customer, index) => (
          <SplideSlide key={index}>
            <div className='p-[1.5rem] md:px-[1.5rem] md:py-[2rem] bg-white 2xl:px-[2.4rem] 2xl:py-[4rem] dark:bg-secondaryDark shadow-md rounded-xl border border-gray-200 dark:border-transparent dark:shadow-2xl dark:bg-primaryDark relative'>
              <p className='text-[17px] font-semibold mb-[1rem] dark:text-darkText text-lightHeading'>
                {customer.review}
              </p>
              <div className='flex items-center gap-x-[1rem] xl:mt-[2rem]'>
                <img
                  src={customer.image}
                  alt={customer.name}
                  className='w-[4rem] h-[4rem] object-cover rounded-full'
                />
                <div>
                  <h2 className='text-lg font-bold dark:text-darkHeading'>
                    {customer.name}
                  </h2>
                  <h4 className='text-sm text-gray-500 dark:text-darkText'>
                    {customer.company}
                  </h4>
                </div>
              </div>
              <img
                src={assets.quote_icon}
                className='absolute top-1 md:top-2 2xl:top-[2.3rem] w-[3rem] 2xl:w-[3.2rem]'
                alt=''
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </article>
  )
}

export default Testimonials
