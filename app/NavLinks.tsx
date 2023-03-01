'use client'
import { categories } from "../constants"
import { usePathname } from "next/navigation"
import NavLink from "./NavLink"
function NavLinks() {
    const pathName= usePathname();

    const isActive=(path:string)=>{
        return pathName?.split('/').pop()=== path;
    }
  return (
    <nav className="grid grid-cols-4 md:grid-cols-7 text-sx md:text-sm gap-4 pb-10 max-w-6xl mx-auto border-b">
        {categories.map((category)=>(
            <NavLink key={category} category={category} isActive={isActive(category)}/>
        ))}
    </nav>
  )
}

export default NavLinks