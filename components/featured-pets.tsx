"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { Button } from "./ui/button";
import { Heart, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const featuredPets = [
  {
    id: "1",
    name: "Luna",
    type: "Golden Retriever",
    age: "2 years",
    location: "San Francisco, CA",
    image: "/placeholder.svg?height=300&width=400",
    traits: ["Friendly", "Trained", "Good with kids"],
    urgent: false,
  },
  {
    id: "2",
    name: "Whiskers",
    type: "Maine Coon Cat",
    age: "3 years",
    location: "Los Angeles, CA",
    image: "/placeholder.svg?height=300&width=400",
    traits: ["Calm", "Indoor", "Affectionate"],
    urgent: true,
  },
  {
    id: "3",
    name: "Buddy",
    type: "Labrador Mix",
    age: "1 year",
    location: "New York, NY",
    image: "/placeholder.svg?height=300&width=400",
    traits: ["Energetic", "Playful", "Loyal"],
    urgent: false,
  },
];

export const FeaturedPets = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const toggleFavorite = (id: string) => {
    setFavorites((prev: string[]) =>
      prev.includes(id)
        ? prev.filter((petid: string) => petid != id)
        : [...prev, id]
    );
  };
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredPets.map((pet) => (
        <Card key={pet.id} className="overflow-hidden group">
          <div className="relative">
            <Image
              src={pet.image}
              alt={pet.name}
              height={300}
              width={400}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {pet.urgent && (
              <Badge variant="destructive" className="absolute top-4 left-4">
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
                  ? "Remove from Favorites"
                  : "Add to Favorites"}
              </span>
            </Button>
          </div>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl">{pet.name}</CardTitle>
                <p className="text-muted-foreground">{pet.type}</p>
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
              {pet.traits.map((trait, index) => (
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
            <Button variant="outline" size="icon" onClick={()=>toggleFavorite(pet.id)}>
                <Heart className={cn("h-4 w-4",favorites.includes(pet.id) && "fill-current text-red-500")}/>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
