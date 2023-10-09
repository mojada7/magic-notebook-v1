import React, { useState } from 'react'
import magic from '../../../public/pics/magic-wand.png'
import Image from 'next/image'
import loadingpic from '../../../public/pics/loading.png'
function TranslaterBtn({sref, inputData, setinputData} : any) {

  const [flg, setflg]= useState(0)

    const translateClickHandler = (e:any) => {
      setflg(1)
        fetch(`https://one-api.ir/translate/?token=818351:651929dfbabb8&action=google&lang=fa&q=${inputData.english}`)
        .then(res=>res.json()).then(res=>{
          setflg(0)
          if(res.status==200) {
            setinputData({
              english : inputData.english,
              secend : res.result
            })
            sref.current.value = res.result
    
          }
        }).catch(er=>{
          setflg(0)
        })
      }


  return (

    <>

            
            {
              flg==0?(
                <>
                  <button onClick={(e)=>translateClickHandler(e)} className='w-[4rem] ps-3 text-md text-white hover:bg-pink-300 h-[5rem] rounded-md border-[6px] bg-pink-200 rounded-s-none border-s-0 border-pink-200'>
                    <Image src={magic} width={40} alt='magic translate' />
                  </button>

                </>
              ):(

                <>
                  <button className='w-[4rem] ps-3 text-md text-whit h-[5rem] rounded-md'>
                    <Image className='animate-spin ' src={loadingpic} width={40} alt='magic translate' />
                  </button>

                </>
              )
            }



    
    
    
    </>
  )
}

export default TranslaterBtn