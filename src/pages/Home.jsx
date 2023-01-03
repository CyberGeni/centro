import React from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'; 
import ExternalNavbar from '../components/ExternalNavbar'
import Footer from '../components/Footer'
import HeroImg from '../assets/images/hero-img.png'
import ListIcon from '../assets/icons/hero-list-icons.svg'
import Safety from '../assets/icons/safety.svg'
import ZeroHierarchy from '../assets/icons/zero-hierarchy.svg'
import DecisionAndVoting from '../assets/icons/decision-and-voting.svg'
import Transparency from '../assets/icons/transparency.svg'
import DAO4Everyone from '../assets/images/DAOs-for-everyone.png'
import Pattern from '../assets/icons/bg-pattern.svg'

function Home() {

    AOS.init();

  return (
    <div>
        <ExternalNavbar />
        <main className="scroll-smooth">
            {/* hero */}
            <div 
                style={{ backgroundImage:`url(${Pattern})` }}
                className="relative bg-[#FFE6C3] bg-blend-multiply h-[93vh] md:h-[80vh] flex flex-col md:flex-row justify-center md:justify-start">
                <section className="relative z-10 px-8 sm:px-12 md:px-16 lg:px-28 xl:px-32 space-y-6 md:flex md:flex-col md:justify-center md:w-4/5 lg:w-2/3 max-w-2xl md:max-w-none">
                    <h1 className="-mt-10 text-5xl sm:text-6xl md:text-7xl md:leading-none font-Aeonik font-black">Discover an easy way to make a difference</h1>
                    <p className="font-[Manrope] my-6 w-4/5 md:w-3/4 font-medium">Find worthy DAOs to make meaningful collaborations in, collaborate, and build, with Centro's DAO explorer.</p>
                    <div className="flex space-x-3">
                        <a className="px-6 py-2.5 font-[Manrope] font-medium text-sm border-[#141115] border-2 rounded" href="#dao">What is a DAO?</a>
                        <Link className="button button--aylen px-6 py-3 font-[Manrope] bg-[#141115] hover:bg-stone-500/0.2 text-[#FFE6C3] hover:text-white relative rounded-md text-sm font-medium overflow-hidden">I want to join a DAO</Link>
                    </div>
                </section>
                <section>
                    <img className="absolute right-0 bottom-4 md:bottom-1 blur-lg md:blur-none opacity-20 md:opacity-25 lg:opacity-100 md:max-w-xl lg:max-w-2xl" src={HeroImg} alt="" />
                </section>
            </div>
            {/* what is a DAO */}
            <section id="dao" className="text-white scroll-margin-5 scroll-m-4 py-8 sm:py-9 md:py-12 lg:py-16 bg-[#141115]">
                <h1 data-aos="fade-up" className="text-3xl md:text-4xl lg:text-5xl font-Aeonik text-center font-bold my-2">What is a DAO?</h1>
                <p data-aos="fade-up" className="font-[Manrope] text-[#D7D3D0] text-center my-4">Get started with this 2 minutes video</p>
                {/* <video src=""></video> */}
                <div data-aos="fade-up" className="w-5/6 max-w-xl mx-auto mt-8">
                    <iframe 
                        className="w-full rounded-md"
                        width="560" 
                        height="315"
                        src="https://www.youtube.com/embed/KHm0uUPqmVE" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    ></iframe>
                </div>
                
            </section>
            {/* simply put */}
            <section className="grid md:grid-cols-2 sm:gap-x-10 lg:gap-x-32 px-8 sm:px-12 md:px-16 lg:px-28 xl:px-32 py-8 sm:py-12 md:py-16 items-center bg-[#141115]">
                <div data-aos="fade-up">
                    <h1 className="font-Aeonik text-white text-3xl md:text-4xl lg:text-5xl font-bold">Simply put,</h1>
                    <p className="font-[Manrope] text-[#D7D3D0] my-6">A Decentralized Autonomous Organization is basically an organization or community on the blockchain where everyone involved has equal rights and power to make a change no matter their background. </p>
                </div>
                <div data-aos="fade-up" className="space-y-7">
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
            <section  className="px-8 sm:px-12 md:px-16 lg:px-28 xl:px-32 py-8 sm:py-10 md:py-12 bg-[#141115]">
                <h1 data-aos="fade-up" className="font-Aeonik text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center ">Why join one?</h1>
                <p data-aos="fade-up" className="font-[Manrope] text-[#D7D3D0] my-6 md:mb-16 text-center ">The real question is why not?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-content-center">
                    <div data-aos="fade-up" className="bg-[#1E191F] rounded-md flex flex-col justify-center p-6">
                        <img className="w-fit mx-auto" src={Safety} alt="" />
                        <h4 className="font-Aeonik text-[#D7D3D0] text-center font-medium mt-3 text-lg">Safety</h4>
                        <p className="text-center text-[#D7D3D0] my-2 font-[Manrope]">It is a safe way to collaborate and contribute to causes on the blockchain.</p>
                    </div>
                    <div data-aos="fade-up" className="bg-[#1E191F] rounded-md flex flex-col justify-center p-6">
                        <img className="w-fit mx-auto" src={ZeroHierarchy} alt="" />
                        <h4 className="font-Aeonik text-[#D7D3D0] text-center font-medium mt-3 text-lg">Zero hierachy</h4>
                        <p className="text-center text-[#D7D3D0] my-2 font-[Manrope]">No leaders. Anyone can contribute to a cause without bias.</p>
                    </div>
                    <div data-aos="fade-up" className="bg-[#1E191F] rounded-md flex flex-col justify-center p-6">
                        <img className="w-fit mx-auto" src={DecisionAndVoting} alt="" />
                        <h4 className="font-Aeonik text-[#D7D3D0] text-center font-medium mt-3 text-lg">Decisions = voting</h4>
                        <p className="text-center text-[#D7D3D0] my-2 font-[Manrope]">Decisions are made by voting by the organization members. </p>
                    </div>
                    <div data-aos="fade-up" className="bg-[#1E191F] rounded-md flex flex-col justify-center p-6">
                        <img className="w-fit mx-auto" src={Transparency} alt="" />
                        <h4 className="font-Aeonik text-[#D7D3D0] text-center font-medium mt-3 text-lg">Transparency</h4>
                        <p className="text-center text-[#D7D3D0] my-2 font-[Manrope]">All activities are transparent and public. Your funds are safe.</p>
                    </div>
                </div>
            </section>
            {/* DAOs for everyone */}
            <section  className="px-8 sm:px-12 md:px-16 lg:px-28 xl:px-32 py-8 sm:py-10 md:py-12 lg:py-20 bg-[#141115] grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-16">
                <img data-aos="fade-up" src={DAO4Everyone} alt="" />
                <div data-aos="fade-up">
                    <h1 className="text-white font-Aeonik font-bold text-4xl md:text-5xl lg:text-[56px]">DAOs are for everyone...</h1>
                    <p className="text-[#D7D3D0] font-[Manrope] my-5">Finance person? Sports dude? Investment champ? NFT collector? Product junkie? Or just a regular guy that likes to hang out? No matter what your interests are, there’s a community out there waiting for you to come hang.</p>
                </div>
            </section>
            {/* Join your community, today */}
            <section className="bg-[#141115] py-12 lg:py-20 pb-28">
                <div 
                    style={{ backgroundImage:`url(${Pattern})` }}
                    data-aos="fade-up" 
                    className="bg-[#FFE6C3] bg-blend-multiply w-4/5 p-12 rounded-md text-center mx-auto">
                    <h1 className="font-Aeonik font-bold text-4xl">Join your community, today</h1>
                    <p className="font-[Manrope] sm:w-2/3 max-w-lg mx-auto text-[#57534E] mt-5 mb-6">Look around, find the DAO(s)that interests you and start contributing!</p>
                    <Link className="button button--aylen w-fit mx-auto px-6 py-3 font-[Manrope] bg-[#141115] hover:bg-stone-500/0.2 text-[#FFE6C3] hover:text-white relative block rounded-md text-sm font-medium overflow-hidden" to="/">Launch the DAO Explorer</Link>
                </div>
            </section>
        </main>
        <Footer />
    </div>
  )
}

export default Home