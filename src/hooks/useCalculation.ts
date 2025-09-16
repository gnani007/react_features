import { useState } from 'react'
export const useCalculator = () => {
  const [value, setValue] = useState(0)
  const addition = (a: number, b: number) => {
    setValue((prev) => prev + a + b)
  }
  return { value, addition }
}