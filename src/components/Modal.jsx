import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

function Modal() {
  let [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }
  //   function closeModal() {
  //     setIsOpen(false);
  //   }

  //   function openModal() {
  //     setIsOpen(true);
  //   }

  return (
    <main>
      <button
        onClick={toggleModal}
        className="button button--aylen -z-2 px-6 py-3 font-[Manrope] bg-[#141115] hover:bg-stone-500/0.2 text-[#FFE6C3] hover:text-white relative rounded-md text-sm font-medium overflow-hidden w-max"
      >
        Connect your wallet
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[100000]  "></div>
      )}

      <Transition appear show={isOpen} as={Fragment}>
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
            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl  text-left align-middle shadow-xl transition-all">
                  <section className="w-2/6 bg-[#FFE6C3]">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-[#141115]">
                        Connect wallet
                    </Dialog.Title>
                    <Dialog.Description className="mt-2 text-sm text-[#141115]">
                        <p className="text-[#141115]">Connecting your wallet to join a DAO is like “logging in” to Web3. Select your wallet from the options listed on the right to get started.</p>
                    </Dialog.Description>
                  </section>
                  <section className="w-4/6 bg-[#141115]">

                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </main>
  );
}

export default Modal;
