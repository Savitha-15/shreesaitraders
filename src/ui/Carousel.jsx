import React, { useEffect, useState, useRef } from 'react'

const slides = [
  {img:'/assets/slide1.jpg', quote:'Build Strong'},
  {img:'/assets/slide2.jpg', quote:'Trusted Materials'},
  {img:'/assets/slide3.jpg', quote:'Quality That Lasts'},
  {img:'/assets/slide4.jpg', quote:'Transforming Communities'}
]

export default function Carousel(){
  const [idx, setIdx] = useState(0)
  const timer = useRef(null)
  useEffect(()=>{
    timer.current = setInterval(()=> setIdx(i=> (i+1)%slides.length), 3500)
    return ()=> clearInterval(timer.current)
  },[])
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg">
      <div className="h-64 sm:h-96">
        {slides.map((s,i)=>(
          <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i===idx ? 'opacity-100' : 'opacity-0'}`}>
            <img src={s.img} alt={s.quote} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/50 text-white px-4 py-2 rounded">{s.quote}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_,i)=>(
          <button key={i} onClick={()=>setIdx(i)} className={`w-3 h-3 rounded-full ${i===idx ? 'bg-white' : 'bg-white/50'}`}></button>
        ))}
      </div>
    </div>
  )
}
