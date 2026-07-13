import { useState } from 'react'

import WavifyBackground from './components/WavifyBackground'
import Header from './components/Header'
import Feed from './components/Feed'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <WavifyBackground />
      <Header />
      <Feed />
      <Footer />
      {/* <h1>hello world</h1> */}
    </div>
  )
}

export default App
