"use client"
import Back from '@/components/back'
import Login from '@/components/login'
import Main from '@/components/main'
import getUserLS from '@/functions/getUserLS'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [mode, setmode] = useState(1)
  let addUser = (name : string) : void => {
    localStorage.setItem('magic_notebook', JSON.stringify({name: name, data : {
      words: {
      }
    }}))
    setmode(1)
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
    {
      mode==0&&(<Login click={addUser} />)
    }
    {
      mode==1&&(<Main click={setmode} />)
    }
    </>
  )
}
