import Image from "next/image"
import dynamic from "next/dynamic"

const CountDown = dynamic(() => import("./CountDown"), { ssr: false })


const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* TEXT CONTAINER */}
        <div className="flex-1 flex flex-col justify-center gap-8 p-6">
          <h1 className="text-white text-5xl font-bold xl:text-6xl">Delicious Buger & Frecnh Fry</h1>
          <p className="text-white xl:text-xl">
            Progressively simplify effective e-toilers and process-centrc methods 
            of empowerment. Quickly pontificate parallel
          </p>
           <CountDown/>
          <button className="bg-red-500 text-white rounded-md py-3 px-6" >Order Now</button>
        </div>
        {/* IMAGE CONTAINER */}
        <div className="flex-1 w-full relative md:h-full">
          <Image src="/offerProduct.png" alt="" fill className="object-contain"/>
        </div>
    </div>
  )
}
 
export default Offer
