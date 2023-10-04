'use clinet'
import Link from 'next/link'
import React, { useState } from 'react'

function SearchWord({words}:any) {

  const [serachRes, setsearchRes] = useState([])


  const changeHandler =(e:any)=> {
    let searchedWord = e.target.value
    
    let swAr = searchedWord.split('')

    let pattern = new RegExp(`${searchedWord}.*`)



    let sRes = words.total.filter((w:any)=>{
      return pattern.test(w.english)
    })


    setsearchRes(sRes)
    searchedWord==''&&setsearchRes([])
  }


  return (
    <div className='w-[70vw] md:w-[25rem] lg:w-[32rem] h-[3rem] overflow-visible'>
      <div>
        <input onChange={(e)=> changeHandler(e)} className='w-[70vw] md:w-[25rem] lg:w-[32rem] h-[3rem] mt-1 rounded-e-full border-[4px] border-sky-200 bg-white text-center placeholder-sky-400' placeholder='Search word here ...'></input>
      </div>
      {
        (serachRes.length>0)?(
          <div className='w-[65vw] h-[10rem] md:w-[24rem] overflow-hidden z-40 lg:w-[31rem]'>
            {serachRes.map((w : any)=>{
              return(
                <Link key={w.english} href={`/mydictionary/${w.english[0]}`} >
                  <div  className='w-full bg-white ps-4 pt-[1px] z-40 border-[2px] border-sky-200 hover:bg-sky-100 h-[2rem]'>
                    {w.english}
                  </div>
                </Link>

              )
            })}

          </div>   
        ):null
      }

    </div>
  )
}

export default SearchWord