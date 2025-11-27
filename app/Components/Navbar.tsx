import Link from 'next/link';
import React from 'react'
import { TbCategory2 } from "react-icons/tb";

const Navbar = () => {


  return (
    <div className='fixed w-screen top-10  z-[999] '>
<header className=' container mx-auto flex justify-between'>

<p>LOGO</p>

<div className='flex gap-6 items-center'>
<Link href={"/"} className=' border-[5px]  animate-bounce border-white h-full flex items-center px-5   bg-black text-white font-bold  py-2'> <span className='text-xl'>Contact</span> </Link>

{/* <TbCategory2 className='text-5xl cursor-pointer' /> */}
</div>

</header>
</div>
  )
}

export default Navbar