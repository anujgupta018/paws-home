import PetsFilter from "@/components/pets-filter";
import PetsGrid from "@/components/pets-grid";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

export default function PetsPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">Find Your Perfect Pet</h1>
          <p className="text-muted-foreground text-lg">
            Browse our available pets and filter by type, age, and more to find
            your perfect companion.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[240px_1fr]">
          <aside>
            <PetsFilter />
          </aside>
          <main>
            <Suspense fallback={<PetGridSkeleton />}>
              <PetsGrid />
            </Suspense>
          </main>
        </div>
      </div>
    </div>
  );
}
function PetGridSkeleton() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array(6)
        .fill(null)
        .map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="h-64 w-full rounded-lg" />
            <div className="space-y-2">
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            <div className="flex gap-2">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-10" />
            </div>
          </div>
        ))}
    </div>
  );
}
