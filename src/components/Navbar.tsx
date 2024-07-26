import Link from "next/link"
import Menu from "./Menu"
import React from "react"
import CartIcon from "./CartIcon"
import Image from "next/image"

const Navbar = () => {
  const user = false
  return (
    <div className="h-12 text-red-500 p-4 items-center flex justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">HOMEPAGE</Link>
        <Link href="/menu">MENU</Link>
        <Link href="/contact">CONTACT</Link>
      </div>
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">AYO Food</Link>
      </div>
      <div className="md:hidden ">
        <Menu/>
      </div>
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 flex items-center gap-2 lg:static cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20}/>
          <span>123 456 789</span>
        </div>
        { !user ?<Link href="/">Login</Link> :
        <Link href="/order">Order</Link>}
          <CartIcon/>
      </div>
    </div>
  )
}

export default Navbar
