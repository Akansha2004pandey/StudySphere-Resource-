"use client";
import { Sheet, SheetTitle, SheetTrigger, SheetDescription, SheetHeader, SheetContent } from "../ui/sheet"
import Image from "next/image"
import { useRouter } from "next/navigation"
export const MobileNav = () => {
    const router = useRouter();
    return (
        <div className="md:hidden relative">
        <Sheet>
          <SheetTitle className="sr-only">Study Sphere</SheetTitle>
          <div className="flex justify-between items-center px-4 py-2">
            <Image src="/favicon.ico" alt="logo" width={48} height={48} />
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

          <SheetContent side="left" className="p-6">
            <div className="flex flex-col justify-between gap-4 text-lg">
            <Image src="/favicon.ico" alt="logo" width={24} height={24} />
              <button onClick={() => router.push("/")}>Study Sphere Home</button>
              <button onClick={() => router.push("/")}>About the devs</button>
              <div className="border-t pt-4">
                <h4 className="font-bold text-xl text-center">What we provide</h4>
                <div className="flex flex-col space-y-2 text-sm mt-6">
                  <p className="text-white sidebar-items">
                    <Image 
                    src="/post-it.png"
                    alt="notes"
                    height={24}
                    width={24}
                    className="text-white"
                    />
                    Handwritten Notes</p>
                  <p className="sidebar-items">
                  <Image 
                    src="/question.png"
                    alt="notes"
                    height={24}
                    width={24}
                    className="text-white"
                    />
                    Previous year Papers</p>
                  <p className="sidebar-items">
                  <Image 
                    src="/youtube.png"
                    alt="notes"
                    height={24}
                    width={24}
                    className="text-white"
                    />
                    Must watch Youtube playlists</p>
                  <p className="sidebar-items">
                  <Image 
                    src="/stack-of-books.png"
                    alt="notes"
                    height={24}
                    width={24}
                    className="text-white"
                    />
                    E-books</p>
                  <p className="sidebar-items">
                  <Image 
                    src="/ppt.png"
                    alt="notes"
                    height={24}
                    width={24}
                    className="text-white"
                    />
                    Useful PPTs</p>
                </div>
              </div>
              <div className="flex flex-col justify-end mt-12 items-middle">
            <button className="p-2" onClick={() => router.push("/admin")}>Admin Sign in</button>
            </div>
            </div>
          </SheetContent>
        </Sheet>
        </div>
      )
}