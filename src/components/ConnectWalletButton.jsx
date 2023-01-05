import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Metamask from "../assets/icons/metamask.svg";
import TrustWallet from "../assets/icons/trust-wallet.svg";
import WalletConnect from "../assets/icons/wallet-connect.svg";
import Coinbase from "../assets/icons/coinbase.svg";
import BraveWallet from "../assets/icons/brave-wallet.svg";
import Progress from "../assets/images/progress.svg";
function ConnectWalletButton() {
  let [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }
  const wallets = [
    {
      id: 1,
      name: "Brave Wallet",
      image: BraveWallet,
    },
    {
      id: 2,
      name: "Metamask",
      image: Metamask,
    },
    {
      id: 3,
      name: "Coinbase",
      image: Coinbase,
    },
    {
      id: 4,
      name: "Trust Wallet",
      image: TrustWallet,
    },
    {
      id: 5,
      name: "Wallet Connect",
      image: WalletConnect,
    },
  ];
  return (
    <main>
      <button
        onClick={toggleModal}
        className="button button--aylen -z-2 px-6 py-3 font-[Manrope] bg-[#141115] hover:bg-stone-500/0.2 text-[#FFE6C3] hover:text-white relative rounded-md text-sm font-medium overflow-hidden w-max"
      >
        Connect your wallet
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[100000]"></div>
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
                <Dialog.Panel className=" grid sm:grid-cols-5 w-full max-w-3xl transform overflow-hidden rounded-2xl  text-left align-middle shadow-xl transition-all">
                  <section className="px-12 py-14 col-span-2 bg-[#FFE6C3]">
                    <Dialog.Title
                      as="h3"
                      className="font-Aeonik text-2xl font-semibold leading-6 text-[#141115]"
                    >
                      Connect wallet
                    </Dialog.Title>
                    <Dialog.Description className="mt-2 text-sm text-[#141115]">
                      <p className="text-[#141115] font-[Manrope] my-4">
                        Connecting your wallet to join a DAO is like “logging
                        in” to Web3. Select your wallet from the options listed
                        on the right to get started.
                      </p>
                      <img src={Progress} alt="" />
                    </Dialog.Description>
                  </section>
                  <section className="grid place-content-stretch w-full p-12 sm:p-20 space-y-3 col-span-3 bg-[#141115]">
                    {wallets.map((wallet) => (
                      <div
                        key={wallet.id}
                        className="transition-all hover:bg-stone-100/5 p-3 flex items-center  border border-stone-700 rounded md space-x-3"
                      >
                        <img className="w-8 h-8" src={wallet.image} alt="" />
                        <span className="text-[#F5F6F7] font-[Manrope]">{wallet.name}</span>
                      </div>
                    ))}
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

export default ConnectWalletButton;
