import Image from "next/image"

const Cartpage = () => {
  return (
    <div className="h-[calc(100vh)] md:h-[caclc(100vh-9rem)]   flex flex-col text-red-500 lg:flex-row">
      {/* PRODUCT CONTAINER */}
      <div className="h-1/2 p-4 flex flex-col justify-center lg:h-full lg:w-2/3 lg:px-20 2xl:px-40 overflow-scroll overflow-x-hidden ">
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4 mt-10 ">
          <Image src="/temporary/p1.png" alt="" width={100} height={100}/>
          <div className="">
              <h1 className="uppercase text-xl font-bold">sicilian</h1>
              <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
         {/* SINGLE ITEM */}
         <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100}/>
          <div className="">
              <h1 className="uppercase text-xl font-bold">sicilian</h1>
              <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
         {/* SINGLE ITEM */}
         <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100}/>
          <div className="">
              <h1 className="uppercase text-xl font-bold">sicilian</h1>
              <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
      </div>
      
      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 lg:px-20 2xl:px-40 2xl:text-xl  xl:gap-6 ">
        <div className="flex justify-between ">
          <span >Subtotal (3 items)</span>
          <span className="">$81.70</span>
        </div>
        <div className="flex justify-between">
          <span >Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div  className="flex justify-between ">
          <span>Delivery Cost</span>
          <span className="text-green-500">Free</span>
        </div>
        <hr className="my-2"/>
        <div  className="flex justify-between ">
          <span>Total (INCL. VAT)</span>
          <span className="text-green-500">$81.70</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">CHECKOUT</button>
      </div>
    </div>
  )
}

export default Cartpage
