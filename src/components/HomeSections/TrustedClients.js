import { assets } from "../../assets/assets"

const TrustedClients = () => {
  return (
    <article className='py-[2rem] md:py-[3rem] lg:py-[4rem] xl:py-[5rem] font-jakarta dark:bg-primaryDark px-[3%] lg:px-[4%] xl:px-[5%] 2xl:px-[10%]'>
      <h1 className="text-primaryDark dark:text-darkHeading text-center font-semibold text-[19px] md:text-[24px]">Epahubb Consult is loved and trusted by thousands:</h1>
      <div className="mt-[3rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 place-items-center items-center justify-start gap-y-[2.5rem] lg:gap-x-[2rem]">
        <div><img src={assets.steward_pharmacy_logo} alt="steward pharmacy" /></div> 
        <div><img src={assets.gilat_chemist_logo} alt="gilat log" /></div> 
        <div><img src={assets.trufunder_logo} alt="trufunder logo" /></div> 
        <div><img src={assets.mar_luther_logo} alt="mar-luther logo" /></div> 
        <div><img src={assets.rand_logo} alt="rand logo" className="w-[12rem]" /></div> 
      </div>
    </article>
  )
}
export default TrustedClients