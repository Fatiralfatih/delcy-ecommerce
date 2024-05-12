import { Button, Card, CardContent } from "@/components/ui";
import { IoCheckboxOutline } from "react-icons/io5";

const ActionCarts = () => {
  return (
    <Card>
      <CardContent className='flex justify-between p-5'>
        <p className='flex items-center gap-2 text-lg font-semibold'>
          <span>
            <IoCheckboxOutline className='text-xl' />
          </span>
          Select All
        </p>
        <Button
          variant='danger'
          className='px-4 py-3'
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export { ActionCarts };
