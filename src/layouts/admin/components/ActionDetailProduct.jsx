import { Button, CardFooter } from "@/components/ui";

const ActionDetailProduct = () => {
  return (
    <CardFooter className="gap-5 mt-6 lg:justify-center">
      <Button
        variant="danger"
        className="w-fit "
      >
        Delete Product
      </Button>
      <Button
        variant="primary"
        className="w-full lg:w-fit"
      >
        Edit Product
      </Button>
    </CardFooter>
  );
};

export { ActionDetailProduct };
