import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MenuHorizontal } from "@/layouts/admin/components";
import { RiBox3Line, RiDashboardLine } from "react-icons/ri";
import { CgCreditCard } from "react-icons/cg";
import { LuUserCircle, LuUsers } from "react-icons/lu";
import { IoMdLogOut } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 mt-3 px-2 md:px-4 lg:px-5 xl:px-10 ">
      <div className="flex justify-between items-center py-4 px-5 rounded-full md:px-8 md:py-0">
        <h1 className="text-xl font-black md:text-2xl lg:text-3xl">Delcy</h1>
        {/* Menu Link */}
        <ul className="text-[16px] hidden md:flex md:gap-4 xl:gap-8">
          <li className="relative flex items-center group gap-[5px] cursor-pointer text-[15px] md:py-7 lg:py-8 lg:text-xl lg:gap-2">
            <span>
              <RiDashboardLine className="text-lg mb-[1px] lg:text-2xl" />
            </span>
            Dashboard
            <div className="w-full h-1 absolute bottom-0 rounded-full group-hover:bg-zinc-800 transition-all duration-200 ease-in-out" />
          </li>
          <li className="relative flex items-center group gap-[5px] cursor-pointer text-[15px] md:py-7 lg:py-8 lg:text-xl lg:gap-2">
            <span>
              <RiBox3Line className="text-lg mb-[1px] lg:text-2xl" />
            </span>
            Products
            <div className="w-full h-1 absolute bottom-0 rounded-full group-hover:bg-zinc-800 transition-all duration-200 ease-in-out" />
          </li>
          <li className="relative flex items-center group gap-[5px] cursor-pointer text-[15px] md:py-7 lg:py-8 lg:text-xl lg:gap-2">
            <span>
              <CgCreditCard className="text-lg mb-[1px] lg:text-2xl" />
            </span>
            Purchase
            <div className="w-full h-1 absolute bottom-0 rounded-full group-hover:bg-zinc-800 transition-all duration-200 ease-in-out" />
          </li>
          <li className="relative flex items-center group gap-[5px] cursor-pointer text-[15px] md:py-7 lg:py-8 lg:text-xl lg:gap-2">
            <span>
              <LuUsers className="text-lg mb-[1px] lg:text-2xl" />
            </span>
            Costumer
            <div className="w-full h-1 absolute bottom-0 rounded-full group-hover:bg-zinc-800 transition-all duration-200 ease-in-out" />
          </li>
        </ul>

        {/* profil navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="space-x-4 py-2 px-3">
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage
                      src="https://avatars.githubusercontent.com/u/137702546?v=4"
                      alt="fatir-ganteng"
                    />
                    <AvatarFallback>profile image</AvatarFallback>
                  </Avatar>
                  <p className="text-sm md:hidden lg:block">Fatir Al Fatih</p>
                </div>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-full divide-y-2">
                  <li className="py-2 ps-2 text-sm flex items-center gap-2 pe-9 hover:bg-zinc-100 cursor-pointer lg:ps-3 lg:pe-20">
                    <span>
                      <LuUserCircle className="text-xl " />
                    </span>
                    Profile
                  </li>
                  <li className="py-2 ps-2 text-sm flex items-center gap-2 text-red-500 hover:bg-zinc-100 cursor-pointer lg:ps-3 lg:pe-20">
                    <span>
                      <IoMdLogOut className="text-xl" />
                    </span>
                    Logout
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* menu hamburger mobile */}
        <div className="md:hidden">
          <MenuHorizontal />
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
