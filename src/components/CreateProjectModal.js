import React, { useState } from "react"
import { useGlobalContext } from "../Context"
import { IoMdClose } from "react-icons/io"

import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import { assets } from "../assets/assets"
import { IoMdAdd, IoMdRemove } from "react-icons/io"
import { RotatingLines } from "react-loader-spinner"
import axios from "axios"
import { databaseUrl } from "../utils/data"

const CreateProjectModal = () => {
  const { isProjectModalOpen, setIsProjectModalOpen, darkMode } =
    useGlobalContext()
  const [currentStep, setCurrentStep] = useState(0)
  const [submittingProject, setSubmittingProject] = useState(false)
  const [formData, setFormData] = useState({
    projectType: "",
    settings: "",
    budget: "",
    summary: "",
    name: "",
    email: "",
    phone: "",
    projectTitle: "",
    projectDescription: "",
    sub_category: "",
  })

  // category option
  // const [selectedCategory, setSelectedCategory] = useState("")
  const [subcategories, setSubcategories] = useState([])

  const categoryOptions = {
    "Mobile App": [
      "iOS App Development",
      "Android App Development",
      "Cross Platform App Development",
    ],
    Software: [
      "Custom Software Development",
      "Enterprise Software Development",
      "Saas Development",
      "Api Development and Integration",
    ],
    "Web Development": [
      "Custom Web Development",
      "Web Application Development",
      "E-commerce Development",
      "CMS Development",
      "Api Development & Integration",
    ],
    "Graphic Design": [
      "Branding & Identity Design",
      "UI/UX Design",
      "Print Design",
      "Digital Design",
    ],
    "Network Administration and Cybersecurity": [
      "Network Design & Implementation",
      "Network Security",
      "Security Threat Detection & Response",
      "Firewall & VPN Management",
    ],
  }

  // const handleCategoryChange = (event) => {
  //   const category = event.target.value
  //   setSelectedCategory(category)
  //   setSubcategories(categoryOptions[category] || [])
  // }
  const [categoryFields, setCategoryFields] = useState([
    { category: "", sub_category: "" },
  ])

  const handleAddCategoryField = () => {
    setCategoryFields([...categoryFields, { category: "", sub_category: "" }])
  }

  const handleRemoveCategoryField = (index) => {
    const newCategoryFields = categoryFields.filter((_, i) => i !== index)
    setCategoryFields(newCategoryFields)
  }

  const handleCategoryFieldChange = (index, event) => {
    const newCategoryFields = [...categoryFields]
    newCategoryFields[index][event.target.name] = event.target.value
    setCategoryFields(newCategoryFields)
    if (event.target.name === "category") {
      setSubcategories(categoryOptions[event.target.value] || [])
    }
  }
  const renderCategoryFields = () => {
    return categoryFields.map((field, index) => (
      <div
        key={index}
        className='flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row gap-4 mt-[.8rem] lg:mt-[1rem] 2xl:mt-[1.5rem]'
      >
        {/* category start */}
        <div className='flex flex-col'>
          <label htmlFor='category' className='mb-1 font-semibold'>
            Category <span className='text-red-500'>*</span>
          </label>
          <select
            name='category'
            value={field.category}
            onChange={(e) => handleCategoryFieldChange(index, e)}
            className='py-2 border-dotted border-2 border-blue-600 rounded outline-none dark:bg-black dark:text-white'
          >
            <option value='' disabled>
              Select Category
            </option>
            {Object.keys(categoryOptions).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        {/* category end */}

        {/* subcategory start */}
        <div className='flex flex-col'>
          <label htmlFor='sub-category' className='mb-1 font-semibold'>
            Sub Category <span className='text-red-500'>*</span>
          </label>
          <select
            name='sub_category'
            value={field.sub_category}
            onChange={(e) => handleCategoryFieldChange(index, e)}
            className='py-2 border-dotted border-2 border-blue-600 rounded outline-none dark:bg-black dark:text-white'
            disabled={!field.category}
          >
            <option value='' disabled>
              {field.category
                ? "Select Subcategory"
                : "No Subcategories Available"}
            </option>
            {(categoryOptions[field.category] || []).map((subcategory) => (
              <option key={subcategory} value={subcategory}>
                {subcategory}
              </option>
            ))}
          </select>
        </div>
        {/* subcategory end */}
        {/* category button start */}
        <div className='md:flex lg:items-center lg:justify-center lg:pt-7'>
          <button
            type='button'
            onClick={handleAddCategoryField}
            className='text-green-500'
          >
            <IoMdAdd size={24} />
          </button>
          {categoryFields.length > 1 && (
            <button
              type='button'
              onClick={() => handleRemoveCategoryField(index)}
              className='text-red-500'
            >
              <IoMdRemove size={24} />
            </button>
          )}
          {/* category button ends */}
        </div>
      </div>
    ))
  }
  const steps = [
    "Project Type",
    "Project Settings",
    "Budget",
    "Summary",
    "Complete",
  ]

  const closeModal = () => {
    setIsProjectModalOpen(false)
    setCurrentStep(0)
    setFormData({
      projectType: "",
      settings: "",
      budget: "",
      summary: "",
      name: "",
      email: "",
      phone: "",
      projectTitle: "",
      projectDescription: "",
      category: "",
      sub_category: "",
      phoneNotifications: false,
      emailNotifications: false,
    })
    setCategoryFields([{ category: "", sub_category: "" },])
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const isNextDisabled = () => {
    if (currentStep === 0) return formData.projectType === ""
    if (currentStep === 1)
      return (
        formData.name === "" ||
        formData.email === "" ||
        formData.phone === "" ||
        formData.projectTitle === "" ||
        formData.projectDescription === ""
      )
    if (currentStep === 2) return formData.budget === ""
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div>
            <h2 className='text-lg font-semibold mb-2 dark:text-darkHeading'>
              Project Type
            </h2>
            <select
              name='projectType'
              value={formData.projectType}
              onChange={handleInputChange}
              className='w-full p-4 border-dotted border-2 border-blue-600 rounded outline-none dark:bg-black dark:text-white'
              required
            >
              <option value='' disabled>
                Select Project Type
              </option>
              <option value='Personal'>Personal Project</option>
              <option value='Corporate'>Team Project</option>
            </select>
          </div>
        )
      case 1:
        return (
          <div className='dark:text-darkHeading'>
            <h1 className='font-bold text-[17px]'>Project Settings</h1>
            <form className='mt-[1rem]'>
              <div className='relative flex flex-col'>
                <label htmlFor='name' className='mb-1 font-semibold'>
                  Name <span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className='bg-[#f4f4f4] dark:text-white dark:bg-black-500 py-[.6rem] md:py-[.8rem] px-2 rounded-md outline-none'
                />
              </div>
              <div className='relative flex flex-col mt-[.6rem]'>
                <label htmlFor='email' className='mb-1 font-semibold'>
                  Email <span className='text-red-500'>*</span>
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className='bg-[#f4f4f4] dark:text-white dark:bg-black-500 py-[.6rem] md:py-[.8rem] px-2 rounded-md outline-none'
                />
              </div>
              <div className='relative flex flex-col mt-[.6rem]'>
                <label htmlFor='phone' className='mb-1 font-semibold'>
                  Phone number <span className='text-red-500'>*</span>
                </label>
                <div>
                  <PhoneInput
                    country={"gh"}
                    value={formData.phone}
                    onChange={(value) =>
                      setFormData({ ...formData, phone: value })
                    }
                    buttonStyle={{ color: "black" }}
                    enableSearch
                    autocompleteSearch
                    searchClass='bg-red-500'
                    searchStyle={{ fontSize: "1rem" }}
                    inputStyle={{
                      width: "100%",
                      borderRadius: "6px",
                      border: "none",
                      outline: "none",
                      background: darkMode ? "rgba(0, 0, 0, 0.5)" : "#f4f4f4",
                      paddingTop: "1.5rem",
                      paddingBottom: "1.5rem",
                      fontSize: "1rem",
                    }}
                  />
                </div>
                {/* phone input */}
              </div>
              <div className='relative flex flex-col mt-[.6rem]'>
                <label htmlFor='project-title' className='mb-1 font-semibold'>
                  Project Title <span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  name='projectTitle'
                  id='project-title'
                  value={formData.projectTitle}
                  onChange={handleInputChange}
                  required
                  className='bg-[#f4f4f4] dark:text-white dark:bg-black-500 py-[.6rem] md:py-[.8rem] px-2 rounded-md outline-none'
                />
              </div>
              <div className='relative flex flex-col mt-[.6rem]'>
                <label
                  htmlFor='project-description'
                  className='mb-1 font-semibold'
                >
                  Project Description <span className='text-red-500'>*</span>
                </label>
                <textarea
                  name='projectDescription'
                  id='projectDescription'
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  required
                  className='bg-[#f4f4f4] dark:text-white dark:bg-black-500 py-[.5rem] h-[5rem] md:h-[7rem] px-2 rounded-md outline-none'
                ></textarea>
              </div>
              {/* category field */}
              {renderCategoryFields()}
              {/* category end */}
              <div className='mt-[.8rem] dark:text-darkHeading'>
                <label htmlFor='notification' className='font-semibold'>
                  Notification <span className='text-red-500'>*</span>
                </label>
                <div className='mt-2 md:mt-1 flex flex-col md:flex-row justify-between gap-y-2'>
                  <p>Allow Notifications by phone or email</p>
                  <div className='flex gap-4'>
                    <div>
                      <input
                        type='checkbox'
                        id='phone-select'
                        name='phoneSelect'
                        checked={formData.phoneNotifications}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            phoneNotifications: e.target.checked,
                          })
                        }}
                        className='mr-1'
                      />
                      <label htmlFor='phone-select'>Phone</label>
                    </div>
                    <div>
                      <input
                        type='checkbox'
                        id='email-select'
                        name='emailSelect'
                        checked={formData.emailNotifications}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            emailNotifications: e.target.checked,
                          })
                        }}
                        className='mr-1'
                      />
                      <label htmlFor='email-select'>Email</label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )
      case 2:
        return (
          <div className='dark:text-darkHeading'>
            <h1 className='font-bold text-[17px]'>Budget</h1>
            <div className='relative flex flex-col mt-[.6rem]'>
              <label htmlFor='budget' className='mb-1'>
                Setup Budget(GHS) <span className='text-red-500'>*</span>
              </label>
              <input
                type='number'
                name='budget'
                value={formData.budget}
                onChange={handleInputChange}
                required
                className='bg-[#f4f4f4] dark:text-white dark:bg-black-500 py-[.6rem] md:py-[.8rem] px-2 rounded-md outline-none'
              />
            </div>
          </div>
        )
      case 3:
        return (
          <div className='dark:text-darkHeading'>
            <h1 className='text-[18px]'>Summary</h1>
            {/* project type */}
            <div className='mt-4'>
              <h1 className='font-bold text-[17px]'>
                Project Type <span className='text-red-500'>*</span>
              </h1>
              <p>{formData.projectType}</p>
            </div>
            {/* project settings */}
            <div className='mt-4 font-medium'>
              <h1 className='font-bold text-[17px]'>
                Project Settings <span className='text-red-500'>*</span>
              </h1>
              <p>
                <span>Name:</span> <span className='ml-1'>{formData.name}</span>
              </p>
              <p>
                <span>Email:</span>
                <span className='ml-1'>{formData.email}</span>
              </p>
              <p>
                <span>Number:</span>
                <span className='ml-1'>{formData.phone}</span>
              </p>
              <p>
                <span>Project Title:</span>
                <span className='ml-1'>{formData.projectTitle}</span>
              </p>
              <p>
                <span>Project Description:</span>
                <span className='ml-1'>{formData.name}</span>
              </p>
            </div>
            {/* project category */}
            <div className='mt-4 font-medium'>
              <h1 className='font-bold text-[17px]'>
                Categories <span className='text-red-500'>*</span>
              </h1>
              {categoryFields.map((field, idx) => (
                <div key={idx} className='mb-2'>
                  <p>
                    <span>Category:</span>
                    <span className='ml-1'>{field.category}</span>
                  </p>
                  <p>
                    <span>Sub-category:</span>
                    <span className='ml-1'>{field.sub_category}</span>
                  </p>
                </div>
              ))}
            </div>
            {/* notification */}
            <div className='mt-4 font-medium'>
              <h1 className='font-bold text-[17px]'>
                Notification <span className='text-red-500'>*</span>
              </h1>
              <p>
                <span>Phone Notification: </span>
                <span className='ml-1'>
                  {formData.phoneNotifications ? "true" : "false"}
                </span>
              </p>
              <p>
                <span>Email Notification: </span>
                <span className='ml-1'>
                  {formData.emailNotifications ? "true" : "false"}
                </span>
              </p>
            </div>
            {/* Budget */}
            <div className='mt-4 font-medium'>
              <h1 className='font-bold text-[17px]'>
                Budget <span className='text-red-500'>*</span>
              </h1>
              <p>
                <span>GHS</span>
                <span className='ml-1'>{formData.budget}</span>
              </p>
            </div>
          </div>
        )
      case 4:
        return (
          <div className=''>
            <h2 className='text-[22px] md:text-[25px] dark:text-darkHeading xl:text-[30px] text-center font-bold mb-2 mt-3'>
              Project Submitted Successfully
              <span className='text-green-500'>!</span>
            </h2>
            <p className='text-gray-700 text-center text-[14px] dark:text-darkText xl:text-[16.5px]'>
              Thank you for choosing
              <span className='font-extrabold ml-1 text-black dark:text-white text-[15px] md:text-[16px] xl:text-[17px]'>
                Epahubb
              </span>
            </p>
            <div className='mt-[3rem] grid place-items-center'>
              <img
                src={assets.project_success_image}
                alt=''
                className='h-[30vh] md:h-[40vh] object-cover'
              />
            </div>
          </div>
        )
      default:
        return null
    }
  }

  const initiateProject = async () => {
    const body = JSON.stringify({
      project_description:formData?.projectDescription,
      project_type: formData?.projectType,
      project_name: formData?.projectTitle,
      client_name: formData?.name,
      client_email: formData?.email,
      client_phone: formData?.phone,
      estimated_budget: formData?.budget,
      email_notification: formData?.emailNotifications ? true : false,
      phone_notification: formData?.phoneNotifications ? true : false,
      project_categories: categoryFields
    })
    
    setSubmittingProject(true)
    const config = {
      headers:{
          'Content-Type':'application/json'
      }
  }
  await axios.post(`${databaseUrl}/create-deal/`,body, config).then((response)=>{
    setSubmittingProject(false)
    if(response.data?.success){
        setCurrentStep(4)
    }else{
        alert("Project initialization failed.")
    }
}).catch((error)=>{
    
    setSubmittingProject(false)
})

    
  }

  return (
    <div>
      {isProjectModalOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 font-jakarta'>
          <div className='bg-white dark:bg-primaryDark py-5 overflow-y-scroll max-h-[85vh] rounded-lg w-[90%] 2xl:w-[75%] shadow-lg relative'>
            <div className='flex items-center justify-between px-4 pb-3 border-b-[1px] border-b-[#e5e7eb] dark:border-b-gray-700'>
              <h1 className='font-bold text-[18px] dark:text-darkHeading'>
                Create Project
              </h1>
              <button onClick={closeModal}>
                <IoMdClose className='text-[20px] dark:text-darkText' />
              </button>
            </div>

            {/* Step Indicator */}
            <div className='flex items-start gap-3 md:gap-6 overflow-x-scroll 2xl:overflow-auto mt-6 mb-[3rem] px-2 lg:px-[15%]'>
              {steps.map((step, index) => (
                <span
                  key={index}
                  className={`text-[17px] capitalize text-nowrap font-medium px-2 py-1 ${
                    index === currentStep
                      ? "text-[#3b82f6] border-b-2 border-b-[#3b82f6]"
                      : index < currentStep
                      ? "text-green-500"
                      : "dark:text-darkHeading"
                  }`}
                >
                  {step}
                </span>
              ))}
            </div>

            {/* Active Step Content */}
            <div className='mb-4 px-3 lg:px-[8%] xl:px-[15%]'>
              {renderStepContent()}
            </div>

            {/* Buttons */}
            {currentStep < steps.length - 1 && (
              <div
                className={`flex items-center mt-[2rem] px-3 lg:px-[7%] xl:px-[15%] ${
                  currentStep === 0 ? " justify-end" : "justify-between"
                }`}
              >
                {currentStep > 0 && (
                  <button
                    onClick={handleBack}
                    className='bg-gray-500 text-white px-4 py-[0.35rem] rounded hover:bg-gray-600'
                  >
                    Previous
                  </button>
                )}
                {currentStep < steps.length - 1 && (
                  <>
                    {
                      currentStep === 3 ? (
                      <>
                        {
                          submittingProject ? (
                            <RotatingLines
                                    visible={true}
                                    height="26"
                                    width="26"
                                    strokeColor="black"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    ariaLabel="rotating-lines-loading"

                                />
                          ):(
                            <button onClick={()=>initiateProject()} className="px-4 py-[0.35rem] rounded transition bg-blue-500 text-white hover:bg-blue-700">Submit</button>
                          )
                        }
                      </>
                      ) : (
                      <button
                        onClick={handleNext}
                        disabled={isNextDisabled()}
                        className={`px-4 py-[0.35rem] rounded transition ${
                          isNextDisabled()
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-blue-500 text-white hover:bg-blue-700"
                        }`}
                      >
                        Next
                      </button>
                      )
                    }
                  </>
                )}
              </div>
            )}
            {/* Button Container ends */}
          </div>
        </div>
      )}
    </div>
  )
}

export default CreateProjectModal
