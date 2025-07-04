import { FeaturedPets } from "@/components/featured-pets";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Award, Heart, PawPrint, Search, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import frontImage from "@/public/frontimage.jpeg"; // Update with your actual image path

export default function Home() {
  return (
    <div>
      <section className="relative py-20 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block">
                <Badge
                  variant="secondary"
                  className="mb-2 text-lg bg-gradient-to-l from-blue-300 to-orange-300
                text-transparent bg-clip-text"
                >
                  Find Your perfect Companion
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Give a Pet a <span className="text-red-300">Forever Home</span>
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
                <Button asChild size="lg" variant="outline">
                  <Link href="/adoption">Learn About Adoption</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src={frontImage}
                alt="family with pets"
                width={600}
                height={600}
                className="rounded-lg shadow-xl mx-auto"
                priority
              />
              <div
                className="absolute -top-4 -left-4 bg-background p-4 rounded-lg shadow-lg
              hidden md:flex items-center space-x-2"
              >
                <Heart className="h-5 w-5 text-red-500" />
                <div>
                  <div className="font-bold">2845</div>
                  <div className="text-xs text-muted-foreground">
                    Pets Adopted
                  </div>
                </div>
              </div>
              <div
                className="absolute -bottom-4 -right-4 bg-background p-4 rounded-lg shadow-lg hidden md:flex
              items-center space-x-2"
              >
                <Users className="h-4 w-4 text-blue-500" />
                <div>
                  <div className="font-bold">1234</div>
                  <div className="text-xs text-muted-foreground">
                    Happy Families
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Pets section now */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center mb-12 text-center">
            <Badge
              variant="outline"
              className="mb-4 bg-gradient-to-r from-red-300 to-yellow-500 text-transparent bg-clip-text"
            >
              Available Now
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Meet Your New Bestfriend
            </h2>
            <p className="text-xl text-muted-foreground max-w-[85%] md:max-w-[65%]">
              These adorable pets are ready to find their forever homes. Each
              one has been health checked and is waiting for a loving family.
            </p>
          </div>

          <FeaturedPets />

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/pets">
                View All Available Pets
                <PawPrint className="h-2 w-2 text-yellow-700" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* {Adoption Procees Section} */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Simple Adoption Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-[85%] md:max-w-[65%]">
              We&apos;ve made adoption a pet as easy as possible while ensuring
              the best match for you and your companion.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Browse and Search",
                description:
                  "Find pets that match your lifestyle and preferences using our advanced search filters.",
                icon: Search,
              },
              {
                step: "2",
                title: "Meet and Greet",
                description:
                  "Schedule a visit to meet your potential pet and see if its a perfect match.",
                icon: Heart,
              },
              {
                step: "3",
                title: "Application",
                description:
                  "Complete our simple adoption application and provide references for a quick review.",
                icon: Users,
              },
              {
                step: "4",
                title: "Welcome Home",
                description:
                  "Take your new best friend home and start your beautiful journey together.",
                icon: Award,
              },
            ].map((step, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="relative mx-auto mb-2">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl">
                      <step.icon className="h-8 w-8 " />
                    </div>
                    <div
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full text-muted-foreground
                     flex items-center justify-center font-bold text-sm"
                    >
                      {step.step}
                    </div>
                  </div>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Happy Tails
            </h2>
            <p
              className="text-xl text-muted-foreground max-w-[85%] md:max-w-[65%]
              "
            >
              Read Heartwarming stories from families who found their perfect
              companion through PawsHome.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah & Max",
                story:
                  "Max has brought so much joy to our family. He's the perfect running companion and loves our kids!",
                image: "/placeholder.svg?height=300&width=300",
                rating: 5,
                location: "Seattle, WA",
              },
              {
                name: "John & Bella",
                story:
                  "Bella is the sweetest cat ever. She's helped me through tough times and is always there for cuddles.",
                image: "/placeholder.svg?height=300&width=300",
                rating: 5,
                location: "Austin, TX",
              },
              {
                name: "The Johnson Family",
                story:
                  "Rocky has been the perfect addition to our family. The kids love him and he's so well-behaved!",
                image: "/placeholder.svg?height=300&width=300",
                rating: 4,
                location: "Denver, CO",
              },
            ].map((story, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <Image
                    src={story.image}
                    alt=""
                    width={100}
                    height={100}
                    className="rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="flex justify-center mb-2">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-500 fill-current"
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="italic mb-4">{story.story}</p>
                  <div>
                    <p className="font-semibold">{story.name}</p>
                    <p className="text-muted-foreground">{story.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* statistics section */}
      <section className="py16 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              {
                icon: Heart,
                count: "2845",
                label: "Pets Adopted",
              },
              {
                icon: Users,
                count: "1234",
                label: "Happy Families",
              },
              {
                icon: PawPrint,
                count: "500+",
                label: "Pets Rescued",
              },
              {
                icon: Star,
                count: "4.9/5",
                label: "Customer Rating",
              },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl font-bold flex items-center justify-center">
                  <stat.icon className="h-8 w-8 mr-2 text-yellow-400" />
                  {stat.count}
                </div>
                <p className="text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="tracking-tighter text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Perfect Pet?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-[85%] md:max-w-[65%] mx-auto">
            Join Thousands of happy families who have found their perfect
            companions through PawsHome. Start your adoption journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/pets">
                Start Adopting Now!
                <PawPrint className="h-4 w-4 ml-2 text-yellow-700" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
