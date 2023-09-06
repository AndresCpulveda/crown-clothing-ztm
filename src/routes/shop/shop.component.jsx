import { useContext } from "react"

import './shop.styles.scss'

import { categoriesContext } from "../../contexts/categories.context"
import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {
  const { categories } = useContext(categoriesContext);
  return (
    <>
      {
        Object.keys(categories).map(title => (
            <div key={title}>
              <h2>{title}</h2>
              <div className="products-container">
                {categories[title].map((product) => (
                    <ProductCard key={product.id} product={product}/>
                  )
                )}
              </div>
            </div>
        ))
      }
    </>
  )
}

export default Shop