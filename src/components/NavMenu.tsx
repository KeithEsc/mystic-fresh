"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react"; // hamburger icon

export default function NavBar() {
  return (
    <header className="w-full  bg-[var(--color-lav)] absolute top-0 z-50 fixed">
      {/* keep Products trigger styled while dropdown is open using aria-expanded */}
      <style>{`.nav-trigger[aria-expanded="true"]{background:var(--color-dark-blue) !important; color:var(--light) !important;} .nav-trigger[aria-expanded="true"] *{color:var(--light) !important}`}</style>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-[var(--dark)]">
          <img src="/images/MysticManesSig.png" alt="Logo" className=" h-8 w-auto" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          
          <NavigationMenu>
            <NavigationMenuList>
             <NavigationMenuItem>
                <NavigationMenuLink
                  href="/services"
                  className="px-4 py-2 rounded-md hover:bg-[var(--color-dark-blue)] hover:text-[var(--light)]"
                >
                  Services
                </NavigationMenuLink>
              </NavigationMenuItem>


                            <NavigationMenuItem>
                <NavigationMenuLink
                  href="/gallery"
                  className="px-4 py-2 rounded-md hover:bg-[var(--color-dark-blue)] hover:text-[var(--light)]"
                >
                  Gallery
                </NavigationMenuLink>
              </NavigationMenuItem>

                            <NavigationMenuItem>
                <NavigationMenuLink
                  href="/policies-faq"
                  className="px-4 py-2 rounded-md hover:bg-[var(--color-dark-blue)] hover:text-[var(--light)]"
                >
                  Policies & FAQ
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/contact"
                  className="px-4 py-2 rounded-md hover:bg-[var(--color-dark-blue)] hover:text-[var(--light)]"
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button asChild
          className="bg-[var(--color-dark-blue)] hover:bg-[var(--dark)] text-white">
            <a href="https://vagaro.com/mysticmanesbeauty">Book Now</a>
          </Button>
        </div>

        {/* Mobile hamburger menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-6 flex flex-col gap-4 ">
              <a href="/" className="text-lg font-medium">Home</a>
              <a href="/services" className="text-lg font-medium">Services</a>
              <a href="/policies-faq" className="text-lg font-medium">Policies & FAQ</a>
              <a href="/gallery" className="text-lg font-medium ">Gallery</a>
              <a href="/contact" className="text-lg font-medium">Contact</a>
              <Button asChild className="mt-4 bg-[var(--color-dark-blue)] hover:bg-[var(--dark)] text-white">
                <a href="https://www.vagaro.com/mysticmanesbeauty">Book Now</a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
