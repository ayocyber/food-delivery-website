"use client"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import CartIcon from "./CartIcon"

const Menu = () => {
    const [open , setOpen] = React.useState(false)
    const links = [
        {id:1 , title: "Homepage" , url:"/"},
        {id:2 , title: "Menu" , url:"/menu"},
        {id:3 , title: "Working Hours" , url:"/"},
        {id:4 , title: "Contact" , url:"/"},
    ]
    const user = true
  return (
    <div>
        {
           !open ? <Image src="/open.png" alt="" width={20} height={20} onClick={()=>setOpen(true)}/> :
           <Image src="/close.png" alt="" width={20} height={20} onClick={()=>setOpen(false)}/>
        }
      {open && <div className="bg-red-500 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl w-full z-10">
        {
           links.map((link)=>{
                return(
                    <Link href={link.url} key={link.id} onClick={()=>setOpen(false)}>
                        {link.title}
                    </Link>
                )
            }) 
        }
       {!user ? <Link href="/order" onClick={()=>setOpen(false)}>Order</Link> : <Link href="./login" onClick={()=>setOpen(false)} >Login</Link>}
        <Link href="/cart"  onClick={()=>setOpen(false)} >
            <CartIcon/>
        </Link>
      </div>}
    </div>
  )
}

export default Menu
