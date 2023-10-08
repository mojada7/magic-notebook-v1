import Image from 'next/image'
import React, { useRef, useState } from 'react'
import audiopic from '../../../public/pics/audio.png'
import gaudiopic from '../../../public/pics/gaudio.png'
import noaudiopic from '../../../public/pics/noaudio.png'
function ANAudioBtn({word}:any) {
    const audioRef : any = useRef(null)
    const [audioURL, setaudioURL] = useState('')
    const [audioclicked, setaudioclicked] = useState(0)


    const soundClickHandler = (e:any) => {

            audioRef.current.play()

        
      }

      const gsoundClickHandler = (e:any) => {
        console.log(word)
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.english}`)
        .then(res=>res.json()).then(res=>{
          if(res[0].phonetics.length>0) {
            res[0].phonetics.map((x: { audio: any})=>{
                if(x.audio.length>0){
                    setaudioURL(x.audio)
                    setaudioclicked(1)

                }
            })


        }
        }).catch(er=>{

        })
 
      }




  return (
    <>
    {
        audioclicked?(
            <>
            <audio ref={audioRef} src={audioURL} />
            <button onClick={(e)=>soundClickHandler(e)} className={` w-[4rem] ps-3 text-md text-white hover:bg-sky-300 h-[5rem] rounded-md border-[6px] bg-sky-200 rounded-s-none border-s-0 border-sky-200`}>
              <Image src={audiopic} width={40} alt='sound' />
            </button>
            </>
        ):(
            <>
            <button onClick={(e)=>gsoundClickHandler(e)} className={` w-[4rem] ps-3 text-md text-white hover:bg-sky-300 h-[5rem] rounded-md border-[6px] bg-sky-200 rounded-s-none border-s-0 border-sky-200`}>
              <Image src={gaudiopic} width={40} alt='sound' />
            </button>

            </>
        )
    }

    </>
  )
}

export default ANAudioBtn