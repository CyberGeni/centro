import React from 'react'
import { Link } from 'react-router-dom'
import ExternalNavbar from '../components/ExternalNavbar'
import HeroImg from '../assets/images/hero-img.png'

function Home() {
  return (
    <div>
        <ExternalNavbar />
        <main className="">
            {/* hero */}
            <div className="relative bg-[#FFE6C3] h-[90vh] md:h-[83vh] flex flex-col md:flex-row justify-center md:justify-start">
                <section className="relative z-10 px-8 sm:px-12 md:px-16 space-y-6 md:flex md:flex-col md:justify-center md:w-4/5 lg:w-3/5 max-w-2xl md:max-w-none">
                    <h1 className="-mt-10 text-5xl sm:text-6xl md:text-7xl md:leading-none font-Aeonik font-black">Discover an easy way to make a difference</h1>
                    <p className="font-[Manrope] my-6 w-4/5 md:w-3/4 font-medium">Find worthy DAOs to make meaningful collaborationd in, collaborate, and build, with Centro's DAO explorer.</p>
                    <div className="flex space-x-3">
                        <a className="px-6 py-2.5 font-[Manrope] font-medium text-sm border-[#141115] border-2 rounded" href="#dao">What is a DAO?</a>
                        <Link className="px-6 py-3 font-[Manrope] font-medium text-sm bg-[#141115] text-[#FFE6C3] rounded">I want to join a DAO</Link>
                    </div>
                </section>
                <section>
                    <img className="absolute right-0 bottom-4 md:bottom-1 blur-lg md:blur-none opacity-20 md:opacity-25 lg:opacity-100 md:max-w-xl lg:max-w-3xl" src={HeroImg} alt="" />
                </section>
            </div>
        </main>
    </div>
  )
}

export default Home