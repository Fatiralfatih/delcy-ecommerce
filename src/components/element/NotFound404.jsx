import { Card, CardContent } from "@/components/ui";
import { useAuthenticated } from "@/contexts";
import { any } from "prop-types";
import { Link } from "react-router-dom";

const NotFound404 = ({ error }) => {
  const { authedUser } = useAuthenticated();

  return (
    <div className='flex min-h-[60vh] justify-center items-center lg:min-h-[80vh]'>
      <Card className='px-[20px] md:px-[30px] border-0 bg-opacity-0'>
        <CardContent className=' bg-violet-500/50 rounded-lg shadow-intervaless-button  py-[100px] px-[30px] md:px-[150px]'>
          <div className='flex items-center justify-between gap-10'>
            <div className='flex-grow'>
              <h1 className='text-5xl sm:text-9xl'>404</h1>
            </div>
            <div className='flex flex-col gap-5'>
              <h1 className='text-xl sm:text-3xl'>
                {error || "can`t find page"} :)
              </h1>
              {!authedUser ? (
                <Link to={"/"}>
                  <p className='text-xl link-underline w-fit link-underline-black'>
                    Login
                  </p>
                </Link>
              ) : (
                <Link to={"/"}>
                  <p className='text-xl link-underline w-fit link-underline-black'>
                    Delcy
                  </p>
                </Link>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

NotFound404.propTypes = {
  error: any,
};

export { NotFound404 };
