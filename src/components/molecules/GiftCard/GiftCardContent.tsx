import React from 'react'

interface GiftCardContentProps {
    children: React.ReactNode
}

export const GiftCardContent = ({children}: GiftCardContentProps) => {
  return (
    <main className='flex items-center justify-center row-span-3'>
        {children}
    </main>
  )
}
