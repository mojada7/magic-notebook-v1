'use client'
import React, { useEffect, useRef, useState } from 'react'
import TrueC from '../trueC'
import FalseC from '../falseC'
import editWord from '@/functions/editWord'
import Image from 'next/image'
import audio from '../../../public/pics/audio.png'
function WordCard({wrd, mean, his, lev} : {
    wrd : string,
    mean : string,
    his : boolean[],
    lev : any
}) {

    const [inputs, setinputs] = useState({
        en : wrd,
        m : mean
    })
    const [stat , setstat] = useState(0)

    const [audioURL, setaudioURL] = useState('')

    const audioRef = useRef(null)

    const editeHandler = (e : any)=> {
        setinputs({
            en : wrd,
            m : mean
        })
        setstat(1)
  
    }

    const saveEditeHandler = (e:any)=> {
        if(inputs.en && inputs.m) {
            editWord(inputs.en, inputs.m, wrd)
            setstat(0)
        } else if (inputs.en) {
            editWord(inputs.en, mean, wrd)
            setstat(0)
        } else if (inputs.m) {
            editWord(wrd, inputs.m, wrd)
            setstat(0)
        }

        history.go()

    }
    const cancelEditeHandler = (e:any)=> {
        setstat(0)
    }
    const eInputChangeHandler = (e:any)=> {
        setinputs({
            en : e.target.value,
            m : inputs.m
        })
    }
    const mInputChangeHandler = (e:any)=> {
        setinputs({
            en : inputs.en,
            m : e.target.value
        })
    }
    const audioHandler = (e:any)=> {


        if(audioRef.current) {
            audioRef.current.play()
        } else {
            
        }
    }


    const addEditeLayer = (e : string, m : string)=> {{
        return (
            <div className='bg-sky-300 border-[4px] border-sky-200 w-[90vw] md:w-[70vw] h-[50vh] fixed top-[28vh] rounded-2xl left-[5vw] md:left-[15vw] lg:left-[25vw] lg:w-[50vw] flex justify-center pt-[10vh]'>
            <div className='flex flex-col gap-5'>
                <input onChange={(e)=> eInputChangeHandler(e)} value={e} className='h-[4rem] text-center text-2xl w-[20rem] rounded-xl font-semibold placeholder:text-sky-500 text-sky-500 border-[4px] border-sky-200' />
                <input onChange={(e)=> mInputChangeHandler(e)} value={m} className='h-[4rem] text-center text-2xl w-[20rem] rounded-xl font-semibold border-[4px] text-pink-500 border-sky-200' />
                <div className='flex justify-center gap-6 md:gap-8 lg:gap-16 mt-8'>
                    <button onClick={(e)=> cancelEditeHandler(e)} className='w-[8rem] bg-pink-400 rounded-xl h-[3rem] text-center text-white font-semibold border-[3px] hover:bg-pink-200 border-pink-200'>cancel</button>
                    <button onClick={(e)=> saveEditeHandler(e)} className='w-[8rem] bg-cyan-400 rounded-xl h-[3rem] text-center text-white font-semibold border-[3px] hover:bg-cyan-200 border-cyan-200'>save</button>
                </div>

            </div>
        </div>
        )
    }}

    useEffect(()=> {

        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wrd}`).then(res=>res.json()).then(res=> {
            
        console.log(res)
        if(res[0].phonetics.length>0) {
                res[0].phonetics.map(x=>{
                    if(x.audio.length>0){
                        setaudioURL(x.audio)
                    }


                    
                })
            }
  
        }).catch(er=>console.log(er))

    }, [])





  return (
    <div className={`flex ${lev<8?'bg-white':'bg-green-100'} rounded-lg md:px-4 py-2 md:py-4 border-[4px] border-sky-200`}>
        <div className='flex w-[80vw] flex-col md:flex-row'>
            <div className='flex'>
                <div className='w-[8rem] md:w-[16rem] ps-2 tetx-lg md:text-lg font-semibold text-pink-500'>
                    {wrd}
                </div>
                <div className='w-[6rem] md:w-[16rem] ps-2 tetx-lg md:text-lg font-semibold text-sky-500'>
                    {mean} 
                </div>           
            </div>

            <div className='flex gap-1 items-center ps-2'>
                {   
                    lev<8&&(
                        his.map(i=> {
                            if(i){
                                return (<TrueC key={Math.random()*1000} />)
                            }
                            return (<FalseC key={Math.random()*1000}/>)
                        })
                    )

                }
                {
                    lev>7&& (
                        <div className='text-green-500 font-semibold'>
                            complete
                        </div>
                    )
                }
                
            </div>
        </div>

       


        
        <div className='flex justify-end w-[15vw] lg:w-[10vw]'>
            <div>
            {
                (audioURL.length>0)&&(
                    <>
                        <audio ref={audioRef} src={audioURL} />
                        <button onClick={(e)=> audioHandler(e)} className='w-[2rem] flex justify-center me-8' >
                            <Image src={audio} alt='' width={30} />
                        </button>
                    </>
                )
            }

            </div>
            <div>
                <button onClick={(e)=> editeHandler(e)} className='bg-yellow-400 rounded-lg w-14 h-8 text-center border-[3px] hover:bg-yellow-200 hover:border-yellow-400 hover:scale-105 font-semibold border-yellow-200'>
                    edit
                </button>
            </div>

        </div>
        {

            
        stat?(
            addEditeLayer(inputs.en, inputs.m)
        ):null
        }


    </div>
  )}

export default WordCard


