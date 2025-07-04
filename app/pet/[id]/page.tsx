import {
  ArrowLeft,
  Calendar,
  Heart,
  Mail,
  MapPin,
  Phone,
  Ruler,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { pets } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function PetsDetailPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const pet = pets.find((p) => p.id === id);
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
        <div className="lg:col-span-2 space-y-8">
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
                <div>
                  <h3 className="font-semibold mb-2">Health information</h3>
                  <p className="text-muted-foreground text-sm">
                    {pet.healthInfo}
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="Adoption" className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Adoption Fee</h3>
                  <p className="text-2xl font-bold text-primary">
                    {pet.adoptionFee}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    This fee includes spaying/neutering,vaccinations, and
                    microchipping.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Adoption Process</h3>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Submit an Adoption Application</li>
                    <li>Meet and Greet with {pet.name}</li>
                    <li>Home visit(if required)</li>
                    <li>Finalize adoption paperwork</li>
                    <li>Take {pet.name} home</li>
                  </ol>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Adopt {pet.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button asChild size="lg" className="w-full">
                <Link href={`/adopt?pet=${pet.id}`}>
                  Start Adoption Process
                </Link>
              </Button>
              <Button variant={"outline"} className="w-full">
                Schedule a Visit
              </Button>
              <Button variant={"outline"} className="w-full">
                Ask a Question
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Contact Shelter</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">(123) 456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">adopt@pawshome.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{pet.location}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Share {pet.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Button variant={"outline"} size={"sm"} className="flex-1">
                  Facebook
                </Button>
                <Button variant={"outline"} size={"sm"} className="flex-1">
                  Email
                </Button>
                <Button variant={"outline"} size={"sm"} className="flex-1">
                  Twitter
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
