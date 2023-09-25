'use client'
import Back from '@/components/back'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import add from '../../../public/pics/mainpic1.png'
import addWord from '@/functions/addWord'

function Addnew() {
  const eref : any = useRef(null)
  const sref : any = useRef(null)
  const [inputData, setinputData] = useState({
    english : '',
    secend : ''
  })
  const [cardMode, setcardMode] = useState(0)

  const addWordx = () : void => {
    if(addWord(inputData)) {
      eref.current.value = ""
      sref.current.value = ""
      setcardMode(3)
    } else {
      setcardMode(2)
    }

  }

  const eChangeHandler = (e : any)=>{
    let newD = inputData
    newD.english = e.target.value
    setinputData(newD)
  }
  const sChangeHandler = (e : any)=>{
    let newD = inputData
    newD.secend = e.target.value
    setinputData(newD)
  }
  const addClickHandler = (e:any)=> {
    if ((inputData.english != '' )&&(inputData.secend != '')) {
      setcardMode(1)
    }
  }
  const yesClickHandler = (): void=> {
    addWordx()
  }
  const editeClickHandler = (): void=> {
    setcardMode(0)
  }
  const sucClickHandler = (): void=> {
    setcardMode(0)
  }

  return (
    <>
      <Back title={'Home'} hr={'/'} />
      <div className='z-20 flex flex-col items-center justify-center pt-[10vh]'>
        <Image src={add} alt='' width={100} />
        <input ref={eref} onChange={(e)=> eChangeHandler(e)} className='w-[24rem] lg:w-[28rem] h-[5rem] text-center rounded-xl placeholder-pink-300 text-2xl text-pink-400 border-[6px] border-sky-200 mt-8 font-bold' placeholder='Type new English word here ...' />
        <input ref={sref} onChange={(e)=> sChangeHandler(e)} className='w-[24rem] lg:w-[28rem] h-[5rem] text-center rounded-xl placeholder-sky-300 text-2xl text-sky-400 border-[6px] border-sky-200 mt-4 font-bold' placeholder='Persian translation here ...' />
        <button onClick={(e)=>addClickHandler(e)} className='mt-[3rem] w-[12rem] h-[4rem] bg-pink-400 hover:bg-pink-300 text-white text-2xl rounded-full border-[6px] border-sky-200'>
            <span className='text-2xl'>{'+ '}</span>
            Add
        </button>
      </div>

      {
        cardMode==1&&(
          <div className='w-[100vw] h-[70vh] bg-sky-300 fixed top-[28vh] flex justify-center'>
            <div>
              <div className='text-pink-500 text-4xl text-center mt-12 w-[24rem] bg-white py-3 rounded-xl border-[4px] border-cyan-200'>
                {`${inputData.english}`}
              </div>
              <div className='text-sky-600 text-4xl text-center mt-8 w-[24rem] bg-white py-3 rounded-xl border-[4px] border-cyan-200'>
                {`${inputData.secend}`}
              </div>
              <div className='text-center mt-20 text-xl text-white'>
                Are you sure about spelling?
              </div>
              <div className='flex justify-center mt-4 gap-4'>
                <button onClick={yesClickHandler} className='bg-blue-400 hover:bg-blue-300 text-2xl border-[4px] border-sky-200 py-3 w-[8rem] rounded-2xl text-center text-white'>Yes</button>
                <button onClick={editeClickHandler} className='bg-yellow-400 hover:bg-yellow-300 text-2xl border-[4px] border-sky-200 py-3 w-[8rem] rounded-2xl text-center text-white'>Edite</button>
              </div>
            </div>
          </div>
        )
      }
      {
        cardMode==2&&(
          <div className='w-[100vw] h-[70vh] bg-sky-300 fixed top-[28vh] flex flex-col items-center'>
            <div className='text-sky-400 bg-white border-[5px] border-sky-200 rounded-xl px-4 py-2 text-2xl md:text-4xl mt-32 text-center'>
              This word has already existed!
            </div>
            <button onClick={editeClickHandler} className='bg-pink-400 mt-16 hover:bg-pink-300 text-2xl border-[4px] border-sky-200 py-3 w-[8rem] rounded-2xl text-center text-white'>OK</button>
        </div>
        )
      }
      {
        cardMode==3&&(
          <div className='w-[100vw] h-[70vh] bg-sky-300 fixed top-[28vh] flex flex-col items-center'>
            <div className='text-sky-400 bg-white border-[5px] border-sky-200 rounded-xl px-4 py-2 text-4xl mt-32 text-center'>
              Succesfully saved!
            </div>
            <button onClick={sucClickHandler} className='bg-blue-400 mt-16 hover:bg-blue-300 text-2xl border-[4px] border-sky-200 py-3 w-[8rem] rounded-2xl text-center text-white'>OK</button>
        </div>
        )
      }
    </>

  )
}

export default Addnew