"use client";

import { pets } from "@/lib/mock-data";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { Heart, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PetsGrid({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((petId) => petId !== id) : [...prev, id]
    );
  };
  const filteredPets = pets.filter((pet) => {
    //type
    if (
      searchParams.type &&
      searchParams.type !== "all" &&
      pet.type.toLowerCase() !== searchParams.type
    ) {
      return false;
    }
    //age
    if (
      searchParams.age &&
      searchParams.age !== "all" &&
      pet.age.toLowerCase() !== searchParams.age
    ) {
      return false;
    }
    //size
    if (
      searchParams.size &&
      searchParams.size !== "all" &&
      pet.size.toLowerCase() !== searchParams.size
    ) {
      return false;
    }
    //gender
    if (
      searchParams.gender &&
      searchParams.gender !== "all" &&
      pet.gender.toLowerCase() !== searchParams.gender
    ) {
      return false;
    }
    //traits
    if (searchParams.traits) {
      const requiredTraits = Array.isArray(searchParams.traits)
        ? searchParams.traits
        : [searchParams.traits];
      if (!requiredTraits.every((trait) => pet.traits.includes(trait))) {
        return false;
      }
    }
    return true;
  });
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p>
          Showing{" "}
          <span className="text-muted-foreground">{filteredPets.length} </span>
          pets
        </p>
        <select className="bg-background border rounded-md px-3 py-1 text-sm">
          <option>Sort by: Newest</option>
          <option>Sort by: Oldest</option>
          <option>Sort by: Name(A-Z)</option>
          <option>Sort by: Name(Z-A)</option>
        </select>
      </div>
      {filteredPets.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">
            No Pets Match your filters
          </h3>
          <p className="text-muted-foreground mb-6">
            Try adjusting your filters to find more pets.
          </p>
          <Button asChild>
            <Link href="/pets">Reset Filters</Link>
          </Button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredPets.map((pet) => (
            <Card key={pet.id} className="overflow-hidden group">
              <div className="relative">
                <Image
                  src=""
                  alt={pet.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {pet.urgent && (
                  <Badge
                    className="absolute top-4 left-4"
                    variant="destructive"
                  >
                    Urgent
                  </Badge>
                )}
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 right-4"
                  onClick={() => toggleFavorite(pet.id)}
                >
                  <Heart
                    className={cn(
                      "h-4 w-4",
                      favorites.includes(pet.id) && "fill-current text-red-500"
                    )}
                  />
                  <span className="sr-only">
                    {favorites.includes(pet.id)
                      ? "Remove from favorites "
                      : "Add to favorites"}
                  </span>
                </Button>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{pet.name}</CardTitle>
                    <p className="text-muted-foreground">{pet.breed}</p>
                  </div>
                  <Badge variant="outline">{pet.age}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{pet.location}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {pet.traits.slice(0, 3).map((trait, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {trait}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button className="flex-1" asChild>
                  <Link href={`/pet/${pet.id}`}>Meet {pet.name}</Link>
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => toggleFavorite(pet.id)}
                >
                  <Heart
                    className={cn(
                      "h-4 w-4",
                      favorites.includes(pet.id) && "fill-current text-red-500"
                    )}
                  />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
