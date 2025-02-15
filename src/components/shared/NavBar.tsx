"use client";
import React, { useState, useEffect } from "react";
import { Menu, MenuItem, HoveredLink } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-6 z-50 hidden md:inline" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const router = useRouter();
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
          <Image src="/favicon.ico" alt="logo" width={24} height={24} />
          <button onClick={() => router.push("/")}>Home</button>
          <MenuItem setActive={setActive} active={active} item="What we provide">
            <div className="flex flex-col space-y-4 text-sm">
              <p>Handwritten Notes</p>
              <p>Previous year Papers</p>
              <p>Must watch Youtube playlists</p>
              <p>E-books</p>
              <p>Useful PPTs</p>
            </div>
          </MenuItem>
          <button onClick={() => router.push("/")}>About the devs</button>
          <button onClick={() => router.push("/admin")}>Admin Sign in</button>
        </Menu>
    </div>
  );
}

export default Navbar;
