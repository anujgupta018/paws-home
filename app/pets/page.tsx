import PetsGrid from "@/components/pets-grid";

export default function PetsPage({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}) {
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
          <aside></aside>
          <main>
            <PetsGrid searchParams={searchParams} />
          </main>
        </div>
      </div>
    </div>
  );
}
