import { useEffect, useState, useRef } from 'react'

export let MutableRef = () => {
  let [timer, setTimer] = useState(0)
  let interValRef = useRef<number | undefined>(undefined)

  let stopTimer = () => {
    window.clearInterval(interValRef.current)
  }

  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
    return () => {
      stopTimer()
    }
  }, [])
  return(
    <div>
      Hook Timer - {timer} -
      <button onClick={() => stopTimer()} >Stop Timer</button>
    </div>
  )
}

