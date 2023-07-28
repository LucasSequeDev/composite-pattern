import {  GiftCardMusic } from './components/organisms/GiftCardMusic'
import { GiftCardXbox } from './components/organisms/GiftCardXbox'
import { GiftCardApple } from './components/organisms/GiftCardApple'

function App() {

  return (
    <div className="flex items-center justify-center gap-4 h-screen bg-slate-800 text-cyan-100">
      <GiftCardMusic
        title='La Konga'
      />
      <GiftCardXbox 
        title='Xbox'
      />
      <GiftCardApple 
        title='Apple'
      />
    </div>
  )
}

export default App
