import { GiftCard } from "../../molecules/GiftCard"
import { Gamepad } from "lucide-react"

interface GitfCardProps {
    title: string
    price?: number
}

export const GiftCardXbox = ({ title }: GitfCardProps) => {
  return (
    <GiftCard.Root>
      <GiftCard.Header>
        <GiftCard.Title title={title} />
        <GiftCard.Price price={100} />
      </GiftCard.Header>
      <GiftCard.Content>
        <GiftCard.Icon icon={Gamepad} />
      </GiftCard.Content>
      <GiftCard.Footer>
        <GiftCard.Actions>
          <GiftCard.Action title='Buy' onClick={() => alert('Buy')} />
        </GiftCard.Actions>
      </GiftCard.Footer>
    </GiftCard.Root>
  )
}
