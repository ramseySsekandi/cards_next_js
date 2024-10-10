import Button from '@/components/Button'
import { CircleCheck } from 'lucide-react'
import React from 'react'

const Home = () => {
  const cards = [
    {
      title: 'CORE',
      price: '$19',
      tagline: 'Best for solo creators',
      list: ['100MB Cloud Storage', '100+ prompt templates', '5 projects', '24/7 support'],
    },
    {
      title: 'OVERDRIVE',
      price: '$79',
      tagline: 'Most popular plan',
      list: ['All Starter features', '1TB additional storage', 'Unlimited projects', 'Analytics'],
    },
    {
      title: 'TEAM',
      price: '$39',
      tagline: 'Exclusively for teams',
      list: ['All Overdrive features', '10TB additional storage', '50% off per member', 'Real-time collaboration'],
    }
  ]
  return (
    <div className = 'min-h-screen bg-slate-900 text-slate-100 flex items-center flex-col'>
      <div className = 'my-6 max-w-xs pb-4'>
      <h2 className = ' px-10 text-center scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
        Flexible pricing for teams of all sizes
      </h2>
      </div>
      <div className = 'min-w-56 border-teal-700 border-2 rounded-md flex justify-between px-1 py-1'>
        <button className = 'px-4 py-2 bg-teal-700 rounded-md'>MONTHLY</button>
        <button className = 'px-4 py-2 rounded-md'>ANNUALLY</button>
      </div>
        <div className = 'flex gap-8 flex-wrap justify-center items-center'>
        {
          cards.map((item, i) => (
          <div className = 'cards mt-8 rounded-3xl border border-teal-700 p-3' key = {i}>
          <div className = 'card px-6 py-8 rounded-s space-y-2 text-slate-100 border border-teal-700 flex justify-center items-center flex-col'>
          <h1 className = 'border-2 text-xs border-teal-700 rounded-3xl font-bold px-2 py-1 text-teal-700'>{item.title}</h1>
          <div className = 'flex'><p className = 'text-5xl font-medium'>{item.price}</p><span>/MO</span></div>
          <p className = 'text-xl border-b pb-3'>{item.tagline}</p>
          <ul className = 'space-y-4  mb-5'>
            {item.list.map((item, i)=> (<div key = {i} className='flex gap-4'><CircleCheck /><li>{item}</li></div>))}
          </ul>
            <Button />
          </div>
          
        </div>
          ))
        }    
        </div>
    </div>
  )
}

export default Home
