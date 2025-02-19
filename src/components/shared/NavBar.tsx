"use client";
import React, { useState, useEffect } from "react";
import { Menu, MenuItem, HoveredLink } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex align-middle items-center justify-center">
      <Navbar className="top-6 z-50 hidden md:inline" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const router = useRouter();
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("font-semibold fixed inset-x-0 w-4/5 mx-auto z-50", className)}>
      <Menu setActive={setActive}>
          <Image 
          src="/favicon.ico" 
          alt="logo" 
          width={24} 
          height={24} 
          />
          <p>Study Sphere</p>
          <button onClick={() => router.push("/")}>Home</button>
          <Link href="#what-we-provide">What we provide</Link>
          <Link href="#about">About the devs</Link>
          <button onClick={() => router.push("/admin")}>Admin Sign in</button>
        </Menu>
    </div>
  );
}

export default Navbar;
