"use client";
import { Heart, Menu, Search, User, X } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="cotainer flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-red-500" />
            <span className="text-xl font-bold">PawsHome</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/pets"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Find pets
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About Us
          </Link>
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Resources
          </Link>
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Heart className="h-5 w-5" />
            <span className="sr-only">Favorites</span>
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <User className="h-5 w-5" />
            <span className="sr-only">User</span>
          </Button>
          <ModeToggle />
          <Button className="hidden md:flex">Adopt now</Button>
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
      <div>
        {/* Mobile Navigaton   */}
        <div
          className={cn(
            "container md:hidden overflow-hidden transition-all",
            menuOpen ? "max-h-64" : "max-h-0"
          )}
        >
          <nav className="flex flex-col gap-2 pb-4">
            <Link
              href="/pets"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              Find pets
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex gap-2 mt-2">
              <Button className="w-full" onClick={() => setMenuOpen(false)}>
                Adopt now
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
