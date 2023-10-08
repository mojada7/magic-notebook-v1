import Image from 'next/image'
import React, { useRef, useState } from 'react'
import audio from '../../../public/pics/audio.png'
import getAudio from '@/functions/getAudio'

function AudioBtn({word} : any) {

    const [audioURL, setaudioURL] = useState('')
    getAudio(word.english, setaudioURL)
    const audioRef : any = useRef(null)
    const audioHandler = (e:any) =>{
      audioRef.current?.play()
   }



    
  return (

    
    <>
    {
        (audioURL.length>0)?(
        <>
            <audio ref={audioRef} src={audioURL} />
            <button onClick={(e)=> audioHandler(e)} className='w-[2rem] flex justify-center me-8' >
                <Image src={audio} alt='' width={30} />
            </button>
        </>
        ):(
         <>
            <button disabled className='w-[2rem] opacity-50 flex justify-center me-8' >
                <Image src={audio} alt='' width={30} />
            </button>
        </>
        )



    }
    </>
  )
}

export default AudioBtn