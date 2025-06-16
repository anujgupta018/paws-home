"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useRouter, useSearchParams } from "next/navigation";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
export default function PetsFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentType = searchParams.get("type") || "all";
  const currentAge = searchParams.get("age") || "all";
  const currentSize = searchParams.get("size") || "all";
  const currentGender = searchParams.get("gender") || "all";
  const currentTraits = searchParams.getAll("traits") || [];

  const [type, setType] = useState(currentType);
  const [age, setAge] = useState(currentAge);
  const [size, setSize] = useState(currentSize);
  const [gender, setGender] = useState(currentGender);
  const [traits, setTraits] = useState<string[]>(currentTraits);
  const [distance, setDistance] = useState([50]);

  const toggleTraits = (trait: string) => {
    setTraits((prev) =>
      prev.includes(trait) ? prev.filter((t) => t !== trait) : [...prev, trait]
    );
  };

  // apply filters
  const applyFilters = () => {
    const params = new URLSearchParams();
    if (type !== "all") params.set("type", type);
    if (age !== "all") params.set("age", age);
    if (size !== "all") params.set("size", size);
    if (gender !== "all") params.set("gender", gender);

    params.delete("traits");
    traits.forEach((trait) => {
      params.append("traits", trait);
    });
    router.push(`/pets?${params.toString()}`);
  };
  //reset filters
  const resetFilters = () => {
    setType("all");
    setAge("all");
    setGender("all");
    setSize("all");
    setTraits([]);
    setDistance([50]);
    router.push("/pets");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Filter Pets</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-medium">Pet Type</h3>
            <RadioGroup value={type} onValueChange={setType}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="type-all" />
                <Label htmlFor="type-all">All Pets</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Dog" id="type-dog" />
                <Label htmlFor="type-dog">Dogs</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Cat" id="type-cat" />
                <Label htmlFor="type-cat">Cats</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="type-other" />
                <Label htmlFor="type-other">Others</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Age</h3>
            <RadioGroup value={age} onValueChange={setAge}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="age-all" />
                <Label htmlFor="age-all">All</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="baby" id="age-baby" />
                <Label htmlFor="age-baby">Baby</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="young" id="age-young" />
                <Label htmlFor="age-young">Young</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="adult" id="age-adult" />
                <Label htmlFor="age-adult">Adult</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="senior" id="senior" />
                <Label htmlFor="age-senior">Senior</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2 ">
            <h3 className="font-medium">Size</h3>
            <RadioGroup value={size} onValueChange={setSize}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="size-all" />
                <Label htmlFor="size-all">Any Size</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="small" id="size-small" />
                <Label htmlFor="size-small">Small</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="size-medium" />
                <Label htmlFor="size-medium">Medium</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="large" id="size-large" />
                <Label htmlFor="size-large">Large</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Gender</h3>
            <RadioGroup value={gender} onValueChange={setGender}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="gender-all" />
                <Label htmlFor="gender-all">Any Gender</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="gender-male" />
                <Label htmlFor="gender-male">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="gender-female" />
                <Label htmlFor="gender-female">Female</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Traits</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Good with Kids",
                "Good with Dogs",
                "Good with Cats",
                "House Trained",
                "Special needs",
                "Vaccinated",
              ].map((trait) => (
                <div key={trait} className="flex items-center space-x-2">
                  <Checkbox
                    id={`trait-${trait.toLowerCase().replace(/\s+/g, "-")}`}
                    checked={traits.includes(trait)}
                    onCheckedChange={() => toggleTraits(trait)}
                  />
                  <Label
                    htmlFor={`trait-${trait
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    {trait}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Distance</h3>
              <Slider
                defaultValue={[50]}
                max={100}
                step={5}
                value={distance}
                onValueChange={setDistance}
              />
            </div>
            <div className="flex justify-between text-sm">
              <span>0 miles</span>
              <span>{distance[0]} miles</span>
              <span>100 miles</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Button onClick={applyFilters}>Apply Filters</Button>
            <Button variant="outline" onClick={resetFilters}>
              Reset Filters
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
