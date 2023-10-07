'use client'
import AlphabetCard from '@/components/alphabetCard'
import Back from '@/components/back'
import DictionaryCard from '@/components/dictionaryCard'
import SearchWord from '@/components/searchWord'
import getWordsArray from '@/functions/getWordsArray'
import saveData from '@/functions/saveData'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Mydictionary() {
  const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  const [values, setvalues] = useState({
    total : [{
      english : '',
      second : '',
      level : 0
    }],
    learned : [{
      english : '',
      second : '',
      level : 0
    }]
  })
  const [st, setst] = useState(0)

  const [wd1, setwd1] = useState([''])
  const [wd2, setwd2] = useState([''])
  const [wd3, setwd3] = useState([''])

  useEffect(()=> {


    let words : any[] = getWordsArray()
    let learnedWordes : any = []
    words.map(w=> {
      if(w?.level){
        if(w.level>7) {
          learnedWordes.push(w)
        }
      }
    })
    setvalues(
      {
        total : words,
        learned : learnedWordes

      }
    ), 
    (st!=2)&&setst(1)



    fetch(`/api/1`).then(res=>res.json()).then(res=>{
      const data = res.data
      let nr = [data[data.length-1].word, data[data.length-2].word, data[data.length-3].word]
      setwd1(nr)
    }
      ).catch(er=>console.log('er1'))
    fetch(`/api/2`).then(res=>res.json()).then(res=>{
      const data = res.data
      let nr = [data[data.length-1].word, data[data.length-2].word, data[data.length-3].word]
      setwd2(nr)
    }).catch(er=>console.log('er2'))
    fetch(`/api/3`).then(res=>res.json()).then(res=>{
      const data = res.data
      let nr = [data[data.length-1].word, data[data.length-2].word, data[data.length-3].word]
      setwd3(nr)
    }).catch(er=>console.log('er3'))



  }, [st])
 
  const testC = ()=> {

    saveData()

    setst(2)

  }

  return (
        <>

          <Back title={'Home'} hr={'/'} />

            <div className='flex z-40 flex-col-reverse md:flex-row justify-center md:justify-between md:pe-[9rem] lg:ps-[10rem] gap-5'>


              <div onClick={testC} className='flex z-20 justify-center'>
                <DictionaryCard tw={values.total.length} lw={values.learned.length} />
              </div>
              <div className='z-20'>
              <SearchWord words={values} />
              </div>


            </div>
            <div className='w-[98vw] lg:w-[90vw] h-[55vh] md:h-fit lg:pt-[10vh] overflow-y-scroll lg:overflow-hidden ms-[1vw] lg:ms-[5vw] flex flex-wrap justify-center pt-5 gap-1 lg:gap-2'>
              {(st==1)&&
              (alphabet.map(i=> {

                let chWords = values.total.filter(w=> {
                  console.log(w.english[0].toLowerCase, ' vs ', i.toLowerCase)
                  return w.english[0].toLowerCase() == i.toLowerCase()
                })
                let chwdld = chWords.filter(w=> {
                  return w.level > 7
                })

                return (
                  <Link href={`mydictionary/${i}`} key={i}>
                    <AlphabetCard alphabet={i} key={i} total={chWords.length} known={chwdld.length}/>
                  </Link>
                  
                )
              }) 
              )
              }
              {
                (st==2)&&(
                  <div className='fixed w-[100vw] h-[80vh] top-[20vh] left-0 '>
                    <div className='w-full h-[20rem] bg-transparent flex flex-col justify-center items-center mt-[20vh]'>
                      <div className='text-sky-500 text-xl lg:text-2xl w-[80vw] text-center font-extrabold'>
                        you can expand your vocablurary by select your decent catagory : 
                      </div>
                      <div className='mt-8'>
                        <Link href={'/dailytest/1'} >
                          <div className='w-[18rem] border-[4px] border-sky-200 h-[3rem] rounded-xl text-center py-2 mt-4 text-white hover:bg-sky-300 bg-sky-400 font-bold'>Easy</div>
                        </Link>
                        <div className='h-[8px] text-sm ps-2 text-white font-bold pt-[2px]'>words like : {wd1[0]}, {wd1[1]}, {wd1[2]}</div>
                        <Link href={'/dailytest/2'} >
                          <div className='w-[18rem] border-[4px] border-sky-200 h-[3rem] rounded-xl text-center py-2 mt-4 text-white hover:bg-yellow-200 bg-yellow-300 font-bold'>Medium</div>
                        </Link>
                          <div className='h-[8px] text-sm ps-2 text-white font-bold pt-[2px]'>words like : {wd2[0]}, {wd2[1]}, {wd2[2]}</div>
                        <Link href={'/dailytest/3'} >
                          <div className='w-[18rem] border-[4px] border-sky-200 h-[3rem] rounded-xl text-center py-2 mt-4 text-white hover:bg-pink-300 bg-pink-400 font-bold'>advanced</div>
                        </Link>
                        <div className='h-[8px] text-sm ps-2 text-white font-bold pt-[2px]'>words like : {wd3[0]}, {wd3[1]}, {wd3[2]}</div>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>



        </>
  )
}

export default Mydictionary