import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  useToast,
} from "@/components/ui";
import { Link, useNavigate } from "react-router-dom";
import { MenuHorizontal } from ".";
import { useAuthenticated } from "@/contexts";
import { LuLogOut } from "react-icons/lu";
import { AxiosError } from "axios";
import { useMutationLogout } from "@/features/auth/logout/hooks/useMutationLogout";

const Navbar = () => {
  const { authedUser, removeAuthedUser } = useAuthenticated();

  const navigate = useNavigate();

  const { toast } = useToast();

  const { mutate } = useMutationLogout({
    authedUser,
    onSuccess: (data) => {
      if (data.status === "success") {
        removeAuthedUser();
        toast({
          title: "berhasil logout",
        });
        navigate("/login");
      }
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast({
          title: "gagal logout",
        });
        navigate("/");
      }
    },
  });

  return (
    <header>
      <nav className='fixed top-0 left-0 z-10 right-0 py-5 bg-white'>
        <div className=' flex justify-between gap-1 items-center container sm:gap-8 lg:gap-44 '>
          <Link
            to={"/"}
            className='bg-white'
          >
            <h1 className='hidden sm:block sm:text-2xl font-black lg:text-3xl'>
              Delcy.
              <span className='text-fuchsia-500'>GG</span>
            </h1>
          </Link>

          {/** Menu web */}
          <Input
            name='search'
            type='search'
            aria-label='input-search'
            className='w-full border-2 max-w-3xl'
            placeholder='Cari di Delcy.....'
          />
          <div className='flex justify-center gap-1 items-center'>
            <Link to={"/cart"}>
              <Button
                variant='outline'
                className='border-0 hover:text-indigo-500'
              >
                <AiOutlineShoppingCart className='text-2xl' />
              </Button>
            </Link>

            <Button
              variant='outline'
              className='border-0 hidden hover:text-indigo-500 sm:flex'
              name='whislist'
            >
              <FaRegHeart className='text-2xl  ' />
            </Button>

            {authedUser ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant='primary'
                    size='sm'
                    className='text-sm hidden md:flex'
                  >
                    Log Out
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-40'>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => mutate()}>
                    <LuLogOut className='mr-2 h-4 w-4' />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                to={"/login"}
                className='min-w-[140px] hidden md:block'
              >
                <Button className=' px-10 py-5 bg-white text-zinc-900 '>
                  Login
                </Button>
              </Link>
            )}

            {/** Menu Mobile */}
            <div className='md:hidden'>
              <MenuHorizontal />
            </div>
            {/** End Menu Mobile */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export { Navbar };
