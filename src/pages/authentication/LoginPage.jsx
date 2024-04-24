import { Footer } from "@/components/element";
import { Card, CardContent, CardHeader, useToast } from "@/components/ui";
import { useAuthenticated } from "@/contexts";
import { LoginForm } from "@/features/auth/login/components";
import { useMutationLogin } from "@/features/auth/login/hooks/useMutationLogin";
import { handleValidationErrors } from "@/libs";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { addAuthedUser, removeAuthedUser } = useAuthenticated();

  const navigate = useNavigate();

  const { toast } = useToast();

  const { mutate, isPending, error } = useMutationLogin({
    onSuccess: (data) => {
      if (data.status === "success") {
        toast({
          title: "berhasil login",
        });
        addAuthedUser({
          token: data.data.token,
          username: data.data.username,
        });
        navigate("/");
      }
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        removeAuthedUser();
        toast({
          title: "login failed",
          variant: "destructive",
        });
      }
    },
  });

  return (
    <>
      <section className='min-h-screen flex justify-center items-center bg-zinc-100 sm:px-24 lg:px-64 xl:px-[30rem]'>
        <Card className='sm:w-full'>
          <CardHeader>
            <h1 className='font-semibold text-2xl font-sans text-center lg:text-3xl'>
              Sign in your Delcy account
            </h1>
          </CardHeader>
          <CardContent className='px-6 pb-8'>
            <LoginForm
              onSubmit={mutate}
              error={handleValidationErrors(error)}
              isPending={isPending}
            />
          </CardContent>
        </Card>
      </section>
      <Footer />
    </>
  );
};

export { LoginPage };
