"use client";

import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import { FaDumbbel } from "react-icons/fa";

const Header = () => {
  return (
    <Popover className="container mx-auto flex items-center border-b-2 px-6 py-2 h-24">
      {/* <FaDumbbel /> */}
      <h1 className="font-bold">Gym Fit</h1>
      <div className="grow">
        <div className="hidden sm:flex items-center justify-center gap-2 md:gap-8">
          <Link href="/">Inicio</Link>
          <Link href="/about">Sobre Nosotros</Link>
          <Link href="/services">Calculadora IMC</Link>
          <Link href="/contact">Contacto</Link>
        </div>
      </div>

      <div className="flex grow items-center justify-end sm:hidden">
        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-inset focus:ring-indigo-500">
          <span className="sr-only">Abrir menú</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </Popover.Button>
      </div>

      <Popover.Overlay className="sm:hidden fixed inset-0 bg-black opacity-30" />
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition-all md:hidden"
        >
          <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
            <div className="px-5 pb-6">
              <div className="flex items-center justify-between">
                <h1 className="font-bold">GymFit</h1>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Cerrar menú</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>

              {/* Separacion */}
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link
                    className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                    href="/"
                  >
                    Inicio
                  </Link>
                  <Link
                    className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                    href="/about"
                  >
                    Sobre Nosotros
                  </Link>
                  <Link
                    className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                    href="/services"
                  >
                    Calculadora IMC
                  </Link>
                  <Link
                    className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                    href="/contact"
                  >
                    Contacto
                  </Link>
                </nav>
              </div>

              {/* Separacion */}
              <div className="mt-6 flex flex-col items-center gap-2">
                <Link
                  href="/login"
                  className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black md:text-xl w-full border-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                >
                  Iniciar Sesión
                </Link>

                <Link
                  href="/register"
                  className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black md:text-xl w-full border-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                >
                  Registrarse
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>

      <div className="hidden sm:block">
        <Link href="/login" className="font-bold border-2 rounded-full px-4 py-2 hover:bg-gray-100 transition-all">
          Iniciar Sesión
        </Link>
        {/* <Link href="/register" className="font-bold">
          Registrarse
        </Link> */}
      </div>
    </Popover>
  );
};

export default Header;
