'use client'
import AlphabetCard from '@/components/alphabetCard'
import Back from '@/components/back'
import DictionaryCard from '@/components/dictionaryCard'
import SearchWord from '@/components/searchWord'
import getWordsArray from '@/functions/getWordsArray'
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
    ) 
    setst(1)
  }, [])
 

  return (
        <>
            <Back title={'Home'} hr={'/'} />
            <div className='flex flex-col-reverse md:flex-row justify-center md:justify-between md:pe-[9rem] lg:ps-[10rem] gap-5'>
              <div className='flex justify-center'>
                <DictionaryCard tw={values.total.length} lw={values.learned.length} />
              </div>

              <SearchWord />
            </div>
            <div className='w-[98vw] lg:w-[90vw] h-[55vh] md:h-fit lg:pt-[10vh] overflow-y-scroll lg:overflow-hidden ms-[1vw] lg:ms-[5vw] flex flex-wrap justify-center pt-5 gap-1 lg:gap-2'>
              {st?
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
              ):null
              }
            </div>



        </>
  )
}

export default Mydictionary