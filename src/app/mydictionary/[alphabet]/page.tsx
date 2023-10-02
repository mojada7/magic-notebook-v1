'use client'
import React, { useEffect, useState } from 'react'
import {useParams} from 'next/navigation'
import getWordsArray from '@/functions/getWordsArray'
import sortByAlphabet from '@/functions/sortByAlphabet'
import DictionaryCard from '@/components/dictionaryCard'
import Back from '@/components/back'
import WordCard from '@/components/wordCard'

function Alphabet() {
    const params = useParams()
    const [values, setvalues] = useState({
        total : [{
          english : '',
          second : '',
          level : 0,
          test : [],
          ttl : []
        }],
        learned : [{
          english : '',
          second : '',
          level : 0,
          test : [],
          ttl : []
        }]
      })
      const [st, setst] = useState(0)
      useEffect(()=> {
        let words : any[] = getWordsArray()
        let wordsx : any[] = words.filter(w=>{
            return w.english[0].toLowerCase() == params.alphabet[0].toLowerCase()
        })
        let learnedWords : any[] = []
        words.map(w=> {
          if(w?.level){
            if(w.level>7) {
              learnedWords.push(w)
            } 
          }
        })
        let learnedWordsx : any[] = []
        learnedWordsx = learnedWords.filter(w=>{
            return w.english[0].toLowerCase() == params.alphabet[0].toLowerCase()
        })


        let sortedtt = wordsx.map(w=>{
          return w.english
        })

        let sortedttx = sortByAlphabet(sortedtt)


        let Wordsxx = sortedttx.map(w=>{
          let x = wordsx.find(i=>{
            return i.english == w
          })
          return x
        })

        let sortedlw = learnedWords.map(w=>{
          return w.english
        })
        let sortedlwx = sortByAlphabet(sortedlw)
        let learnedwordxx = sortedlwx.map(w=>{
          let x = learnedWordsx.find(i=>{
            return i.english == w
          })
          return x
        })


        setvalues(
          {
            total : Wordsxx,
            learned : learnedwordxx
    
          }
        ) 
        setst(1)


      },[params.alphabet])




  return (
    <>
            <Back title={'Back'} hr={'/mydictionary'} />
            <div className='flex flex-col-reverse md:flex-row justify-center pt-16 md:pt-0 md:justify-between md:pe-[9rem] lg:ps-[10rem] gap-5'>
              <div className='flex justify-center'>
                <DictionaryCard tw={values.total.length + values.learned.length} lw={values.learned.length} />
              </div>
            </div>
            <div className='w-[98vw] lg:w-[90vw] h-[50vh] lg:mt-[5vh] overflow-y-scroll ms-[1vw] lg:ms-[5vw] flex flex-col justify-start mt-5 gap-1 lg:gap-2'>

              {values.total.map(w=> {
                return(              
                <WordCard wrd={w.english} mean={w.second} his={w.test} lev={w.level} key={w.english}/>
                )
              })}

            </div>
    </>
  )
}

export default Alphabet