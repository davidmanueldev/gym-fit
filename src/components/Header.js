"use client";

import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import { FaDumbbel } from "react-icons/fa";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Header = () => {

  const { data: session } = useSession();
  console.log(session);

  return (
    <Popover className="container mx-auto flex items-center border-b-2 px-6 py-2 h-24">
      {/* <FaDumbbel /> */}
      <h1 className="font-bold">Gym Fit</h1>
      <div className="grow">
        <div className="hidden sm:flex items-center justify-center gap-2 md:gap-8">
          <Link href="/">Inicio</Link>
          <Link href="/dashboard">Planes | Ejercicios</Link>
          <Link href="#calculator">Calculadora IMC</Link>
          <Link
            href="https://www.linkedin.com/in/davidmanuel01/"
            target="https://www.linkedin.com/in/davidmanuel01/"
          >
            Contacto
          </Link>
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
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition-all md:hidden z-50"
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
                    href="#calculator"
                  >
                    Calculadora IMC
                  </Link>
                  <Link
                    className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                    href="/dashboard"
                  >
                    Planes/Ejercicios
                  </Link>
                  <Link
                    className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                    href="https://www.linkedin.com/in/davidmanuel01/"
                    target="_blank"
                  >
                    Contacto
                  </Link>
                </nav>
              </div>

              {/* Separacion */}
              {session?.user ? (
                <div className="mt-6 flex flex-col items-center gap-2">
                  <img src={session.user.image} />
                  <button
                    onClick={async () => {
                      await signOut({
                        callbackUrl: "/",
                      });
                    }}
                    className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black md:text-xl w-full border-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                  >
                    Cerrar Sesión
                  </button>
                </div>
              ) : (
                <div className="mt-6 flex flex-col items-center gap-2">
                  <button
                    onClick={async () => {
                      await signIn(null, { callbackUrl: "/dashboard" });
                    }}
                    className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black md:text-xl w-full border-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                  >
                    Iniciar Sesión
                  </button>
                </div>
              )}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
      
      {session?.user ? (
      <div className="hidden sm:block xl:flex items-center gap-2">
        <img src={session.user.image} alt="img de perfil" className="w-10 h-10 rounded-full cursor-pointer" />
        <button onClick={async () => {
          await signOut({
            callbackUrl: '/'
          })
        }}
          className="font-bold border-2 rounded-full px-4 py-2 hover:bg-gray-100 transition-all"
        >
          Cerrar Sesión
        </button>
      </div>
      ) : (
      <div className="hidden sm:block">
        <button onClick={async () => {
          await signIn(null, { callbackUrl: '/dashboard' })
        }}
          href="/dashboard"
          className="font-bold border-2 rounded-full px-4 py-2 hover:bg-gray-100 transition-all"
        >
          Iniciar Sesión
        </button>
      </div>
      )}
    </Popover>
  );
};

export default Header;
