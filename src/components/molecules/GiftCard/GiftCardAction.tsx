interface GiftCardActionProps {
    title: string
    onClick: () => void
}

export const GiftCardAction = ({ title, onClick }: GiftCardActionProps) => {
  return (
    <button onClick={onClick} className='bg-cyan-100 text-green-800 rounded-lg p-2 hover:bg-green-200'>{title}</button>
  )
}
