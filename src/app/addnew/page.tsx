'use client'
import Back from '@/components/back'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import add from '../../../public/pics/mainpic1.png'
import addWord from '@/functions/addWord'
import saveData from '@/functions/saveData'
import style from './style.module.css'
import ANAudioBtn from '@/components/addNewAudioBtn'
import TranslaterBtn from '@/components/translateBtn'
function Addnew() {
  const eref : any = useRef(null)
  const sref : any = useRef(null)
  const [inputData, setinputData] = useState({
    english : '0',
    secend : ''
  })
  const [cardMode, setcardMode] = useState(0)
  const addWordx = () : void => {
    if(addWord(inputData)) {
      setcardMode(3)
    } else {
      setcardMode(2)
    }

  }

  const eChangeHandler = (e : any)=>{
    let newD = inputData
    newD.english = e.target.value.toLowerCase()
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

  const sendWord = (dif:number) => {

    fetch('/api', {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        word : inputData.english.toLowerCase(),
        meaning : inputData.secend,
        difficulty : dif
      })
    }).then(res=>res.json()).then(res=>{
      console.log(res)
      setcardMode(0)
    }).catch(er=>console.log(er))

    saveData()

  }


  const eClickHandler = (e:any): void=> {

    sendWord(1)
  }
  const mClickHandler = (e:any): void=> {

    sendWord(2)
  }
  const hClickHandler = (e:any): void=> {

    sendWord(3)
  }















  return (
    <>
      <Back title={'Home'} hr={'/'} />

      {
        cardMode==0&&(
          <div className='z-20 flex flex-col items-center justify-center pt-[6vh]'>
          <Image src={add} alt='' width={100} />
          <div className='flex mt-8 rounded-xl border-[6px] bg-sky-200 border-sky-400'>
            <input ref={eref} onChange={(e)=> eChangeHandler(e)} className='w-[80vw] lg:w-[24rem] h-[5rem] text-center rounded-s-md placeholder-sky-300 text-xl text-sky-400  border-sky-200 font-bold' placeholder='Type new English word here ...' />
            
          
            <ANAudioBtn word={inputData} />
         
            

          </div>
         
          <div className='flex rounded-xl border-[6px] mt-4 bg-pink-200 border-pink-300'>
            <input ref={sref} onChange={(e)=> sChangeHandler(e)} className={`${style.font} w-[80vw] lg:w-[24rem] h-[5rem] text-center rounded-s-md placeholder-pink-300 text-xl font-bold text-pink-400`} placeholder='Persian translation here ...' />
            <TranslaterBtn sref={sref} inputData={inputData} setinputData={setinputData} />
          </div>
         
          <button onClick={(e)=>addClickHandler(e)} className='mt-[3rem] w-[16rem] h-[4rem] bg-pink-400 hover:bg-pink-300 text-white text-2xl rounded-full border-[6px] border-sky-200'>
              <span className='text-2xl'>{'+ '}</span>
              Add
          </button>
        </div>
        )
      }

      {

        cardMode==1&&(
          <div className='w-[100vw] h-[70vh] fixed top-[28vh] flex justify-center'>
            <div>
              <div className='text-pink-500 text-2xl lg:text-3xl text-center mt-12 w-[90vw] lg:w-[24rem] bg-white py-3 rounded-xl border-[4px] border-cyan-200'>
                {`${inputData.english}`}
              </div>
              <div className={`text-sky-600 text-2xl lg:text-3xl text-center mt-8 w-[90vw] lg:w-[24rem] bg-white py-3 rounded-xl ${style.font} border-[4px] border-cyan-200`}>
                {`${inputData.secend}`}
              </div>
              <div className='text-center mt-20 font-bold text-xl text-white'>
                Are you sure about spelling?
              </div>
              <div className='flex justify-center mt-4 gap-4'>
                <button onClick={yesClickHandler} className='bg-blue-400 hover:bg-blue-300 text-2xl border-[4px] border-sky-200 py-2 w-[8rem] rounded-2xl text-center text-white'>Yes</button>
                <button onClick={editeClickHandler} className='bg-yellow-400 hover:bg-yellow-300 text-2xl border-[4px] border-sky-200 py-2 w-[8rem] rounded-2xl text-center text-white'>Edite</button>
              </div>
            </div>
          </div>
        )
      }
      {
        cardMode==2&&(
          <div className='w-[100vw] h-[70vh]fixed top-[28vh] flex flex-col items-center'>
            <div className='text-sky-400 bg-white border-[5px] border-sky-200 rounded-xl px-4 py-2 text-2xl md:text-4xl mt-32 text-center'>
              This word has already existed!
            </div>
            <button onClick={editeClickHandler} className='bg-pink-400 mt-16 hover:bg-pink-300 text-2xl border-[4px] border-sky-200 py-3 w-[8rem] rounded-2xl text-center text-white'>OK</button>
        </div>
        )
      }
      {
        cardMode==3&&(
          <div className='w-[100vw] h-[70vh] fixed top-[28vh] flex flex-col items-center'>
            <div className='text-sky-400 bg-white border-[5px] border-sky-200 rounded-xl px-4 py-2 mt-32 text-center text-xl font-semibold'>
              How do you evaluate difficulty of this word?
            </div>
            <div className='mt-16 flex gap-4'>
              <button onClick={(e)=>eClickHandler(e)} className='w-[6rem] text-white text-lg rounded-lg border-[4px] font-semibold border-sky-200 h-[3rem] bg-green-400'>Easy</button>
              <button onClick={(e)=>mClickHandler(e)} className='w-[6rem] text-white text-lg rounded-lg border-[4px] font-semibold border-sky-200 h-[3rem] bg-yellow-400'>Medium</button>
              <button onClick={(e)=>hClickHandler(e)} className='w-[6rem] text-white text-lg rounded-lg border-[4px] font-semibold border-sky-200 h-[3rem] bg-pink-400'>Hard</button>
            </div>
        </div>
        )
      }
    </>

  )
}

export default Addnew