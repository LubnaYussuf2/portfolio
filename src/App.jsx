import { useState } from 'react'

import WavifyBackground from './components/WavifyBackground'
import Header from './components/Header'
import Feed from './components/Feed'

function App() {
  return (
    <div>
      <WavifyBackground />
      <Header />
      <Feed />
      {/* <h1>hello world</h1> */}
    </div>
  )
}

export default App
