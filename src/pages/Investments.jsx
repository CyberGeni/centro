import React, { Fragment, useState } from "react";
import daos from "../db/dao.js";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
function Investments() {
  const [isOpen, setIsOpen] = useState(false);
  const [dao, setDao] = useState(null);

  function toggleModal() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 gap-6">
      {dao && (
        <Transition
          key={dao.id}
          appear
          show={isOpen}
          onClose={() => setDao(null)}
          as={Fragment}
        >
          <Dialog as="div" className="relative z-10" onClose={toggleModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 backdrop-blur bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl align-middle  transition-all px-10 py-8 bg-[#131014] border border-[#1C1917]">
                    <section className="">
                      <Dialog.Title
                        as="h3"
                        className="font-Aeonik flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-3">
                          <img
                            onClick={toggleModal}
                            className="w-12"
                            src={dao.image}
                            alt=""
                          />
                          <h3 className="text-white font-Aeonik text-lg font-semibold tracking-wide">
                            {dao.name}
                          </h3>
                        </div>
                        <svg
                          className="hover:cursor-pointer hover:scale-105"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13 1L1 13M1 1L13 13"
                            stroke="#FFE6C3"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Dialog.Title>
                      <Dialog.Description className="mt-2 text-sm text-[#D7D3D0] text-left font-[Manrope]">
                        <h4 className="mt-6 mb-2">DESCRIPTION</h4>
                        <p>{dao.short_description}</p>
                        <h4 className="mt-4 mb-2 flex items-center ">
                          GOVERNANCE METHOD{" "}
                          <svg
                            className="ml-1"
                            width="16"
                            height="15"
                            viewBox="0 0 16 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.05967 5.5C6.21641 5.05444 6.52578 4.67873 6.93298 4.43942C7.34018 4.2001 7.81894 4.11262 8.28446 4.19247C8.74998 4.27232 9.17222 4.51434 9.47639 4.87568C9.78057 5.23702 9.94705 5.69434 9.94634 6.16666C9.94634 7.5 7.94634 8.16666 7.94634 8.16666M7.99967 10.8333H8.00634M14.6663 7.5C14.6663 11.1819 11.6816 14.1667 7.99967 14.1667C4.31778 14.1667 1.33301 11.1819 1.33301 7.5C1.33301 3.8181 4.31778 0.833328 7.99967 0.833328C11.6816 0.833328 14.6663 3.8181 14.6663 7.5Z"
                              stroke="#79716B"
                              stroke-width="1.33333"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </h4>
                        <p>RTP Tokens</p>
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="mt-4 mb-2 flex items-center ">
                              TOTAL PROPOSALS{" "}
                              <svg
                                className="ml-1"
                                width="16"
                                height="15"
                                viewBox="0 0 16 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.05967 5.5C6.21641 5.05444 6.52578 4.67873 6.93298 4.43942C7.34018 4.2001 7.81894 4.11262 8.28446 4.19247C8.74998 4.27232 9.17222 4.51434 9.47639 4.87568C9.78057 5.23702 9.94705 5.69434 9.94634 6.16666C9.94634 7.5 7.94634 8.16666 7.94634 8.16666M7.99967 10.8333H8.00634M14.6663 7.5C14.6663 11.1819 11.6816 14.1667 7.99967 14.1667C4.31778 14.1667 1.33301 11.1819 1.33301 7.5C1.33301 3.8181 4.31778 0.833328 7.99967 0.833328C11.6816 0.833328 14.6663 3.8181 14.6663 7.5Z"
                                  stroke="#79716B"
                                  stroke-width="1.33333"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </h4>
                            <p className="text-white/90">45</p>
                          </div>
                          <div className="mr-4">
                            <h4 className="mt-4 mb-2">MEMBERS</h4>
                            <p>{dao.member_count}</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="mt-4 mb-2">TREASURY</h4>
                          <p className="text-white text-lg font-semibold">
                            $143,000
                          </p>
                        </div>
                        <div className="w-full flex justify-end">
                        <Link to={dao.name} className="relative z-[1000] px-5 py-3 font-semibold bg-[#FFE6C3] text-[#141115] rounded-md my-4 outline-none">
                            Join {dao.name}
                          </Link>
                        </div>
                      </Dialog.Description>
                    </section>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center"></div>
      )}

      {daos
        .filter((dao) => dao.category === "Investments")
        .map((dao) => (
          <motion.div
            key={dao.id}
            layoutId={dao.id}
            onClick={() => {
              toggleModal();
              setDao(dao);
            }}
            className="bg-[#131014]  border border-[#1C1917] rounded-lg p-6 grid justify-between "
          >
            <motion.div className="flex justify-between items-center">
              <motion.div className="flex items-center space-x-2">
                <motion.img className="w-11" src={dao.image} alt={dao.name} />
                <motion.h3 className="font-Aeonik font-lg ">
                  {dao.name}
                </motion.h3>
              </motion.div>
              <motion.span className="text-[#FFE6C3] font-Aeonik text-[13px] text-right">
                {dao.member_count}+ members
              </motion.span>
            </motion.div>
            <motion.p className="text-[#D7D3D0] font-[Manrope] my-3 line-clamp-3 text-sm tracking-wide">
              {dao.short_description}
            </motion.p>
            <motion.span className="bg-[#FFE6C3] px-3 py-1 rounded-full font-Aeonik text-sm text-[#131014] w-fit h-fit">
              {dao.category}
            </motion.span>
          </motion.div>
        ))}
    </main>
  );
}

export default Investments;
