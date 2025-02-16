"use client";
import { Sheet, SheetTitle, SheetTrigger, SheetDescription, SheetHeader, SheetContent } from "../ui/sheet"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Shield, FolderCode, Heart } from "lucide-react";
export const MobileNav = () => {
    const router = useRouter();
    return (
        <div className="md:hidden relative">
        <Sheet>
          <SheetTitle className="sr-only">Study Sphere</SheetTitle>
          <div className="flex justify-between items-center px-4 py-2 bg-gray-300">
            <div className="flex flex-col align-middle items-center justify-center">
              <Image src="/favicon.ico" alt="logo" width={36} height={36} />
              <p className="font-semibold text-gray-900">Study Sphere</p>
            </div>
            <SheetTrigger asChild>
              <button className="p-2">
                <Image 
                src="/ham.jpg"
                height={48}
                width={48}
                alt="ham"
                className="rounded-full"
                />
              </button>
            </SheetTrigger>
          </div>

          <SheetContent side="top" className="p-6 overflow-y-hidden bg-gray-300 items-center align-middle flex justify-center">
            <div className="flex flex-col gap-4 text-sm font-bold h-full">
              <div className="flex flex-col justify-between w-full">
                <div className="flex flex-col justify-between space-y-6">
                  <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-md flex gap-2 justify-center align-middle" onClick={() => router.push("/")}><Image src="/favicon.ico" alt="logo" width={24} height={24} />Study Sphere Home</button>
                  <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-md flex gap-2 justify-center align-middle" onClick={() => router.push("/")}><FolderCode />About the devs</button>
                  <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-md flex gap-2 justify-center align-middle" onClick={() => router.push("/")}><Heart />What we provide</button>
                  <button className="p-2 rounded-md text-white bg-blue-900 hover:bg-blue-700 flex gap-2 justify-center align-middle" onClick={() => router.push("/admin")}><Shield />Admin Sign in</button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        </div>
      )
}