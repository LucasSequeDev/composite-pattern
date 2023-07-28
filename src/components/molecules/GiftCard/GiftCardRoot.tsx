import { CircleDashed } from 'lucide-react'

interface GiftCardRootProps {
    children: React.ReactNode
}

export const GiftCardRoot = ({children}: GiftCardRootProps) => {
  return (
    <article className='text-green-500  bg-cyan-100 h-72 w-64 rounded-lg grid grid-row-3'>
        <div className='grid p-2 h-6 place-items-center row-span-1'>
          <CircleDashed />
        </div>
        {children}
    </article>
  )
}
