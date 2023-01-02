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
            <div className="relative bg-[#FFE6C3] h-[90vh] flex flex-col justify-center">
                <section className="relative z-10 px-8 space-y-6">
                    <h1 className="-mt-10 text-5xl font-Aeonik font-black">Discover an easy way to make a difference</h1>
                    <p className="font-[Manrope] my-4 w-4/5 font-medium">Find worthy DAOs to make meaningful collaborationd in, collaborate, and build, with Centro's DAO explorer.</p>
                    <div className="flex space-x-3">
                        <a className="px-6 py-2.5 font-[Manrope] font-medium text-sm border-[#141115] border-2 rounded" href="#dao">What is a DAO?</a>
                        <Link className="px-6 py-3 font-[Manrope] font-medium text-sm bg-[#141115] text-[#FFE6C3] rounded">I want to join a DAO</Link>
                    </div>
                </section>
                <section>
                    <img className="absolute bottom-4 blur-lg opacity-20 md:blur-0" src={HeroImg} alt="" />
                </section>
            </div>
        </main>
    </div>
  )
}

export default Home