import { cn } from "@/lib";
import { Avatar, AvatarFallback, AvatarImage, Button } from "../ui";
import { string } from "prop-types";

const Profile = ({ className }) => {
  return (
    <>
      <div className={cn("flex gap-3 mt-8 px-4 items-center", className)}>
        <Avatar className="w-16 h-16">
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/137702546?v=4"
            alt="fatir-ganteng"
          />
          <AvatarFallback>profil image</AvatarFallback>
        </Avatar>
        <div className="mb-2">
          <h2 className="font-bold text-xl max-w-[13rem] line-clamp-1 sm:max-w-[21rem]">
            Fatir Al Fatih Fatir Al FatihFatir Al FatihFatir Al FatihFatir Al
            Fatih
          </h2>
          <p className="max-w-[13rem] line-clamp-1 sm:max-w-[13rem]">
            fatiralfatih@gmail.com
          </p>
        </div>
      </div>
      <div className="mt-4 px-4">
        <Button
          className="w-full"
          variant="primary"
          name="edit-profil"
        >
          Edit Profil
        </Button>
      </div>
    </>
  );
};
Profile.propTypes = {
  className: string,
};

export { Profile };
