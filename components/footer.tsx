import { Facebook, Heart, Instagram, Mail, Phone, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-red-500" />
              <span className="font-bold text-xl">PawsHome</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Connecting loving families with pets in need of forever home
            </p>
            <div className="flex space-x-4 ">
              <Button size="icon" variant="ghost">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button size="icon" variant="ghost">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">X</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Adopt</h3>
            <ul className="space-y-2 ">
              <li>
                <Link
                  href="/pets?type=dog"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Find Dogs
                </Link>
              </li>
              <li>
                <Link
                  href="/pets?type=cat"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Find Cats
                </Link>
              </li>
              <li>
                <Link
                  href="/pets?type=other"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Other Pets
                </Link>
              </li>
              <li>
                <Link
                  href="/pets?type=about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Adoption Process
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pet Care Tips
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Training Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Health Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-4 w-4" />
                <span>(123) 456-789</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@pawshome.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <span>Contact-Form</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <span>Volunteer</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>{new Date().getFullYear()} PawsHome. All rights reserved.</p>
          <p className="mt-2">
            Made with{" "}
            <Heart className="inline h-4 w-4 text-red-500 text-sm font-extralight" />{" "}
            by the PawsHome Team
          </p>
        </div>
      </div>
    </footer>
  );
}
