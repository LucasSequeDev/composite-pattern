import { GiftCard } from "../../molecules/GiftCard"
import { Apple } from "lucide-react"

interface GitfCardProps {
    title: string
    price?: number
}

export const GiftCardApple = ({ title }: GitfCardProps) => {
  return (
    <GiftCard.Root>
      <GiftCard.Header>
        <GiftCard.Title title={title} />
      </GiftCard.Header>
      <GiftCard.Content>
        <GiftCard.Icon icon={Apple} />
      </GiftCard.Content>
    </GiftCard.Root>
  )
}
