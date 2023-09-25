'use client'
import Back from '@/components/back'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import pic from '../../../public/pics/mainpic3.png'
import Timer from '@/components/timet'
import injection from '@/functions/injection'
import inTurnArray from '@/functions/inTurnArray'
import testResault from '@/functions/testResault'

function DailyTest() {

  const [main , setmain] = useState(0)

  const [step, setstep] = useState(0)
  const [fw, setfw] = useState({english:'', meaning: ''})
  const [tw, settw] = useState([{english:'', second: ''}])



  let randomIndex : number = -1
  if((tw.length>1)||((tw.length==1)&&(tw[0].english!=''))) {
    randomIndex = Math.floor(Math.random() * tw.length);
  }

  if(randomIndex!=-1&&step==0) {
    setfw({english : tw[randomIndex].english, meaning : tw[randomIndex].second})
    setstep(1)
    setmain(1)
  }

  console.log(randomIndex)



  useEffect(()=> {
    let inTurn = inTurnArray()
    settw(inTurn)

  },[])

  const skipHandler = (e : any)=> {

    setmain(2)


  }

  function endTest(word:string){
    let wordAr = [...tw]
    let newAr = wordAr.filter(w=>{
      return w.english!=word
    })
    settw(newAr)
    setstep(0)
  }

  let ikClickHnadler=(e:any)=>{
    testResault(fw.english, 0)
    endTest(fw.english)
    if(tw.length==1){
      setmain(0)
    }


  }
  let dClickHnadler=(e:any)=>{
    testResault(fw.english, 1)
    endTest(fw.english)
    if(tw.length==1){
      setmain(0)
    }


  }
  let dkClickHnadler=(e:any)=>{
    testResault(fw.english, 2)
    endTest(fw.english)
    if(tw.length==1){
      setmain(0)
    }


  }


  return (
    <>
    <Back title={'Home'} hr={'/'} />
    <div className='flex flex-col items-center justify-center pt-[4vh]'> 
        <Image src={pic} alt='' width={100} />
        {
          main?(
            <>
            <div className='text-4xl font-bold text-sky-500 w-[95vw] md:w-[24rem] mt-6 h-[12vh] md:h-[8rem] bg-white border-[5px] border-sky-200 rounded-xl text-center flex justify-center items-center'>
            <div>
              {fw.english}
            </div>
          </div>
          {
            main==1?(
              <>
              <div className='mt-8'>
                <Timer set={setmain} />
              </div>
              <button onClick={(e)=> skipHandler(e)} className='mt-8 w-[12rem] h-[5rem] bg-pink-400 hover:bg-pink-300 text-white text-2xl rounded-full border-[6px] border-sky-200'>Skip</button>
              </>
            ):(
              <>
                <div className='text-4xl font-bold text-pink-400 w-[95vw] md:w-[24rem] mt-1 h-[12vh] md:h-[8rem] bg-white border-[5px] border-sky-200 rounded-xl text-center flex justify-center items-center'>
                  <div>
                  {
                    fw.meaning
                  }
                  </div>

                </div>
                <div className='flex flex-col lg:flex-row justify-center gap-1 mt-6'>
                  <button onClick={(e)=> ikClickHnadler(e)} className='w-[90vw] md:w-[20rem] hover:scale-105 text-xl font-semibold text-white rounded-full border-[4px] border-sky-200 bg-cyan-400 h-[7vh] md:h-[4rem]'>I knew</button>
                  <button onClick={(e)=> dClickHnadler(e)} className='w-[90vw] md:w-[20rem] hover:scale-105 text-xl font-semibold text-white rounded-full border-[4px] border-sky-200 bg-yellow-400 h-[7vh] md:h-[4rem]'>knew with doubt</button>
                  <button onClick={(e)=> dkClickHnadler(e)} className='w-[90vw] md:w-[20rem] hover:scale-105 text-xl font-semibold text-white rounded-full border-[4px] border-sky-200 bg-pink-400 h-[7vh] md:h-[4rem]'>I did not know</button>
                </div>

              </>
            )
          }


  
    
            </>

          ):(
            <div className='w-full h-[20rem] bg-sky-300 flex justify-center items-center'>
              <div className='text-white text-4xl'>
                no words enough!
              </div>
            </div>
          )
        }

    </div>
    </>

  )
}

export default DailyTest