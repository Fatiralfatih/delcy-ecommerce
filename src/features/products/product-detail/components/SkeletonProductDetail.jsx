import { Card, CardContent, Skeleton } from "@/components/ui";

const SkeletonProductDetail = () => {
  return (
    <section className="flex container gap-4 flex-col md:flex-row pt-5 ">
      <div className="basis-[350px] rounded-lg md:basis-[300px] md:h-[300px] lg:basis-[500px]">
        <Skeleton className="h-full w-full" />
      </div>
      <div className="flex flex-col gap-2 md:flex-row lg:w-full">
        <Card className="basis-full ">
          <CardContent className="pt-3 space-y-3">
            <Skeleton className="w-full h-8" />
            <Skeleton className="w-20 h-5" />
            <Skeleton className="w-40 h-8" />

            <hr />
            <Skeleton className="w-full h-6" />
            <hr />
            <Skeleton className="w-full h-6" />
            <Skeleton className="w-20 h-4 lg:w-60" />
            <Skeleton className="w-24 h-4 lg:w-56" />
          </CardContent>
        </Card>
        <Card className="basis-full lg:basis-[500px]">
          <CardContent className="pt-3 space-y-3">
            <Skeleton className="w-full h-8" />
            <Skeleton className="w-40 h-5" />
            <Skeleton className="w-40 h-5" />
            <Skeleton className="w-full h-8" />
            <Skeleton className="w-full h-10" />
            <Skeleton className="w-full h-10" />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export { SkeletonProductDetail };
