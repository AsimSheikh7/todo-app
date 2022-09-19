import React from 'react'
import { HiOutlineClipboardList } from "react-icons/hi";

const NoTodos = () => {
  return (
    <div className='no-todos flex flex-col items-center'><HiOutlineClipboardList color='#64748b' size="4em"/>
    <p className='text-slate-400 text-base sm:text-lg font-semibold'>You don't have any tasks registered yet.</p>
    <p className='text-slate-400 text-base sm:text-lg'>Create tasks and organize your to-do items</p>
    </div>
  )
}

export default NoTodos