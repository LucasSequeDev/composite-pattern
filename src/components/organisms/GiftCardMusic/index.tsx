import { GiftCard } from "../../molecules/GiftCard"
import { Headphones } from "lucide-react"

interface GitfCardProps {
    title: string
    price?: number
}

export const GiftCardMusic = ({ title }: GitfCardProps) => {
  return (
    <GiftCard.Root>
      <GiftCard.Header>
        <GiftCard.Title title={title} />
      </GiftCard.Header>
      <GiftCard.Content>
        <GiftCard.Icon icon={Headphones} />
      </GiftCard.Content>
      <GiftCard.Footer>
        <GiftCard.Actions>
          <GiftCard.Action title='Buy' onClick={() => alert('Buy')} />
          <GiftCard.Action title='Shared' onClick={() => alert('Shared')} />
          <GiftCard.Action title='Show' onClick={() => alert('Show')} />
        </GiftCard.Actions>
      </GiftCard.Footer>
    </GiftCard.Root>
  )
}
