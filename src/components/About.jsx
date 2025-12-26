import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function About() {
  const tl = gsap.timeline(()=>{
    
  })
  useGSAP(()=>{
    gsap.from('#inAnimation',{
        y : 10,
        opacity : 0,
        stagger : 0.3
    })
  },[])
    
  return (
    <div className='w-dvw overflow-hidden box-border bg-white h-dvh flex flex-row items-center justify-between'>
        <div className='w-3/6 pl-15'>
            <h1 className='font-[900] text-[2.5rem] font-play' id='inAnimation'>Akram Remmache</h1>
            <p className='pt-6 w-9/12 font-sc font-semibold text-xl' id='inAnimation'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe natus ab, deserunt rem aliquid, maiores optio dolore.</p>
            <div className='flex flex-row items-center justify-start gap-10 pt-5'>
                <button id='inAnimation' className='h-11 font-fair font-bold w-30 bg-black text-white rounded-2xl'>About me</button>
                <button id='inAnimation' className='h-11 font-fair font-bold w-20 bg-black text-white rounded-2xl text-center'>Cv<a href=''><span class="material-symbols-outlined align-middle ml-1 border-l-white border-l-2">download</span></a></button>
            </div>
        </div>
        <img src='/Me.jpg' className='w-1/2'></img>
    </div>
  )
}

export default About