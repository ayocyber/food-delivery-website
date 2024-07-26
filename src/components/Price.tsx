"use client"
import React from "react";


type Props = {
    price : number
    id: number
    options?: { title: string; additionalPrice: number }[];

}

const Price = ({price , id , options}:Props) => {
    const [total , setTotal] = React.useState(price)
    let [quantity , setQuantity] = React.useState(1)
    const [selected , setselected] = React.useState(0)


    React.useEffect(()=>{
      setTotal(
        prev => (options? prev + options[selected].additionalPrice : price)
      )
    },[quantity, selected, options, price])

    // const help = ()=>{
    //   setselected(index)
    //   setQuantity(1)
    // }

  return (
    <div className="fle flex-col gap-4">
      <h2 className="text-2xl font-bold">{total.toFixed(2)}</h2>
      <div className="flex gap-4 py-3">
        {/* OPTION CONTAINER */}
        {options?.map((option,index)=>{
            return(
                <button 
                key={option.title}
                className="min-w-[6rem] p-2 ring-1 ring-red-500 rounded-md"
                style={{
                  background : selected === index ? " rgb(246 113 113)" : "white",
                  color : selected === index ? "white" : "red"
                }}
                onClick={()=>setselected(index)}
                >
                  {option.title}
                </button>
            )
        })}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
        <span>{quantity}</span>
        <div className="flex gap-4 items-center">
            <button onClick={()=>setQuantity(prev => prev === 1 ? 1 : prev - 1)}>{"<"}</button>
            <span>{quantity}</span>
            <button onClick={()=>setQuantity(prev => prev < 9 ?  prev + 1 : 9)}>{">"}</button>
        </div>
        </div>
        <button className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500  ">Add to Cart</button>
      </div>
    </div>
  )
}

export default Price
