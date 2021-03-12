import { useState } from 'react'

export function useToggle(initialState: boolean = false) {
  const [boolState, setBoolState] = useState(initialState)

 const toggle = ()=> {
    setBoolState(!boolState)
  }

  return {boolState, toggle}
}
