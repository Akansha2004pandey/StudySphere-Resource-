"use client";
import React, { useState, useEffect } from "react";
import { Menu, MenuItem, HoveredLink } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet"; 

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-6 z-50" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const router = useRouter();
  const [active, setActive] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 730);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={cn("fixed inset-x-0 max-w-2xl mx-auto z-50", className)}>
      {!isMobile ? (
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
      ) : (
        
        <Sheet>
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <div className="flex justify-between items-center px-4 py-2">
            <Image src="/favicon.ico" alt="logo" width={48} height={48} />
            <SheetTrigger asChild>
              <button className="p-2">
                <Image 
                src="/ham.jpg"
                height={48}
                width={48}
                alt="ham"
                />
              </button>
            </SheetTrigger>
          </div>

          <SheetContent side="left" className="p-6">
            <div className="flex flex-col gap-4 text-lg">
              <button onClick={() => router.push("/")}>Home</button>
              <button onClick={() => router.push("/")}>About the devs</button>
              <button onClick={() => router.push("/admin")}>Admin Sign in</button>
              <div className="border-t pt-4">
                <h4 className="text-sm font-semibold">What we provide</h4>
                <div className="flex flex-col space-y-2 text-sm">
                  <p>Handwritten Notes</p>
                  <p>Previous year Papers</p>
                  <p>Must watch Youtube playlists</p>
                  <p>E-books</p>
                  <p>Useful PPTs</p>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      )}
    </div>
  );
}

export default Navbar;
