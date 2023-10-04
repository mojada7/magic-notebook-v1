import Image from 'next/image'
import React from 'react'
import cloud1 from '../../../public/pics/cloud1.png'
import cloud2 from '../../../public/pics/cloud2.png'
import cloud3 from '../../../public/pics/cloud3.png'
import cloud4 from '../../../public/pics/cloud4.png'
import style from './style.module.css'

function CloudScene() {
  return (
    <div className='fixed -z-50 w-[100vw] h-[100vh] top-0 left-0'>
        <div className={`absolute top-[10vh] ${style.motion1}`}>
            <div className={`flex gap-[30vw] ${style}`}>
                <Image alt='' src={cloud4} width={150} />
                <Image alt='' src={cloud2} width={150} />
                <Image alt='' src={cloud4} width={150} />
                <Image alt='' src={cloud2} width={150} />
            </div>
        </div>
        <div className={`absolute top-[25vh] ${style.motion2}`}>
            <div className={`flex gap-[30vw] ${style}`}>
                <Image alt='' src={cloud2} width={180} />
                <Image alt='' src={cloud4} width={180} />
                <Image alt='' src={cloud2} width={180} />
            </div>
        </div>
        <div className={`absolute top-[40vh] ${style.motion3}`}>
            <div className={`flex gap-[30vw] ${style}`}>
                <Image alt='' src={cloud1} width={200} />
                <Image alt='' src={cloud3} width={200} />
                <Image alt='' src={cloud1} width={200} />
            </div>
        </div>
        <div className={`absolute top-[60vh] ${style.motion4}`}>
            <div className={`flex gap-[40vw] ${style}`}>
            <Image alt='' src={cloud3} width={1000} />
            <Image alt='' src={cloud1} width={1000} />
            <Image alt='' src={cloud3} width={1000} />
            </div>

        </div>



    </div>
  )
}

export default CloudScene