import { Loader } from "@/components/element";
import { Card, CardContent } from "@/components/ui";

const LoadingFormProductEdit = () => {
  return (
    <section className="container md:max-w-xl lg:max-w-4xl pt-7">
      <Card className="w-full h-screen flex items-center justify-center">
        <CardContent className="w-full flex justify-center items-center">
          <Loader />
        </CardContent>
      </Card>
    </section>
  );
};

export { LoadingFormProductEdit };
