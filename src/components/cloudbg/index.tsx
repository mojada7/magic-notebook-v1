import Image from 'next/image'
import React from 'react'
import cloud from '../../../public/pics/cloud.png'

function Cloud() {
  return (
    <div className='absolute w-[100vw] h-[40vh] top-[17vh] left-0 z-0'>
        <Image className='' src={cloud} alt='' fill />
    </div>
  )
}

export default Cloud