import React from 'react'
import barchart from "../../assets/barChart.png"
import john from "../../assets/john.png"
import david from "../../assets/david.png"
import merry from "../../assets/merry.png"
import pic1 from "../../assets/pic1.png"
import pic2 from "../../assets/pic2.png"
import pic3 from "../../assets/pic3.png"
import pic4 from "../../assets/pic4.png"
import pic5 from "../../assets/pic5.png"
import upIcon from "../../assets/triangle.png"
import down from "../../assets/down.png"
import scroll from "../../assets/scroll.png"

export const LeaderBoard = () => {


  const leaderboard = [
    {
        position: 4,
        img: pic1,
        name: "Davon Lane",
        score: "3768",
        track: upIcon
    }, 

    {
        position: 5,
        img: pic2,
        name: "Ronald",
        score: "3578",
        track: down
    }, 
    {
        position: 6,
        img: pic3,
        name: "Eleanor Pena",
        score: "3476",
        track: upIcon
    }, 
    {
        position: 7,
        img: pic4,
        name: "Savannah",
        score: "3125",
        track: down
    }

  ]

  return (
    <div className='mt-36 mx-32'>
        <h1 className='text-9xl font-semibold tracking-tight w-[675px]'> Leaderboard</h1>

        <div className='flex ml-[212px] gap-[300px]'>
                {/* LeaderBoard-img start here */}
            <div> 
                <div className='flex gap-6 mt-24 '>
                    <div className='relative mt-20 text-center'>
                        <img className='h-[101px] w-[101px] rounded-full ' src={john} alt="" />
                        <p className='absolute left-1 top-0 bg-gray-400 rounded-full flex items-center justify-center h-7 w-7 font-bold'>2</p>
                        <p className='font-bold mt-2 text-2xl'>John</p>
                        <p className='text-xl font-medium'>4235</p>
                    </div>
                    <div  className='relative text-center'>
                    <img className='h-[130px] w-[130px] rounded-full ' src={david} alt="" />
                        <p className='absolute left-1 top-0 bg-yellow-400 rounded-full flex items-center justify-center h-10 w-10 font-bold text-xl'>1</p>
                        <p className='font-bold mt-2 text-2xl'>David</p>
                        <p className='text-xl font-medium'>4578</p>
                    </div>
                    <div className='relative mt-20 text-center'>
                    <img className='h-[101px] w-[101px] rounded-full' src={merry} alt="" />
                        <p className='absolute left-1 top-0 bg-orange-600 rounded-full flex items-center justify-center h-7 w-7 font-bold'>3</p>
                        <p className='font-bold mt-2 text-2xl'>Merry</p>
                        <p className='text-xl font-medium'>3967</p>
                    </div>
                </div>
                    <div>
                        <img src={barchart} alt="" />
                        <p className='w-[400px] h-28'></p>
                    </div>
                </div>
                                        {/* //Another LeaderBoard div start here */}
                 <div>
                <div className='flex justify-center mt-12 w-[500px]'>
                    <p className='monthly py-3 px-8 bg-black text-white mr-[75px] rounded-[50px] text-2xl'>Monthly</p>
                    <p className='daily py-3 px-8 text-2xl'>Daily</p>
                </div>

                <div >
                    <div className='flex gap-8 items-center'>
                        <div className='w-[500px] '>
                            {leaderboard.map((content, index) => (
                        <div key={index} className='flex items-center text-start justify-between mb-5 mt-8 font-medium text-xl border-[1px] px-[15px] py-[10px] rounded-2xl border-black'>
                        <p>{content.position}</p>
                            <div className='w-[300px] flex items-center gap-5'>
                                <img src={content.img} alt="" />
                                <p>{content.name}</p>
                            </div>
                            <div className='flex gap-3 items-center '>
                               <p>{content.score}</p>
                                 <img className='h-[15px] w-[15px]' src={content.track} alt="" /> 
                            </div>
                        
                            </div>
                            ))} 
                        </div>
                        <img className='h-[430px]' src={scroll} alt="" />
                    </div>
                    
                    <div className='w-[500px]'>
                        <p className='font-medium text-xl'>You</p>
                        <div className='flex items-center text-start justify-between mb-5 mt-[15px] font-medium text-xl border-[1px] px-[15px] py-[10px] rounded-2xl border-black'>
                            <p>11</p>
                            <div className='w-[300px] flex items-center gap-5'>
                                <img src={pic5} alt="" />
                            <   p>Devon Lane</p>
                            </div>
                            <div className='flex gap-3 items-center '>
                                <p>2857</p>
                                <img  className='h-[15px] w-[15px]' src={upIcon} alt="" />
                            </div>
                        </div>
                    </div> 
                </div>
                 
            </div>
            {/* Ends here */}

          
            </div>

            
        <div>
        </div>
    </div>
  )
}
