import { menu } from "@/data"
import Link from "next/link"

const Menupage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {menu.map(category => (
        <Link href={`/menu/${category.slug}`} key={category.id} className="w-full  bg-cover h--1/3">
          <div className="bg-cover bg-center p-8" style={{ backgroundImage: `url(${category.img})` }}>
            <div className={`text-${category.color} w-1/2`}>
              <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
              <p className="text-sm my-8">{category.desc}</p>
              <button className={`hidden md:block bg-slate-900 text-white py-2 px-4 items-center rounded-md`}>Explore</button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Menupage
