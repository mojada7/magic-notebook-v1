"use client"
import Back from '@/components/back'
import Login from '@/components/login'
import Main from '@/components/main'
import Welcom from '@/components/welcome'
import getUserLS from '@/functions/getUserLS'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {

  return (
    <div className='w-[100vw] fixed top-0 h-[100vh] overflow-hidden'>

 
    <Main />
    <Welcom />

    </div>
  )
}
