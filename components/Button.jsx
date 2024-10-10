import { Hexagon } from 'lucide-react'
import React from 'react'

const Button = () => {
  return (
    <div>
        <button className='flex gap-1 rounded-xl uppercase py-2 px-4 bg-teal-700 text-slate-100'><Hexagon />Get Started</button>
    </div>
  )
}

export default Button
