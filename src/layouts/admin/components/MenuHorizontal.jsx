import { Profile } from "@/components/element";
import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui";
import { useMediaQuery } from "@/hooks";
import { CgCreditCard } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { LuUsers } from "react-icons/lu";
import { RiBox3Line, RiDashboardLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

export const MenuHorizontal = () => {
  const isDekstop = useMediaQuery("(min-width: 768px)");

  return (
    !isDekstop && (
      <Drawer direction={"left"}>
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            className="border-0 hover:text-indigo-500"
            name="hambuger"
          >
            <RxHamburgerMenu className="text-2xl" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="max-w-md h-screen fixed top-0">
          {/* header */}
          <div className="flex mt-4 px-3 items-center gap-2">
            <DrawerClose asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-none"
                name="close-menu-admin"
              >
                <IoMdClose className="text-2xl text-gray-600" />
              </Button>
            </DrawerClose>
            <h1 className="font-black text-lg">Menu Admin</h1>
          </div>

          {/* profile */}
          <Profile className="mt-6" />

          {/* menu list */}
          <div className="mt-10 px-4 space-y-1">
            <h1 className="font-light">Main Menu</h1>
            <div className="space-y-4">
              <Button
                variant="secondary"
                className="w-full justify-start text-[15px] gap-3"
              >
                <span>
                  <RiDashboardLine className="text-lg" />
                </span>
                Dashboard
              </Button>
              <Button
                variant="secondary"
                className="w-full justify-start text-[15px] gap-3"
              >
                <span>
                  <RiBox3Line className="text-xl" />
                </span>
                Products
              </Button>
              <Button
                variant="secondary"
                className="w-full justify-start text-[15px] gap-3"
              >
                <span>
                  <CgCreditCard className="text-lg" />
                </span>
                Purchase
              </Button>
              <Button
                variant="secondary"
                className="w-full justify-start text-[15px] gap-3"
              >
                <span>
                  <LuUsers className="text-lg" />
                </span>
                Costumer
              </Button>
            </div>
          </div>

          <DrawerFooter>
            <Button variant="warning">Logout</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  );
};
