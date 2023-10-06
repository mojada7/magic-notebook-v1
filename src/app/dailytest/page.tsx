'use client'
import Back from '@/components/back'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import pic from '../../../public/pics/mainpic3.png'
import Timer from '@/components/timet'
import style from './style.module.css'
import inTurnArray from '@/functions/inTurnArray'
import testResault from '@/functions/testResault'
import Link from 'next/link'

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


const [wd1, setwd1] = useState([''])
const [wd2, setwd2] = useState([''])
const [wd3, setwd3] = useState([''])

  useEffect(()=> {
    let inTurn = inTurnArray()
    settw(inTurn)
    fetch(`/api/1`).then(res=>res.json()).then(res=>{
      const data = res.data
      let nr = [data[data.length-1].word, data[data.length-2].word, data[data.length-3].word]
      setwd1(nr)
    }
      ).catch(er=>console.log(er))

    fetch(`/api/2`).then(res=>res.json()).then(res=>{
      const data = res.data
      let nr = [data[data.length-1].word, data[data.length-2].word, data[data.length-3].word]
      setwd2(nr)
    }).catch(er=>console.log(er))
    fetch(`/api/3`).then(res=>res.json()).then(res=>{
      const data = res.data
      let nr = [data[data.length-1].word, data[data.length-2].word, data[data.length-3].word]
      setwd3(nr)
    }).catch(er=>console.log(er))

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
            <div className='text-2xl font-bold text-sky-500 w-[95vw] md:w-[24rem] mt-12 h-[12vh] md:h-[8rem] bg-white border-[5px] border-sky-400 rounded-xl text-center flex justify-center items-center'>
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
                <div className={`${style.font} 'text-4xl font-extrabold text-pink-400 w-[95vw] md:w-[24rem] mt-1 h-[12vh] md:h-[8rem] bg-white border-[5px] border-pink-300 rounded-xl text-center flex justify-center items-center`}>
                  <div>
                  {
                    fw.meaning
                  }
                  </div>

                </div>
                <div className='flex flex-col lg:flex-row justify-center gap-3 mt-12'>
                  <button onClick={(e)=> ikClickHnadler(e)} className='w-[60vw] md:w-[20rem] hover:scale-105 text-xl font-bold text-white rounded-full border-[4px] border-sky-200 bg-green-400 h-[7vh] md:h-[4rem]'>I knew</button>
                  <button onClick={(e)=> dClickHnadler(e)} className='w-[60vw] md:w-[20rem] hover:scale-105 text-xl font-bold text-white rounded-full border-[4px] border-sky-200 bg-yellow-400 h-[7vh] md:h-[4rem]'>knew with doubt</button>
                  <button onClick={(e)=> dkClickHnadler(e)} className='w-[60vw] md:w-[20rem] hover:scale-105 text-xl font-bold text-white rounded-full border-[4px] border-sky-200 bg-pink-400 h-[7vh] md:h-[4rem]'>I did not know</button>
                </div>

              </>
            )
          }


  
    
            </>

          ):(
            <div className='w-full h-[20rem] flex flex-col justify-center items-center mt-20'>
              <div className='text-sky-500 text-lg w-[80vw] text-center font-bold'>
                <span className='pe-2 text-2xl text-pink-400'>
                No words enough! 
                </span >
                you can expand your vocablurary by select your decent catagory : 
              </div>
              <div className='mt-8 text-sky-600'>
                <Link href={'/dailytest/1'} >
                  <div className='w-[18rem] border-[4px] border-sky-200 h-[3rem] rounded-xl text-center py-2 mt-4 text-white hover:bg-sky-300 bg-sky-400 font-bold'>Easy</div>
                </Link>
                <div className='h-[8px] text-sm ps-2 pt-[2px]'>words like : {wd1[0]}, {wd1[1]}, {wd1[2]}</div>
                <Link href={'/dailytest/2'} >
                  <div className='w-[18rem] border-[4px] border-sky-200 h-[3rem] rounded-xl text-center py-2 mt-4 text-white hover:bg-yellow-200 bg-yellow-300 font-bold'>Medium</div>
                </Link>
                  <div className='h-[8px] text-sm ps-2 pt-[2px]'>words like : {wd2[0]}, {wd2[1]}, {wd2[2]}</div>
                <Link href={'/dailytest/3'} >
                  <div className='w-[18rem] border-[4px] border-sky-200 h-[3rem] rounded-xl text-center py-2 mt-4 text-white hover:bg-pink-300 bg-pink-400 font-bold'>advanced</div>
                </Link>
                <div className='h-[8px] text-sm ps-2 pt-[2px]'>words like : {wd3[0]}, {wd3[1]}, {wd3[2]}</div>
              </div>
            </div>
          )
        }

    </div>
    </>

  )
}

export default DailyTest