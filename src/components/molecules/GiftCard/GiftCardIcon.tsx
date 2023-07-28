import { ElementType } from 'react'

interface GiftCardIconProps {
    icon: ElementType
}

export const GiftCardIcon = ({icon: Icon}: GiftCardIconProps) => {
  return (
    <Icon size={100} />
  )
}
