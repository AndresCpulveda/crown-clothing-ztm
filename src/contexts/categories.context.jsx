import { useState, createContext, useEffect } from "react"

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const categoriesContext = createContext({
  categories: {},
})

const CategoriesProvider = ({children}) => {
  const [categories, setCategories] = useState({})
  const value = {categories}

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()
      console.log(categoryMap);
      setCategories(categoryMap)
    }
    getCategoriesMap()
  }, [])

  return ( 
    <categoriesContext.Provider
      value={value}
    >
      {children}
    </categoriesContext.Provider>
  )
}

export default CategoriesProvider