import { useState } from 'react'
import './App.css'

const celebrations = [
  "YES!!",
  "AGAIN!!",
  "YOU MANIAC!!",
  "UNSTOPPABLE!!",
  "KEEP GOING!!",
  "LEGENDARY!!",
  "NO WAY!!",
  "GOATED!!",
  "CERTIFIED CLICKER!!",
  "CLICK GOD!!",
]

function App() {
  const [count, setCount] = useState(0)

  const message = count === 0
    ? "Click the button."
    : celebrations[(count - 1) % celebrations.length]

  return (
    <div className="app">
      <p className="message">{message}</p>
      <button className="click-btn" onClick={() => setCount(c => c + 1)}>
        CLICK ME
      </button>
      {count > 0 && <p className="count">{count} {count === 1 ? 'click' : 'clicks'}</p>}
    </div>
  )
}

export default App
