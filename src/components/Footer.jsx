import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/icons/logo-light.svg'
function 
Footer() {
  return (
    <footer className="px-8 sm:px-12 md:px-16 py-8 sm:py-10 md:py-12 bg-[#141115] border-t border-[#44403C] space-y-5">
        <img src={Logo} alt="" />
        <p className="text-[#D7D3D0] max-w-xs font-[Manrope] my-4 text-sm">Making the DAO experience accessible to everyone interested. </p>
        <div className="text-[#D7D3D0] font-[Manrope] text-sm space-x-5">
            <Link>Overview</Link>
            <Link>Explorer</Link>
            <Link>FAQs</Link>
            <Link>Support</Link>
            <Link>Privacy</Link>
        </div>
    </footer>
  )
}

export default 
Footer