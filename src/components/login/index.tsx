"use client"
import React, { useState } from 'react'
import style from './style.module.css'
function Login({click} : any) {
  let [name, setname] = useState('')
  const inputChangeHandler = (e : any)=> {
    setname(e.target.value)
  }
  const enterClickHandler = ()=> {
    if(name.length > 2) {
      click(name)
    } 
  }

  return (
    <div className='flex flex-col justify-center items-center text-white mt-[4rem]' >
        <div className={`text-center text-[4rem] lg:text-8xl font-bold text-pink-400 z-50 ${style.h2}`}>
          WELCOME
        </div>
        <div className={`text-center text-xl font-bold text-pink-400 mb-4 rounded-full px-4 py-2 z-50 ${style.h3}`}>
          english note-book with magic learn
        </div>
        <div className='mt-8 lg:mt-[1rem]'>
          <input onChange={(e)=>{inputChangeHandler(e)}} className={`text-center text-pink-400  outline-none h-[10vh] w-[20rem] rounded-full mt-2 bg-white border-[6px] border-sky-200 text-2xl font-bold placeholder-pink-500`} placeholder='+++: What is your name?'></input>
        </div>
        <button onClick={enterClickHandler} className='flex hover:bg-pink-300 justify-center items-center w-[10rem] h-[10rem] mt-10 lg:mt-[2rem] rounded-full bg-pink-400 border-[6px] border-sky-200'>
          <div className=' text-center text-4xl font-bold'>
            Enter
          </div>
        </button>
    </div>
  )
}

export default Login