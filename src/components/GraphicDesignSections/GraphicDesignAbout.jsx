import { useEffect } from 'react'
import { useGlobalContext } from '../../Context'
import {GraphicDesignHero} from './index'
import GeneralHeader from '../GraphicDesignHeader.jsx'

const GraphicDesignAbout = () => {
    const { handleScroll} = useGlobalContext()
      
      useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
      }, [handleScroll])
  
      return (
        <section>
          <GeneralHeader backgroundColor='bg-white' textColor='text-black dark:text-white' type='Graphic Design' />
          <GraphicDesignHero />
        </section>
      )
}
export default GraphicDesignAbout