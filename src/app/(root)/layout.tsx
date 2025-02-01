import React from 'react'
import {NavbarDemo} from '@/components/shared/NavBar'
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
        <NavbarDemo />
        <div className="root-container">
            <div className="wrapper">
            {children}
            </div>
        </div>
    </main>
  )
}

export default Layout