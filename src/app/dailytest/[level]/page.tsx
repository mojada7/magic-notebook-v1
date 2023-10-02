'use client'
import Back from '@/components/back'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import pic from '../../../../public/pics/mainpic3.png'
import Timer from '@/components/timet'
import { useParams } from 'next/navigation'
import getWordsArray from '@/functions/getWordsArray'
import getUserLS from '@/functions/getUserLS'
import addWord from '@/functions/addWord'
import editWord from '@/functions/editWord2'


function Level() {
    const params = useParams()
    const [main , setmain] = useState(0)
    const [step, setstep] = useState(0)
    const [fw, setfw] = useState({english:'', meaning: ''})
    const [tw, settw] = useState([{english:'', second: ''}])

    let randomIndex : number = -1
    if((tw.length>1)||((tw.length==1)&&(tw[0].english!=''))) {
      randomIndex = tw.length -1;
    }
  
    if(randomIndex!=-1&&step==0) {
      setfw({english : tw[randomIndex].english, meaning : tw[randomIndex].second})
      setstep(1)
      setmain(1)
    }

    function endTest(word:string){
      let wordAr = [...tw]
      let newAr = wordAr.filter(w=>{
        return w.english!=word
      })
      settw(newAr)
      setstep(0)
    }



    const skipHandler = (e:any) =>{
      setmain(2)
    }
    const ikClickHnadler = (e:any) =>{
      endTest(fw.english)
      if(tw.length==1){
        setmain(0)
      }

    }
    const dClickHnadler = (e:any) =>{
      addWord({
        english : fw.english,
        secend : fw.meaning
      })
      editWord(fw.english, 5)
      endTest(fw.english)
      if(tw.length==1){
        setmain(0)
      }
    }
    const dkClickHnadler = (e:any) =>{
      addWord({
          english : fw.english,
          secend : fw.meaning
        })
      endTest(fw.english)
      if(tw.length==1){
        setmain(0)
      }
    }


    useEffect(()=>{
      let ws = getUserLS()
      let savedWords = JSON.parse(ws)
      let sw = savedWords.data.words
      fetch(`/api/${params.level}`).then(res=>res.json()).then(res=>{
        let words = res.data
        let finalWords = words.filter(w=>{
          return !sw[w.word]
        })

        let ffw = finalWords.map(w=>{
          return {english : w.word, second : w.meaning}
        })

        console.log(ffw)
        settw(ffw)

          

      }).catch(er=>console.log(er))



    },[])



  return (
    <>
    <Back title={'Home'} hr={'/'} />
    <div className='flex flex-col items-center justify-center pt-[4vh]'> 
        <Image src={pic} alt='' width={100} />
        {
          main?(
            <>
            <div className='text-2xl font-bold text-sky-500 w-[95vw] md:w-[24rem] mt-12 h-[12vh] md:h-[6rem] bg-white border-[5px] border-sky-200 rounded-xl text-center flex justify-center items-center'>
            <div>
              {fw.english}
            </div>
          </div>
          {
            main==1?(
              <>
              <div className='mt-8'>
                <Timer set={setmain} />
              </div>
              <button onClick={(e)=> skipHandler(e)} className='mt-8 w-[12rem] h-[5rem] bg-pink-400 hover:bg-pink-300 text-white text-2xl rounded-full border-[6px] border-sky-200'>Skip</button>
              </>
            ):(
              <>
                <div className='text-2xl font-bold text-pink-400 w-[95vw] md:w-[24rem] mt-1 h-[12vh] md:h-[6rem] bg-white border-[5px] border-sky-200 rounded-xl text-center flex justify-center items-center'>
                  <div>
                  {
                    fw.meaning
                  }
                  </div>

                </div>
                <div className='flex flex-col lg:flex-row justify-center gap-3 mt-6'>
                  <button onClick={(e)=> ikClickHnadler(e)} className='w-[60vw] md:w-[20rem] hover:scale-105 text-xl font-semibold text-white rounded-full border-[4px] border-sky-200 bg-green-400 h-[7vh] md:h-[4rem]'>I knew</button>
                  <button onClick={(e)=> dClickHnadler(e)} className='w-[60vw] md:w-[20rem] hover:scale-105 text-xl font-semibold text-white rounded-full border-[4px] border-sky-200 bg-yellow-300 h-[7vh] md:h-[4rem]'>knew with doubt</button>
                  <button onClick={(e)=> dkClickHnadler(e)} className='w-[60vw] md:w-[20rem] hover:scale-105 text-xl font-semibold text-white rounded-full border-[4px] border-sky-200 bg-rose-400 h-[7vh] md:h-[4rem]'>I did not know</button>
                </div>

              </>
            )
          }


  
    
            </>

          ):(
            <div className='w-full h-[20rem] bg-sky-300 flex justify-center items-center'>
              <div className='text-white text-2xl'>
                Databas words run out of! 
                <span className='text-xl'>
                  {' help us by adding new words'}
                </span>
              </div>
            </div>
          )
        }

    </div>
    </>
  )
}

export default Level