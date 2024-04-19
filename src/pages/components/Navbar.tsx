import {useSession, signIn, signOut} from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  const {status} = useSession()

  const signInUser = () => {
    signIn()
  }
  const signOutUser = () => {
    signOut()
  }
  return (
    <header className="header">
      <div className="logo">
        <Link href="/">Logo</Link>
      </div>
      <nav>
        <ul className="main-nav">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Contacts</Link>
          </li>
          <li>
            <Link href="/">About Us</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>

          {status === 'unauthenticated' ? (
            <li>
              <button className="item" onClick={signInUser}>
                Sign In
              </button>
            </li>
          ) : (
            <li>
              <button className="item" onClick={signOutUser}>
                Sign Out
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}
