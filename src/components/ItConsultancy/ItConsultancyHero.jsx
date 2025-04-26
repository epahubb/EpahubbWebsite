import {assets} from '../../assets/assets'
const ItConsultancyHero = () => {
  return (
    <article
      id='about-us'
      className='relative py-[2rem] h-[26rem] sm:h-[30rem] lg:h-[37rem] xl:h-[42rem] 2xl:h-[45rem] mt-[8vh] lg:mt-[9vh] xl:mt-[10vh] px-[3%] 2xl:px-[14%] bg-itHeroBackground dark:bg-itHeroBackground rounded-b-[2.4rem] sm:rounded-b-[4rem]'
    >
      <h2 className='text-center text-[#1c4268] text-[26px] sm:text-[30px] md:text-[32px] lg:text-[35px] xl:text-[45px] 2xl:text-[60px] 2xl:leading-[70px] font-semibold'>
        Transforming Businesses <br className='hidden lg:block' /> with
        Technology
      </h2>
      <p className='text-center mt-2 text-gray-500 font-medium text-[14px] sm:text-[15px]'>
        At Epahubb, we provide expert IT consultancy to help businesses grow,
        innovate, and <br className='hidden lg:block' /> stay secure with
        tailored technology solutions.
      </p>
      <div className='flex items-center justify-center mt-6'>
        <button className='bg-[#BE6CBE] flex items-center justify-center gap-2 px-4 py-2 rounded-[3px] sm:py-[10px] sm:px-[18px] xl:px-[22px]'>
          <p className='text-white text-[13px] sm:text-[14px] md:text-[16px] xl:text-[17px] font-semibold'>
            See how it works
          </p>
          <img
            src={assets.epahubb_small_play_button}
            className='w-[0.9rem] md:w-auto'
            alt=''
          />
        </button>
      </div>
      <div className='absolute -bottom-3 left-1/2 -translate-x-1/2 w-[85%] z-10 sm:w-[70%] lg:w-[70%] xl:w-[60%] 2xl:w-[55%]'>
        <img
          src={assets.epahubb_itConsult_hero}
          className='h-[10rem] sm:h-[17rem] lg:h-[20rem] xl:h-[23rem] 2xl:h-[25rem] w-full rounded-lg sm:rounded-[10px] object-cover'
          alt='hero'
        />
      </div>
      <svg
        className='absolute bottom-0 left-0 w-full h-10 sm:h-12 text-white dark:text-primaryDark'
        viewBox='0 0 100 10'
        preserveAspectRatio='none'
      >
        <path d='M0,0 C25,10 75,10 100,0 V10 H0 Z' fill='currentColor' />
      </svg>
    </article>
  )
}
export default ItConsultancyHero