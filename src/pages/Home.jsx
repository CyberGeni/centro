import React from 'react'
import { Link } from 'react-router-dom'
import ExternalNavbar from '../components/ExternalNavbar'
import HeroImg from '../assets/images/hero-img.png'
import ListIcon from '../assets/icons/hero-list-icons.svg'
import Safety from '../assets/icons/safety.svg'
import ZeroHierarchy from '../assets/icons/zero-hierarchy.svg'
import DecisionAndVoting from '../assets/icons/decision-and-voting.svg'
import Transparency from '../assets/icons/transparency.svg'

function Home() {
  return (
    <div>
        <ExternalNavbar />
        <main className="scroll-smooth">
            {/* hero */}
            <div className="relative bg-[#FFE6C3] h-[90vh] md:h-[83vh] flex flex-col md:flex-row justify-center md:justify-start">
                <section className="relative z-10 px-8 sm:px-12 md:px-16 space-y-6 md:flex md:flex-col md:justify-center md:w-4/5 lg:w-3/5 max-w-2xl md:max-w-none">
                    <h1 className="-mt-10 text-5xl sm:text-6xl md:text-7xl md:leading-none font-Aeonik font-black">Discover an easy way to make a difference</h1>
                    <p className="font-[Manrope] my-6 w-4/5 md:w-3/4 font-medium">Find worthy DAOs to make meaningful collaborations in, collaborate, and build, with Centro's DAO explorer.</p>
                    <div className="flex space-x-3">
                        <a className="px-6 py-2.5 font-[Manrope] font-medium text-sm border-[#141115] border-2 rounded" href="#dao">What is a DAO?</a>
                        <Link className="px-6 py-3 font-[Manrope] font-medium text-sm bg-[#141115] hover:opacity-80 transition-all text-[#FFE6C3] rounded">I want to join a DAO</Link>
                    </div>
                </section>
                <section>
                    <img className="absolute right-0 bottom-4 md:bottom-1 blur-lg md:blur-none opacity-20 md:opacity-25 lg:opacity-100 md:max-w-xl lg:max-w-2xl" src={HeroImg} alt="" />
                </section>
            </div>
            {/* what is a DAO */}
            <section id="dao" className="text-white scroll-margin-5 scroll-m-4 py-8 sm:py-9 md:py-10 bg-[#141115]">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-Aeonik text-center font-bold">What is a DAO?</h1>
                <p className="font-[Manrope] text-[#D7D3D0] text-center my-4">Get started with this 2 minutes video</p>
                <video src=""></video>
            </section>
            {/* simply put */}
            <section className="grid sm:grid-cols-2 sm:gap-x-8 px-8 sm:px-12 md:px-16 py-8 sm:py-10 md:py-12 bg-[#141115]">
                <div>
                    <h1 className="font-Aeonik text-white text-3xl md:text-4xl lg:text-5xl font-bold">Simply put,</h1>
                    <p className="font-[Manrope] text-[#D7D3D0] my-6">A Decentralized Autonomous Organization is basically an organization or community on the blockchain where everyone involved has equal rights and power to make a change no matter their background. </p>
                </div>
                <div className="space-y-7">
                    <div className="flex gap-x-3 gap-y-8">
                        <img className="-mt-12" src={ListIcon} />
                        <div>
                            <h4 className="text-[#FFE6C3] font-medium text-xl font-Aeonik">Decentralised</h4>
                            <p className="text-[#EAECF0] font-[Manrope]">There are no leaders in a DAO, meaning, anyone can make a difference towards a due cause without bias.</p>
                        </div>
                    </div>
                    <div className="flex gap-x-3 gap-y-8">
                        <img className="-mt-12" src={ListIcon} />
                        <div>
                            <h4 className="text-[#FFE6C3] font-medium text-xl font-Aeonik">Autonomous</h4>
                            <p className="text-[#EAECF0] font-[Manrope]">All activities are transparent and fully public and programmed. Meaning, there’s zero chance for mishandling of funds.</p>
                        </div>
                    </div>
                    <div className="flex gap-x-3 gap-y-8">
                        <img className="-mt-12" src={ListIcon} />
                        <div>
                            <h4 className="text-[#FFE6C3] font-medium text-xl font-Aeonik">Organization</h4>
                            <p className="text-[#EAECF0] font-[Manrope]">Decisions are made based on voting by the organization members. </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* why join one */}
            <section  className="px-8 sm:px-12 md:px-16 py-8 sm:py-10 md:py-12 bg-[#141115]">
                <h1 className="font-Aeonik text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center ">Why join one?</h1>
                <p className="font-[Manrope] text-[#D7D3D0] my-6 text-center ">The real question is why not?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 place-content-center">
                    <div className="bg-[#1E191F] rounded-md flex flex-col justify-center p-6">
                        <img className="w-fit mx-auto" src={Safety} alt="" />
                        <h4 className="font-Aeonik text-[#D7D3D0] text-center font-medium mt-3 text-lg">Safety</h4>
                        <p className="text-center text-[#D7D3D0] my-2 font-[Manrope]">It is a safe way to collaborate and contribute to causes on the blockchain.</p>
                    </div>
                    <div className="bg-[#1E191F] rounded-md flex flex-col justify-center p-6">
                        <img className="w-fit mx-auto" src={ZeroHierarchy} alt="" />
                        <h4 className="font-Aeonik text-[#D7D3D0] text-center font-medium mt-3 text-lg">Zero hierachy</h4>
                        <p className="text-center text-[#D7D3D0] my-2 font-[Manrope]">No leaders. Anyone can contribute to a cause without bias.</p>
                    </div>
                    <div className="bg-[#1E191F] rounded-md flex flex-col justify-center p-6">
                        <img className="w-fit mx-auto" src={DecisionAndVoting} alt="" />
                        <h4 className="font-Aeonik text-[#D7D3D0] text-center font-medium mt-3 text-lg">Decisions = voting</h4>
                        <p className="text-center text-[#D7D3D0] my-2 font-[Manrope]">Decisions are made by voting by the organization members. </p>
                    </div>
                    <div className="bg-[#1E191F] rounded-md flex flex-col justify-center p-6">
                        <img className="w-fit mx-auto" src={Transparency} alt="" />
                        <h4 className="font-Aeonik text-[#D7D3D0] text-center font-medium mt-3 text-lg">Transparency</h4>
                        <p className="text-center text-[#D7D3D0] my-2 font-[Manrope]">All activities are transparent and public. Your funds are safe.</p>
                    </div>
                </div>
            </section>
        </main>
    </div>
  )
}

export default Home