import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="relative py-20 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="space-y-4">
            <div className="inline-block">
              <h1 className="text-4xl font-bold text-center mt-10">
                <Badge variant="secondary" className="mb-2 ">Find Your perfect Companion</Badge>
              </h1>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Give a Pet a <span className="text-primary">Forever Home</span>
            </h1>
            <p className="text-xl text-muted-foreground md:w-[85%]">
              Connect with loving pets in need of homes. Our mission is to bring
              together families and their perfect furry companions through safe,
              caring adoption processes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
