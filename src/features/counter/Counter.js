import React from 'react'
import './counter.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement,increment} from './counterSlice'

function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch =useDispatch()
  return (
      <div className='flex flex-col gap-5 py-20'>
          <div className=' counter text-white bg-red-600 text-center px-20 py-20 text-2xl font-bold '>{count}</div>
          <div className='flex gap-5'>
          <button className='border bg-slate-500 text-white text-sm px-5 py-5 rounded-xl' onClick={() => dispatch(decrement())}>decrement</button> 
          <button className='border bg-slate-500 text-white text-sm px-5 py-5 rounded-xl' onClick={() => dispatch(increment())}>increment</button>
        </div>
          
    </div>
  )
}

export default Counter