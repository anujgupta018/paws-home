"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { pets } from "@/lib/mock-data";
import { Calendar, MapPin, Ruler } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function AdoptPage() {
  const searchParams = useSearchParams();
  const petId = searchParams.get("pet");
  const pet = petId ? pets.find((p) => p.id === petId) : null;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    housingType: "",
    ownRent: "",
    landlordPermission: "",
    hasYard: "",
    yardFenced: "",
    currentPets: "",
    petExperience: "",
    hoursAlone: "",
    reasonForAdoption: "",
    expectations: "",
    references: "",
    agreeToTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="container py-10">
        <div className="max-w-2xl mx-auto text-center">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-green-600">
                Application Submitted
              </CardTitle>
              <CardDescription>
                Thank you for your interest in adopting{" "}
                {pet?.name || "One of our pets"} . We will review your
                application and get back to you within 2-3 business days.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  In the meantime, feel free to browse more pets or learn about
                  our adoption process.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button asChild>
                    <a href="/pets">Browse More pets</a>
                  </Button>
                  <Button variant={"outline"} asChild>
                    <a href="/">Back to home</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Adoption Application</h1>
          <p className="text-muted-foreground text-lg">
            Please fill out this form completely to begin the adoption process.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-4">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-4">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      required
                      value={formData.address}
                      onChange={(e) =>
                        handleInputChange("address", e.target.value)
                      }
                    />
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-4">
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        required
                        value={formData.city}
                        onChange={(e) =>
                          handleInputChange("city", e.target.value)
                        }
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        required
                        value={formData.state}
                        onChange={(e) =>
                          handleInputChange("state", e.target.value)
                        }
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <Label htmlFor="zipCode">Zip Code</Label>
                      <Input
                        id="zipCode"
                        required
                        value={formData.zipCode}
                        onChange={(e) =>
                          handleInputChange("zipCode", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Housing Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col gap-4">
                    <Label>Type of Housing</Label>
                    <Select
                      value={formData.housingType}
                      onValueChange={(value) =>
                        handleInputChange("housingType", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select housing Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                        <SelectItem value="townhouse">Townhouse</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="mb-2">Do you own or rent?</Label>
                    <RadioGroup
                      value={formData.ownRent}
                      onValueChange={(val) => handleInputChange("ownRent", val)}
                    >
                      <div className="flex items-center space-x-2 ">
                        <RadioGroupItem value="own" id="own" />
                        <Label htmlFor="own">Own</Label>
                      </div>
                      <div className="flex items-center space-x-2 ">
                        <RadioGroupItem value="rent" id="rent" />
                        <Label htmlFor="rent">Rent</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pet Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col gap-4">
                    <Label htmlFor="petExperience">
                      Describe your experience with pets
                    </Label>
                    <Textarea
                      id="petExperience"
                      required
                      value={formData.petExperience}
                      onChange={(e) =>
                        handleInputChange("petExperience", e.target.value)
                      }
                      placeholder="Tell us your history with pets,training experience etc."
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <Label htmlFor="reasonForAdoption">
                      Why do you want to adopt a pet?
                    </Label>
                    <Textarea
                      id="reasonForAdoption"
                      required
                      value={formData.reasonForAdoption}
                      onChange={(e) =>
                        handleInputChange("reasonForAdoption", e.target.value)
                      }
                      placeholder="Tell us about your motivation for adopting."
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(change) =>
                          handleInputChange("agreeToTerms", change as boolean)
                        }
                      />
                      <Label className="text-sm" htmlFor="terms">
                        I agree to the terms and conditions and understand this
                        application does not gurantee adoption.
                      </Label>
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={!formData.agreeToTerms || isSubmitting}
                    >
                      {isSubmitting ? "Submitting...." : "Submit Application"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </form>
          </div>

          <div className="space-y-6">
            {pet && (
              <Card>
                <CardHeader>
                  <CardTitle>Adopting {pet.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Image
                      src={pet.image}
                      alt={pet.name}
                      width={300}
                      height={200}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <div>
                      <p className="font-medium">{pet.breed}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {pet.age}
                        </div>
                        <div className="flex items-center gap-1">
                          <Ruler className="h-4 w-4" />
                          {pet.size}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                        <MapPin className="h-4 w-4" />
                        {pet.location}
                      </div>
                    </div>
                    <div className="text-lg font-semibold text-primary">
                      Adoption Fee: {pet.adoptionFee}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle>What happens next?</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                  <li>We review your application (2-3 business days)</li>
                  <li>Phone interview with our adoption team</li>
                  <li>Meet and greet with the pet</li>
                  <li>Home visit (if required)</li>
                  <li>Finalize adoption paperwork</li>
                  <li>Welcome your new Family member home!</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
