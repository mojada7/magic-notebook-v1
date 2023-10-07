import Image from 'next/image'
import React from 'react'
import audio from '../../../public/pics/audio.png'

function AudioBtn({audioRef, audioURL, audioHandler} : any) {
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