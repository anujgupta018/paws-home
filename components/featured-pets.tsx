"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
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
    breed: "Golden Retriever",
    type: "Dog",
    age: "2 years",
    ageCategory: "young",
    gender: "Female",
    size: "Large",
    location: "San Francisco, CA",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop&crop=face",
    traits: ["Friendly", "Trained", "Good with kids"],
    urgent: false,
    description:
      "Luna is a beautiful Golden Retriever with a heart of gold. She's great with children and other pets, and loves to play fetch in the park. Luna is fully house-trained and knows several commands. She's looking for an active family who can give her plenty of exercise and love.",
    healthInfo: "Spayed, vaccinated, microchipped",
    adoptionFee: "$250",
  },
  {
    id: "2",
    name: "Whiskers",
    breed: "Maine Coon",
    type: "Cat",
    age: "3 years",
    ageCategory: "adult",
    gender: "Male",
    size: "Medium",
    location: "Los Angeles, CA",
    image:
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop&crop=face",
    traits: ["Calm", "Indoor", "Affectionate"],
    urgent: true,
    description:
      "Whiskers is a gorgeous Maine Coon with a luxurious coat and gentle personality. He enjoys lounging in sunny spots and being petted. Whiskers is litter-trained and would do best in a quiet home where he can be the center of attention.",
    healthInfo: "Neutered, vaccinated, microchipped",
    adoptionFee: "$150",
  },
  {
    id: "3",
    name: "Buddy",
    breed: "Labrador Mix",
    type: "Dog",
    age: "1 year",
    ageCategory: "young",
    gender: "Male",
    size: "Large",
    location: "New York, NY",
    image:
      "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=300&fit=crop&crop=face",
    traits: ["Energetic", "Playful", "Loyal"],
    urgent: false,
    description:
      "Buddy is a playful Labrador mix who loves to run and play. He's still learning basic commands but is very eager to please. Buddy would thrive in an active household with a yard where he can burn off energy. He gets along well with other dogs but hasn't been tested with cats.",
    healthInfo: "Neutered, vaccinated, microchipped",
    adoptionFee: "$200",
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
            <Button
              variant="outline"
              size="icon"
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
  );
};
