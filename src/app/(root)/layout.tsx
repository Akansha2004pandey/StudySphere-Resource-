import React from 'react'
import {NavbarDemo} from '@/components/shared/NavBar'
import { MobileNav } from '@/components/shared/MobileNav'
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
        <NavbarDemo />
        <MobileNav />
        <div className="root-container">
            <div className="wrapper">
            {children}
            </div>
        </div>
    </main>
  )
}

export default Layout