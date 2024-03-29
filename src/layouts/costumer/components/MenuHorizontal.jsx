import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaRegHeart,
} from "react-icons/fa6";
import { Card, CardContent } from "@/components/ui/card";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { PiMapPin } from "react-icons/pi";
import { useMediaQuery } from "@/hooks";
import { Profile } from "@/components/element";

const MenuHorizontal = () => {
  const isDekstop = useMediaQuery("(min-width: 768px)");

  return (
    !isDekstop && (
      <Drawer direction="left">
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            className="border-0 hover:text-indigo-500"
            name="hambuger"
          >
            <RxHamburgerMenu className="text-2xl" />
          </Button>
        </DrawerTrigger>

        <DrawerContent className="h-screen fixed top-0 bottom-0 sm:top-5 overflow-auto max-w-sm sm:max-w-lg">
          {/**Header */}
          <div className="flex mt-4 px-3 items-center gap-2">
            <DrawerClose asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-none"
                name="close-menu"
              >
                <IoMdClose className="text-2xl text-gray-600" />
              </Button>
            </DrawerClose>
            <h1 className="font-black text-lg">Menu Utama</h1>
          </div>

          {/**Profil */}
          <Profile />

          {/** social media */}
          <div className="flex flex-col w-fit gap-4 mt-10 px-4">
            <Link
              to="https://www.instagram.com/fatiralfatihh/"
              target="_blank"
              className="flex gap-5 items-center"
            >
              <Button
                size="icon"
                variant="instagram"
                name="instagram"
              >
                <FaInstagram className="text-2xl text-white" />
              </Button>
              <p className="font-semibold mt-2 max-w-[13rem] line-clamp-1 cursor-pointer link-underline link-underline-black sm:max-w-[20rem]">
                Fatir Al Fatih panjang banget banget bangetbangetbangetbanget
              </p>
            </Link>
            <Link
              to="https://www.facebook.com/fatir.alfatih.144/"
              target="_blank"
              className="flex gap-5 items-center"
            >
              <Button
                size="icon"
                variant="facebook"
                name="facebook"
              >
                <FaFacebook className="text-2xl text-white" />
              </Button>
              <p className="font-semibold mt-2 max-w-[13rem] line-clamp-1 cursor-pointer link-underline link-underline-black sm:max-w-[20rem]">
                Fatir Al Fatih panjang banget banget bangetbangetbangetbanget
              </p>
            </Link>
            <Link
              to="https://github.com/Fatiralfatih"
              target="_blank"
              className="flex gap-5 items-center"
            >
              <Button
                size="icon"
                name="github"
                className="hover:text-white hover:bg-zinc-950/80"
              >
                <FaGithub className="text-2xl " />
              </Button>
              <p className="font-semibold mt-2 max-w-[13rem] line-clamp-1 cursor-pointer link-underline link-underline-black sm:max-w-[20rem]">
                Fatir Al Fatih panjang banget banget bangetbangetbangetbanget
              </p>
            </Link>
          </div>

          {/** List order */}
          <Card className="mt-10 max-w-[350px] sm:max-w-lg mx-4 shadow-lg">
            <CardContent className="pt-4 pb-5 space-y-5">
              <Button
                className="w-full flex justify-between px-4"
                variant="secondary"
              >
                <p className="flex items-center gap-3 ">
                  <span>
                    <FaRegHeart className="text-xl" />
                  </span>
                  Whislist
                </p>
                <FaArrowRight className="text-lg" />
              </Button>
              <Button
                className="w-full flex justify-between px-4"
                variant="secondary"
              >
                <p className="flex items-center gap-2 ">
                  <span>
                    <MdOutlineStickyNote2 className="text-2xl" />
                  </span>
                  Daftar Pesanan
                </p>
                <FaArrowRight className="text-lg" />
              </Button>

              <Button
                className="w-full flex justify-between px-4"
                variant="secondary"
              >
                <p className="flex items-center gap-2 ">
                  <span>
                    <PiMapPin className="text-2xl" />
                  </span>
                  Daftar Alamat
                </p>
                <FaArrowRight className="text-lg" />
              </Button>
            </CardContent>
          </Card>

          {/** authentication */}
          <DrawerFooter className="mt-[80px]  w-full sm:mt-[120px]">
            <Button variant="warning">Login</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  );
};

export { MenuHorizontal };
