import BrowsePageContent from "@/components/browse/BrowsePageContent";

type BrowsePageProps = {
  searchParams: Promise<{
    location?: string;
    vehicleType?: string;
    rentalType?: string;

    date?: string;
    startTime?: string;
    endTime?: string;

    pickupDate?: string;
    returnDate?: string;
  }>;
};

export default async function BrowsePage({
  searchParams,
}: BrowsePageProps) {
  const params = await searchParams;

  return (
    <main className="min-h-screen bg-[var(--page)]">
      <div className="mx-auto max-w-7xl px-5 py-10 md:px-10 md:py-16">
        <BrowsePageContent
          location={params.location}
          vehicleType={params.vehicleType ?? "all"}
          rentalType={
            params.rentalType === "daily"
              ? "daily"
              : "hourly"
          }
          date={params.date}
          startTime={params.startTime}
          endTime={params.endTime}
          pickupDate={params.pickupDate}
          returnDate={params.returnDate}
        />
      </div>
    </main>
  );
}