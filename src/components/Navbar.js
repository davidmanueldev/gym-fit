"use client"

import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

function Navbar() {

  const { data: session } = useSession()
  console.log(session)
  return (
    <nav className='bg-slate-900 flex items-center py-3 justify-between px-24 text-white'>
      <Link href="/">
        <h1>GymFit</h1>
      </Link>

      {session?.user ? (
        <div className='flex gap-x-2 items-center'>
          <Link href='/dashboard'>
            Dashboard
          </Link>
          <p>{session.user.name} {session.user.email}</p>
          <img src={session.user.image} alt='i' className='w-10 h-10 rounded-full cursor-pointer' />

          <button onClick={() => {signOut()}}
            className='bg-sky-400 px-3 py-2 rounded'>
            Cerrar Sesión
          </button>

        </div>
      ) : (
        <button onClick={() => signIn()} className='bg-sky-400 px-3 py-2 rounded'>
          Iniciar Sesión
        </button>
      )}

    </nav>
  )
}

export default Navbar