import React, { useCallback, useMemo, useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

const AppContext = React.createContext()

const Context = ({ children }) => {
  const location = useLocation()

  // Dark mode initialization
  const getInitialDarkMode = () => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme:dark)"
    ).matches
    const storedDarkMode = localStorage.getItem("darkTheme") === "true"
    return storedDarkMode || prefersDarkMode
  }

  // Color palette
  const colors = useMemo(
    () => [
      "#c64a4a", // 0 - Home (red)
      "#ff1e1a", // 1 - (bright red)
      "#7827e6", // 2 - (purple)
      "#be6cbe", // 3 - (lavender)
      "#1680FB", // 4 - Graphic Design (blue)
      "#c73e9b", // 5 - (pink)
      "#7b5dd6", // 6 - (violet)
      "#0fbc49", // 7 - (green)
    ],
    []
  )

  // Get initial color from localStorage or use default
  const getInitialColor = () => {
    const savedColor = localStorage.getItem("selectedColor")
    return savedColor || colors[0] // Default to first color if none saved
  }

  const [darkMode, setDarkMode] = useState(getInitialDarkMode())
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState(getInitialColor())

  // Route to color index mapping
  const routeColorMap = useMemo(
    () => ({
      "/": 0,
      "/graphic-design": 4,
    }),
    []
  )

  // Save color to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("selectedColor", selectedColor)
  }, [selectedColor])

 
  useEffect(() => {
    const defaultColorIndex = routeColorMap[location.pathname] ?? 0
    const savedColor = localStorage.getItem("selectedColor")
    if (!savedColor || !colors.includes(savedColor)) {
      setSelectedColor(colors[defaultColorIndex])
    }
  }, [location.pathname, colors, routeColorMap])

  const persistSetSelectedColor = useCallback((color) => {
    setSelectedColor(color)
    localStorage.setItem("selectedColor", color)
  }, [])


  const openSidebar = () => {
    setIsSidebarOpen(true)
  }

  const closeSideBar = (e) => {
    setIsSidebarOpen(false)
  }

  const toggleTheme = () => {
    const newDarkTheme = !darkMode
    setDarkMode(newDarkTheme)
    localStorage.setItem("darkTheme", newDarkTheme)
  }

  const openProjectModal = () => {
    setIsProjectModalOpen(true)
  }


  const [isSticky, setIsSticky] = useState(false)

  const handleScroll = useCallback(() => {
    if (window.scrollY > 20) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }
  }, [])

  return (
    <AppContext.Provider
      value={{
        darkMode,
        isSidebarOpen,
        openSidebar,
        closeSideBar,
        toggleTheme,
        isProjectModalOpen,
        setIsProjectModalOpen,
        openProjectModal,
        selectedColor,
        setSelectedColor: persistSetSelectedColor, 
        colors,
        isSticky,
        handleScroll,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default Context

export const useGlobalContext = () => {
  return React.useContext(AppContext)
}
