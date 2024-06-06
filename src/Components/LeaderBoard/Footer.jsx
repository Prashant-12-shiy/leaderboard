import React from 'react'
import logo from "../../assets/logo.png"
import footerArrow from "../../assets/footerArrow.png"

export const Footer = () => {
  return (
    <div className='mt-24 bg-[#303030] h-[800px] text-white'>
        <div className='flex border-b-[1px] border-white'>
            <div className='w-[16vw] h-[158px] flex justify-center items-center  border-r-[1px] border-white'><img src={logo} alt="" /></div>
            <div>
                <div className='flex w-[84vw] justify-center items-center gap-24 h-[158px]'>
                    <ul className='grid grid-cols-3 place-items-center gap-10 text-[16px] tracking-wider' >
                        <li className='font-semibold'>Home</li>
                        <li>Versus Battles</li>
                        <li>Challenges</li>
                        <li>Compiler</li>
                        <li>Quesitons</li>
                        <li>About</li>
                    </ul>

                    <div className='relative h-[118px] w-[118px] rounded-full bg-[#BFBFBF] text-black'>
                        <div className='absolute bottom-2 left-2 h-[118px] w-[118px] rounded-full bg-white z-10 flex items-center border-black border-[1px]'>
                            <p className='text-center translate-x-3 text-p-[18px]'>Contact us <img className='translate-x-9' src={footerArrow} alt="" /> </p>
                        </div>
                    </div>

                    <div className='relative h-[118px] w-[118px] rounded-full bg-[#BFBFBF] text-black'>
                        <div className='absolute bottom-2 left-2 h-[118px] w-[118px] rounded-full bg-[#FFE457] z-10 flex items-center border-black border-[1px]'>
                            <p className='text-center translate-x-6 text-p-[18px]'>Reviews <img className='rotate-90 translate-x-6' src={footerArrow} alt="" /> </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

        <p className='company-name text-[201px] my-20 font-bold text-center'>Codynn</p>

        <div className='flex'>
            <div className='w-[61vw] border-[1px] opacity-50 h-[1px] translate-y-3  border-white'> </div>
            <p className='w-[8vw] text-center'> <span className='opacity-60'>Version:</span> 00.01</p>
                <div className='w-[31vw] opacity-50 border-[1px] h-[1px] translate-y-3  border-white'> </div>
        </div>

        <div className='flex mt-10'>
            <div className='w-[21vw] border-[1px] opacity-50 h-[1px] translate-y-3  border-white'> </div>
            <p className='w-[22vw] text-center'> <span className='opacity-60'>A Product of VOID NEPAL</span> © Codynn 2024</p>
                <div className='w-[58vw] opacity-50 border-[1px] h-[1px] translate-y-3  border-white'> </div>
        </div>
       



    </div>
  )
}
