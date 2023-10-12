import styled from 'styled-components'

export const CartProductContainer = styled.div`
width: 100%;
display: flex;
height: 80px;
margin-bottom: 15px;

img {
  width: 30%;
}
`

export const ProductDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px 20px;

  .name {
    font-size: 16px;
  }

  .price {
    font-size: 14px
  }
`