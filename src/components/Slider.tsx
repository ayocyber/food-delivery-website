"use client"
import Image from "next/image"
import React from "react"


const data = [
    {
        id:1,
        title:"always fresh & always crispy & always hot",
        image: "/slide1.png"
    },
    {
        id:2,
        title:"we deliver your order wherever you are in lagos",
        image: "/slide2.png"
    },
    {
        id:3,
        title:"the best pizza to share with your family",
        image: "/slide3.jpg"
    }
]

const Slider = () => {
    const [currenSlide , setCurrentSlide] = React.useState(0)

    // React.useEffect(()=>{
    //     const interval = setInterval(
    //         ()=>setCurrentSlide(prev => prev === data.length-1 ?0 : prev + 1)
    //     ,2000)
    //     return ()=>clearInterval(interval)

    // },[])
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row">
        <div className="h-1/2 flex items-center justify-center flex-col gap-8 text-red-500 font-bold lg:h-full lg:w-1/2">
            <h1 className="text-3xl items-center uppercase p-4 md:p-10 md:text-5xl xl:text-7xl">
                {data[currenSlide]?.title}
            </h1>
            <button className="bg-red-500 text-white py-4 px-8 md:mb-8">Order Now</button>
        </div>
        <div className=" w-full h-1/2 relative lg:h-full lg:w-1/2">
            <Image src={data[currenSlide].image} alt="" fill className="object-cover"/>
        </div>
    </div>
  )
}

export default Slider
