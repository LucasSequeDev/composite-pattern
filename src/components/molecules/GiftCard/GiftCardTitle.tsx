interface GiftCardTitleProps {
    title: string
}

export const GiftCardTitle = ({title}: GiftCardTitleProps) => {
  return (
    <h5>{title}</h5>
  )
}
