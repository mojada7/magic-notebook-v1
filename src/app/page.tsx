"use client"
import Main from '@/components/main'
import Welcom from '@/components/welcome'
import { useEffect, useState } from 'react'

export default function Home() {

  return (
    <div className='w-[100vw] fixed top-0 h-[100vh] overflow-hidden'>

 
    <Main />
    <Welcom />

    </div>
  )
}
