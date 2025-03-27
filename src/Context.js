import React, { useState } from "react"

const AppContext = React.createContext()

const Context = ({ children }) => {
  const getInitialDarkMode = () => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme:dark)"
    ).matches
    const storedDarkMode = localStorage.getItem("darkTheme") === "true"
    
    return storedDarkMode || prefersDarkMode
  }

  const [darkMode, setDarkMode] = useState(getInitialDarkMode())
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)

  // preferred colors
  const colors = [
    "#c64a4a",
    "#ff1e1a",
    "#7827e6",
    "#be6cbe",
    "#3eb1ff",
    "#c73e9b",
    "#7b5dd6",
    "#0fbc49",
  ]
  const [selectedColor, setSelectedColor] = useState(colors[0])

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }

  const closeSideBar = (e) => {
    if (e.target.classList.contains("sidebar")) {
      setIsSidebarOpen(false)
    } else {
      setIsSidebarOpen(false)
    }
  }

  const toggleTheme = () => {
    const newDarkTheme = !darkMode
    setDarkMode(newDarkTheme)
    localStorage.setItem("darkTheme", newDarkTheme)
  }

  // project modal
  const openProjectModal = () => {
    setIsProjectModalOpen(true)
  }

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
        setSelectedColor,
        colors,
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
