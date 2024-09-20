import {
  DialogPanel,
  DialogTitle,
  TransitionChild,
  Transition,
  Dialog,
} from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useAppStore } from "../stores/useAppStore";

export default function Modal() {
  const [content, setContent] = useState({ paragraphs: [] });
  const modal = useAppStore((state) => state.modal);
  const closeModal = useAppStore((state) => state.closeModal);

  useEffect(() => {
    fetch("/content/content.json")
      .then((response) => response.json())
      .then((data) => setContent(data));
  }, []);

  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform rounded-lg shadow-xl bg-gradient-to-r from-slate-700 to-slate-900 sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                  <DialogTitle
                    as="h3"
                    className="my-5 text-4xl font-extrabold text-center text-white"
                  >
                    Matias Ochoa
                    <img
                      src="/public/foto_matias.jpg"
                      alt="My modal picture"
                      className="mx-auto my-2 rounded-lg w-96"
                    />
                  </DialogTitle>
                  <DialogTitle
                    as="h3"
                    className="my-5 text-2xl font-extrabold text-center text-white uppercase"
                  >
                    Work
                  </DialogTitle>
                  <DialogTitle
                    as="h3"
                    className="my-5 text-2xl font-extrabold text-white"
                  >
                    {content.paragraphs.map((paragraph, index) => (
                      <p key={index} className="text-lg leading-8 text-white">
                        {paragraph}
                      </p>
                    ))}
                  </DialogTitle>

                  <div className="flex justify-between gap-4 mt-5">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center w-full h-16 px-10 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
                      onClick={closeModal}
                    >
                      Cerrar
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
