"use client";

import Link from "next/link";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useCartStore } from "@/store/cart-store";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [artworksOpen, setArtworksOpen] = useState(false);
  const { items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/">
          Joana Seabra
        </Link>

        <div className="hidden md:flex space-x-6 " >
          <Link href="/portfolio" >
            my creations
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger>
              take one home
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/artworks/originals">
                  originals
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/artworks/prints">
                  limited edition prints
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/artworks/giftcards" >
                  gift card for your loved ones
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/about" >
            about
          </Link>
          <Link href="/getintouch">
            get in touch
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/checkout" className="relative">
            <ShoppingCartIcon className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-rose-300 text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      {mobileOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col p-4 space-y-2">
            {/* Artworks dropdown */}
            <li className="relative">
              <button
                onClick={() => setArtworksOpen(!artworksOpen)}
                className="w-full text-left block hover:text-blue-600"
              >
                artworks
              </button>

              {artworksOpen && (
                <ul className="ml-4 mt-2 flex flex-col space-y-1 border-l border-gray-200 pl-3">
                  <li>
                    <Link
                      href="/artworks/originals"
                      className="block"
                    >
                      originals
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/artworks/prints"
                      className="block"
                    >
                      limited edition prints
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/artworks/giftcards"
                      className="block"
                    >
                      gift card for your loved ones
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Other nav links */}
            <li>
              <Link href="/getintouch" className="block">
                get in touch
              </Link>
            </li>
            <li>
              <Link href="/about" className="block">
                about
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </nav>
  );
};