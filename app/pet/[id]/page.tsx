import { ArrowLeft, Calendar, Heart, MapPin, Ruler } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { pets } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PetsDetailPage({ params }: { params: { id: string } }) {
  const pet = pets.find((p) => p.id === params.id);
  if (!pet) {
    notFound();
  }
  return (
    <div className="container py-10">
      <Link
        href="/pets"
        className="inline-flex text-center text-muted-foreground 
      hover:text-foreground mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4 my-1" />
        Back to all Pets
      </Link>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:cols-span-2 space-y-8">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={pet.image}
              alt={pet.name}
              fill
              className="object-cover"
              priority
            />
            {pet.urgent && (
              <Badge variant={"destructive"} className="absolute top-4 left-4">
                Urgent
              </Badge>
            )}
          </div>

          <div>
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h1 className="text-4xl font-bold">{pet.name}</h1>
                <p className="text-xl text-muted-foreground">{pet.breed}</p>
              </div>
              <Button size="lg" className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Add To Favorites
              </Button>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="text-muted-foreground h-5 w-5" />
                <span>{pet.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="text-muted-foreground h-5 w-5" />
                <span>{pet.age}</span>
              </div>
              <div className="flex items-center gap-2">
                <Ruler className="text-muted-foreground" />
                <span>{pet.size}</span>
              </div>
            </div>

            <Tabs defaultValue="about">
              <TabsList className="mb-4 ">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="Adoption">Adoption Info</TabsTrigger>
              </TabsList>
              <TabsContent value="about">
                <div>
                  <h2 className="text-xl font-semibold mb-2">
                    About {pet.name}
                  </h2>
                  <p className="text-muted-foreground">{pet.description}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Characteristics</h3>
                  <div className="flex flex-wrap gap-2">
                    {pet.traits.map((trait, index) => (
                      <Badge key={index} variant={"secondary"}>
                        {trait}
                      </Badge>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="details" className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <h3 className="font-semibold mb-2">Basic Information</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Type:</span>
                      <span>{pet.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Breed:</span>
                      <span>{pet.breed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Age:</span>
                      <span>{pet.age}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Gender:</span>
                      <span>{pet.gender}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Size:</span>
                        <span>{pet.size}</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
