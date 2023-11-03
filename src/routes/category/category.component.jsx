import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

import { CategoryContainer, Title } from './category.styles.js'

import ProductCard from '../../components/product-card/product-card.component';
import { selectCategoriesMap } from '../../store/categories/category.selector.js';

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap)

  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [categoriesMap, category])

  return (
    <>
      <Title>{category}</Title>
      <CategoryContainer>
        {
          products && products.map(product => <ProductCard key={product.id} product={product} />)
        }
      </CategoryContainer>
    </>
  )
}

export default Category