import styled from 'styled-components'

export const CheckoutItemContainer = styled.div`
width: 100%;
display: flex;
min-height: 100px;
border-bottom: 1px solid darkgrey;
padding: 15px 0;
font-size: 20px;
align-items: center;
gap: 30px
`

export const ImageContainer = styled.div`
width: 20%;
`

export const CheckoutItemImg = styled.img`
width: 100%;
height: 100%;
`

export const CheckoutItemName = styled.span`
width: 20%;
font-size: 17px;
`

export const CheckoutItemQuantity = styled.div`
width: 18%;
display: flex;
gap: 10px
`

export const CheckoutItemArrow = styled.div`
cursor: pointer;
`

export const CheckoutItemValue = styled.span`
`

export const CheckoutItemPrice = styled.span`
width: 20%;
`
export const RemoveButton = styled.div`
  cursor: pointer;
`