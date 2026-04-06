import { useState, useEffect } from 'react'
import './App.css'

const EXCUSES = [
  "I just need to finish one more thing.",
  "I just need to finish one more thing.",
  "I just need to finish one more thing.",
  "That's what you said an hour ago.",
  "The sun doesn't wait for your to-do list.",
  "Your chair is not your friend.",
  "Seriously. Stand up. Right now.",
  "The screen is lying to you. Go.",
]

const OUTSIDE_FACTS = [
  "Vitamin D is free and your body is begging for it.",
  "There are birds out there. Real ones. Not emoji.",
  "The weather exists whether you experience it or not.",
  "Other humans are outside right now, living their lives.",
  "A 20-minute walk reduces cortisol by 15%. Science said so.",
  "Your eyes can focus past 60cm. Give them a treat.",
  "Fresh air hits different after a screen session.",
]

export default function App() {
  const [seconds, setSeconds] = useState(0)
  const [gone, setGone] = useState(false)
  const [excuseIndex, setExcuseIndex] = useState(0)
  const [factIndex, setFactIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setSeconds(s => s + 1), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const cycle = setInterval(() => {
      setFactIndex(i => (i + 1) % OUTSIDE_FACTS.length)
    }, 4000)
    return () => clearInterval(cycle)
  }, [])

  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  const timeStr = mins > 0
    ? `${mins}m ${secs}s`
    : `${secs}s`

  if (gone) {
    return (
      <div className="app gone">
        <div className="sun" />
        <h1 className="gone-title">THERE YOU GO.</h1>
        <p className="gone-sub">Now close this tab. We mean it.</p>
        <p className="gone-sub small">You were staring at a screen for {timeStr} just to be told to stop staring at a screen.</p>
        <p className="gone-irony">The irony is not lost on us.</p>
      </div>
    )
  }

  return (
    <div className="app">
      <div className="sun" />

      <div className="content">
        <p className="ticker">{OUTSIDE_FACTS[factIndex]}</p>

        <h1 className="headline">
          <span className="word w1">GO.</span>
          <span className="word w2">OUTSIDE.</span>
          <span className="word w3">NOW.</span>
        </h1>

        <p className="subhead">
          You have been at this desk long enough.<br />
          The world is out there and it is beautiful<br />
          and it does not have a loading spinner.
        </p>

        <div className="guilt">
          <p className="guilt-label">Time spent reading this instead of going outside</p>
          <p className="guilt-timer">{timeStr}</p>
        </div>

        <p className="excuse" onClick={() => setExcuseIndex(i => Math.min(i + 1, EXCUSES.length - 1))}>
          "{EXCUSES[excuseIndex]}"
          {excuseIndex < EXCUSES.length - 1 && <span className="excuse-tap"> (click to continue making excuses)</span>}
        </p>

        <button className="go-btn" onClick={() => setGone(true)}>
          OK. I'M GOING.
        </button>

        <p className="footer">Your screen will still be here when you get back. Unfortunately.</p>
      </div>
    </div>
  )
}
