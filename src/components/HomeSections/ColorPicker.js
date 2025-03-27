import { LiaSlidersHSolid } from "react-icons/lia"
import { useGlobalContext } from "../../Context"

const ColorPicker = () => {
  const { darkMode, toggleTheme, colors, setSelectedColor, selectedColor } =
    useGlobalContext()

  return (
    <div className='hidden fixed right-0 top-[20%] lg:flex items-start filter-button'>
      {/* filter icon */}
      <button className={`bg-[${selectedColor}] p-[.5rem] rounded-sm mt-[1rem]`}>
        <LiaSlidersHSolid className='text-[1.4rem] md:text-[2rem] text-white' />
      </button>

      {/* color picker */}
      <div className='color-picker bg-[#1d222f] shadow-lg py-[1.5rem] lg:py-[2rem] px-[1rem] lg:px-[1.4rem] text-white h-[15rem] lg:h-[18rem] overflow-y-scroll custom-scrollbar transition-transform duration-300 ease-in-out'>
        {/* toggle button */}
        <button
          className='border-[1.6px] border-solid border-white py-[.2rem] px-[.3rem] lg:py-[.4rem] lg:px-[.6rem] lg:text-[16px] rounded-sm text-[14px] capitalize'
          onClick={toggleTheme}
        >
          {darkMode ? "light mode" : "dark mode"}
        </button>
        <h1 className='text-white mt-[.6rem] text-[14px] font-semibold text-center capitalize lg:text-[17px]'>
          Color Scheme
        </h1>
        <div className='mt-[1rem] grid grid-cols-2 gap-2 lg:gap-3 md:grid-cols-3'>
          {colors.map((color) => (
            <button
              key={color}
              className={`h-[2rem] bg-[${color}] w-[2rem] lg:h-[2.6rem] lg:w-[2.6rem] rounded-md`}
              onClick={() => setSelectedColor(color)}
              title={`Select ${color}`}
            ></button>
          ))}
          {/* <button className='bg-[#1680fb] h-[2rem] w-[2rem] lg:h-[2.6rem] lg:w-[2.6rem] rounded-md'></button>
          <button className='bg-[#ff1e1a] h-[2rem] w-[2rem] lg:h-[2.6rem] lg:w-[2.6rem] rounded-md'></button>
          <button className='bg-[#7827e6] h-[2rem] w-[2rem] lg:h-[2.6rem] lg:w-[2.6rem] rounded-md'></button>
          <button className='bg-[#be6cbe] h-[2rem] w-[2rem] lg:h-[2.6rem] lg:w-[2.6rem] rounded-md'></button>
          <button className='bg-[#3eb1ff] h-[2rem] w-[2rem] lg:h-[2.6rem] lg:w-[2.6rem] rounded-md'></button>
          <button className='bg-[#c73e9b] h-[2rem] w-[2rem] lg:h-[2.6rem] lg:w-[2.6rem] rounded-md'></button>
          <button className='bg-[#7b5dd6] h-[2rem] w-[2rem] lg:h-[2.6rem] lg:w-[2.6rem] rounded-md'></button>
          <button className='bg-[#0fbc49] h-[2rem] w-[2rem] lg:h-[2.6rem] lg:w-[2.6rem] rounded-md'></button> */}
        </div>
        <div className='mt-[1rem]'>
          <button className={`capitalize bg-[${selectedColor}] py-[.2rem] px-[.3rem] rounded-sm text-[14px] lg:py-[.4rem] lg:px-[.6rem] lg:text-[16px]`} onClick={()=>setSelectedColor(colors[0])}>
            reset color
          </button>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker
