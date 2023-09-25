import React from 'react'
import MainItem from '../mainItem'
import mainpic1 from '../../../public/pics/mainpic1.png'
import mainpic2 from '../../../public/pics/mainpic2.png'
import mainpic3 from '../../../public/pics/mainpic3.png'


function Main({click}: any) {
  
  return (
    <div className='h-[75vh] flex flex-col lg:flex-row gap-4 justify-center items-center z-50'>
        <div className='z-50'>
          <MainItem pic={mainpic1} title={"Add new word"} hr={"addnew"}/>
        </div>     
        <div className='z-50'>
          <MainItem pic={mainpic3} title={"Daily magic test"} hr={"dailytest"}/>
        </div>  
        <div className='z-50'>
          <MainItem pic={mainpic2} title={"my Dictionary"} hr={"mydictionary"}/>      
      </div>
    </div>
  )
}

export default Main