import React from 'react'

interface GiftCardFooterProps {
    children: React.ReactNode
}

export const GiftCardFooter = ({children}: GiftCardFooterProps) => {
  return (
    <footer className='row-span-1 flex items-center justify-center gap-2'>
        {children}
    </footer>
  )
}
