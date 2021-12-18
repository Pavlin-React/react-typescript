import { useRef, useEffect } from "react";

export let DomRef = () => {
  let inputRef = useRef<HTMLInputElement>(null!)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return(
    <div>
      <input type='text' ref={inputRef} />
    </div>
  )

}