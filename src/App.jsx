import { useState } from 'react'
import ChatUI from './components/ChatUI'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex items-center justify-center'>
        <h1 className='text-4xl m-2 text-blue-500'>Chat UI</h1>
      </div>
      <ChatUI />
    </>
  )
}

export default App
