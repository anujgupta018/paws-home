"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useSearchParams } from "next/navigation";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

export default function PetsFilter() {
  const searchParams = useSearchParams();
  const currentType = searchParams.get("type") || "all";
  const currentAge = searchParams.get("age") || "all";
  const curentSize = searchParams.get("size") || "size";
  const currentGender = searchParams.get("gender") || "all";
  const currentTraits = searchParams.get("traits") || "all";

  const [type, setType] = useState(currentType);
  const [age,setAge]=useState(currentAge);
  const [gender,setGender]=useState(currentGender);
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
                <RadioGroupItem value="dogs" id="type-dog" />
                <Label htmlFor="type-dog">Dogs</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cats" id="type-cat" />
                <Label htmlFor="type-cat">Cats</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="type-other"/>
                <Label htmlFor="type-other">Others</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Age</h3>
            <RadioGroup value={age} onValueChange={setAge}>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all" id="age-all"/>
                    <Label htmlFor="age-all">All</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="baby" id="age-baby"/>
                    <Label htmlFor="age-baby">Baby</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="young" id="age-young"/>
                    <Label htmlFor="age-young">Young</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="adult" id="age-adult"/>
                    <Label htmlFor="age-adult">Adult</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="senior" id="senior"/>
                    <Label htmlFor="age-senior">Senior</Label>
                </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Gender</h3>
            <RadioGroup value="gender" onValueChange={setGender}>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all" id="gender-all"/>
                    <Label htmlFor="gender-all">Any Gender</Label>
                </div>
                
            </RadioGroup>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
