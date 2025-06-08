import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Heart, Search, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="relative py-20 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block">
                <Badge variant="secondary" className="mb-2 ">
                  Find Your perfect Companion
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Give a Pet a <span className="text-primary">Forever Home</span>
              </h1>
              <p className="text-xl text-muted-foreground md:w-[85%]">
                Connect with loving pets in need of homes. Our mission is to
                bring together families and their perfect furry companions
                through safe, caring adoption processes.
              </p>
              <div className="bg-background p-4 rounded-lg border-white shadow-lg mt-6">
                <h3 className="text-lg font-medium mb-4">
                  Find Your Perfect Pet
                </h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Pet Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dogs">Dogs</SelectItem>
                      <SelectItem value="cats">Cats</SelectItem>
                      <SelectItem value="rabbits">Rabbits</SelectItem>
                      <SelectItem value="birds">Birds</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Age" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="puppy">Puppy</SelectItem>
                      <SelectItem value="kitten">Kitten</SelectItem>
                      <SelectItem value="adult">Adult</SelectItem>
                      <SelectItem value="senior">Senior</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="flex space-x-2">
                    <input placeholder="Location" className="flex-1" />
                    <Button size="icon">
                      <Search className="h-4 w-4" />
                      <span className="sr-only">Search</span>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link href="/pets">Browse All Pets</Link>
                </Button>
                <Button>
                  <Link href="/adoption">Learn About Adoption</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src=""
                alt=""
                width={600}
                height={600}
                className="rounded-lg shadow-xl mx-auto"
                priority
              />
              <div className="absolute -top-4 -left-4 bg-background p-4 rounded-lg shadow-lg
              hidden md:flex items-center space-x-2">
                <Heart className="h-5 w-5 text-red-500"/>
                <div>
                  <div className="font-bold">2845</div>
                  <div className="text-xs text-muted-foreground">Pets Adopted</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-background p-4 rounded-lg shadow-lg hidden md:flex
              items-center space-x-2">
                  <Users className="h-4 w-4 text-blue-500"/>
                  <div>
                    <div className="font-bold">1234</div>
                    <div className="text-xs text-muted-foreground">Happy Families</div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
