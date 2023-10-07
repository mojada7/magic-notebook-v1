"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import cloud from '../../../public/pics/cloud2.png'
import cloud2 from '../../../public/pics/cloud4.png'
import style from './style.module.css'
import getUserLS from '@/functions/getUserLS'

function Welcom() {
  const [mode, setmode] = useState(1)
  const [name, setname] = useState('')
  const [email, setemail] = useState('')

  let addUser = (name : string) : void => {
    localStorage.setItem('magic_notebook', JSON.stringify({name: name.toLowerCase(), email: email.toLowerCase(), data : {
      words: {
      }
    }}))
    setmode(1)
  }
  let addUser1 = (name : string, data : any) : void => {
    localStorage.setItem('magic_notebook', JSON.stringify({name: name.toLowerCase(), email : email.toLowerCase(), data : data}))
    setmode(1)
  }


  const nameInputChangeHandler = (e : any)=> {
    setname(e.target.value)
  }
  const emailInputChangeHandler = (e : any)=> {
    setemail(e.target.value)
  }
  const enterClickHandler = ()=> {
    if(name.length > 2 && email.length > 10) {

      fetch('/api/user', {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          name : name,
          email : email
        })
      }).then(res=>res.json()).then(res=> {
        console.log(res)
        if(res.message) {
          if(res.message==1) {
            if(res.data.data.words) {
              addUser1(name,res.data.data)
            }else {
              addUser(name)
            }
          }else {
            addUser(name)
          }
        } else {
          addUser(name)
        }
      }).catch(er=>{
        addUser(name)
        console.log(er)})
    } 
  }


  useEffect(()=> {
    let userData = getUserLS()
    console.log(userData)
    if(userData){
      null
    } else {
      setmode(0)
    }

  },[])



  return (
    <>
        <div className={`${mode&&style.m1} ${mode?'left-[300vw]':'-left-[50vw] lg:left-[15vw]'} hover:scale-105 absolute -top-[48vh] lg:-top-[150vh] h-[170vh] lg:h-[350vh] w-[350vw] lg:w-[150vw] z-50`}>
          <Image src={cloud2} alt='' fill />
        </div>
        <div className={`${mode&&style.m2} ${mode?'-left-[250vw] lg:-left-[380vw]':'-left-[110vw] lg:-left-[40vw]'} hover:scale-105 absolute top-[10vh] lg:-top-[5vh] h-[110vh] lg:h-[150vh] w-[250vw] lg:w-[121vw] -left-[110vw] z-50`}>
         <Image src={cloud} alt='' fill />
        </div>
        <div className={`${mode?'hidden':''} absolute top-[20vh] lg:top-[15vh] right-[10vw] lg:right-[15vw] w-[80vw] lg:w-[40vw] h-[15vh] lg:h-[30vh z-50`}>
          <div className={`w-full h-full flex flex-col justify-center items-center`}>
            <div className={`${style.h2} ${mode?'hidden':''} text-6xl lg:text-8xl text-pink-400 font-bold`}>
              Welcome
            </div>
            <div className={`${style.h3}  ${mode?'hidden':''} text-3xl lg:text-4xl text-pink-400 font-bold`}>
            <span className='text-yellow-400'>{'to '}</span>
              magic-noteBook
            </div>
            <div className={`${style.h3}  ${mode?'hidden':''} text-lg lg:text-2xl text-sky-500 font-bold`}>
              learning english by lightner pattern
            </div>

          </div>
        </div>
        <div className={` ${mode?'hidden':''} absolute top-[50vh] lg:top-[50vh] left-[15vw] lg:left-[5vw] w-[70vw] lg:w-[40vw] h-[15vh] lg:h-[40vh] z-50`}>
          <div className='w-full h-full flex gap-3 flex-col justify-center items-center'>
            <input onChange={(e)=>{nameInputChangeHandler(e)}} className='w-full h-[4rem] rounded-xl font-bold border-[6px] placeholder-pink-400 text-pink-400 text-center text-xl border-pink-200 bg-white hover:scale-105' placeholder='Pick a nickname ...'></input>
            <input onChange={(e)=>{emailInputChangeHandler(e)}} className='w-full h-[4rem] rounded-xl font-bold border-[6px] placeholder-sky-400 text-sky-400 text-center text-xl border-sky-200 bg-white hover:scale-105' placeholder='enter an email address'></input>



          </div>
        </div>
        <div onClick={enterClickHandler} className={`${style.h2}  ${mode?'hidden':''} absolute top-[80vh] lg:top-[60vh] left-[15vw] lg:left-[70vw] text-4xl lg:text-5xl font-extrabold hover:scale-90 hover:cursor-pointer text-sky-400 z-50`}>
          Start Journey ...
        </div>
    </>
  )
}

export default Welcom