import { Footer } from "@/components/element";
import { Card, CardContent, CardHeader, useToast } from "@/components/ui";
import { RegisterForm } from "@/features/auth/register/components";
import { useMutationRegister } from "@/features/auth/register/hooks";
import { handleValidationErrors } from "@/libs";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const { mutate, error, isPending } = useMutationRegister({
    onSuccess: (data) => {
      if (data.status === "success") {
        toast({
          title: "registrasi berhasil",
        });
        navigate("/login");
      }
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const err = error;
        toast({
          title: err.response?.data.message,
          description: "check again input",
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
              Sign Up your Delcy account
            </h1>
          </CardHeader>
          <CardContent className='px-6 pb-8'>
            <RegisterForm
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

export { RegisterPage };
