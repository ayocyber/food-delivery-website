import Link from "next/link"

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-red-500 flex items-center justify-between">
      <Link href="/" className="font-bold text-xl">AYO FOOD</Link>
      <p>ALL RIGHTS RESERVED.</p>
    </div>
  )
}

export default Footer
