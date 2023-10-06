import React from 'react'
import MainItem from '../mainItem'
import mainpic1 from '../../../public/pics/mainpic1.png'
import mainpic2 from '../../../public/pics/mainpic2.png'
import mainpic3 from '../../../public/pics/mainpic3.png'


function Main() {
  
  return (
    <div className='h-[85vh] pt-[25vh] lg:h-[80vh] flex flex-col lg:flex-row gap-4 justify-center pb-[5vh] items-center z-50'>
        <div className='z-50'>
          <MainItem pic={mainpic1} title={"Add new word"} hr={"addnew"} text={'The words you enter in your personal dictionary will be tested'}/>
        </div>     
        <div className='z-50'>
          <MainItem pic={mainpic3} title={"Daily magic test"} hr={"dailytest"} text={'If you complete magic-test stages, we guarantee that you will remember your dictionary for a long time.'}/>
        </div>  
        <div className='z-50'>
          <MainItem pic={mainpic2} title={"my Dictionary"} hr={"mydictionary"} text={'You can check and eddite your entered words and also expand your vocabulary'}/>      
      </div>
    </div>
  )
}

export default Main