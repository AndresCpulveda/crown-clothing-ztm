import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'

import { CategoryContainer, Title } from './category.styles.js'

import { categoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';

const Category = () => {

  const { category } = useParams();
  const {categories} = useContext(categoriesContext);

  const [products, setProducts] = useState(categories[category])

  useEffect(() => {
      setProducts(categories[category])
  }, [categories, category])

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