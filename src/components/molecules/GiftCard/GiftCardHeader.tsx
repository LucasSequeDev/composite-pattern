import React from 'react'

interface GiftCardHeaderProps {
    children: React.ReactNode
}

export const GiftCardHeader = ({ children }: GiftCardHeaderProps) => {
  return (
    <div className='flex items-center justify-between p-2 h-6 row-span-1'>
        { children }
    </div>
  )
}
