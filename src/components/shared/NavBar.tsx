"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-6 z-50" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
      <Image src="/favicon.ico" alt="logo" width={24} height={24}/>
      <Link href="/">
          <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
      </Link>
        <MenuItem setActive={setActive} active={active} item="What we provide">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Handwritten Notes</HoveredLink>
            <HoveredLink href="/">Previous year Papers</HoveredLink>
            <HoveredLink href="/">Must watch Youtube playlists</HoveredLink>
            <HoveredLink href="/">E-books</HoveredLink>
            <HoveredLink href="/">Useful PPTS</HoveredLink>
          </div>
        </MenuItem>
        <Link href="/">
          <MenuItem setActive={setActive} active={active} item="About the devs"></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
