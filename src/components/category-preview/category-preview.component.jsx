import ProductCard from '../product-card/product-card.component'
import {CategoryPreviewContainer, CategoryPreviewTitle, PreviewContainer} from './category-preview.styles.js'

const CategoryPreview = ({title, products}) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryPreviewTitle to={title}>{title.toUpperCase()}</CategoryPreviewTitle>
      </h2>
      <PreviewContainer>
        {
          products
            .filter((_, index) => index < 4)
            .map(product => (
              <ProductCard key={product.id} product={product} />
            ))
        }
      </PreviewContainer>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview