import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import Metamask from "../assets/icons/metamask.svg";
import TrustWallet from "../assets/icons/trust-wallet.svg";
import WalletConnect from "../assets/icons/wallet-connect.svg";
import Coinbase from "../assets/icons/coinbase.svg";
import BraveWallet from "../assets/icons/brave-wallet.svg";
import Progress from "../assets/images/progress.svg";
function ConnectWalletButton() {
  let [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function toggleModal() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  function redirect() {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/dashboard/all");
    }, 3000);
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

                      {isLoading && (
                        <svg
                          aria-hidden="true"
                          class="w-8 h-8 text-gray-200 animate-spin dark:text-stone-800/60 fill-[#141115] mx-auto mt-8"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                      )}
                    </Dialog.Description>
                  </section>
                  <section className="grid place-content-stretch w-full p-12 sm:p-20 space-y-3 col-span-3 bg-[#141115]">
                    {wallets.map((wallet) => (
                      <div
                        onClick={redirect}
                        key={wallet.id}
                        className="cursor-pointer transition-all hover:bg-stone-100/5 p-3 flex items-center  border border-stone-700 rounded md space-x-3"
                      >
                        <img className="w-8 h-8" src={wallet.image} alt="" />
                        <span className="text-[#F5F6F7] font-[Manrope]">
                          {wallet.name}
                        </span>
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
