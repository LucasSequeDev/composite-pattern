interface GiftCardPriceProps {
    price: number
}

export const GiftCardPrice = ({ price }:GiftCardPriceProps) => {
  return (
    <span>{price}USD</span>
  )
}
