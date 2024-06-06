import React from 'react'

export const NavBar = () => {
  return (
    <div className='h-[68px] flex items-end justify-between mx-32 relative'>
            <p className='font-bold h-[29px] text-3xl'>cOdynn</p>
        <div className='flex  '>
            <ul className='flex items-end gap-10 text-2xl mr-24'>
                <li className='font-semibold'>Home</li>
                <li>Compiler</li>
                <li>Versus Battles</li>
                <li>Questions</li>
                <li>Challenges</li>
                <li>About</li>
            </ul>
            <button className='text-2xl rounded-[25px] text-white bg-black py-[10px] px-12 text-center translate-y-2'>LOGIN</button>
        </div>
    </div>
  )
}
