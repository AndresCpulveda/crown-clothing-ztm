import { useContext } from "react"

import { categoriesContext } from "../../contexts/categories.context"
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categories } = useContext(categoriesContext);
  return (
    <>
      {
        Object.keys(categories).map(title => {
          const products = categories[title]
          return (
            <CategoryPreview key={title} title={title} products={products} />
          )
        })
      }
    </>
  )
}

export default CategoriesPreview