import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { bool, func, object } from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LuEye, LuEyeOff, LuLoader2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import { registerSchema } from "../form";

const RegisterForm = ({ onSubmit, error, isPending }) => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      name: "",
      email: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name='username'
          render={({ field }) => (
            <FormItem className='py-3 space-y-2'>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  autoFocus
                  variant='rawrr'
                  placeholder='Masukkan username...'
                  {...field}
                />
              </FormControl>
              {error?.errors?.username && (
                <FormDescription className='pt-1 text-red-500'>
                  {error?.errors?.username}
                </FormDescription>
              )}
              <FormMessage className='pt-1' />
            </FormItem>
          )}
        />

        <FormField
          name='name'
          render={({ field }) => (
            <FormItem className='py-3 space-y-2'>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  variant='rawrr'
                  placeholder='Masukkan name...'
                  {...field}
                />
              </FormControl>
              {error?.errors?.name && (
                <FormDescription className='pt-1 text-red-500'>
                  {error?.errors?.name}
                </FormDescription>
              )}
              <FormMessage className='pt-1' />
            </FormItem>
          )}
        />

        <FormField
          name='email'
          render={({ field }) => (
            <FormItem className='py-3 space-y-2'>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type='email'
                  variant='rawrr'
                  placeholder='Masukkan email'
                  {...field}
                />
              </FormControl>
              {error?.errors?.email && (
                <FormDescription className='pt-1 text-red-500'>
                  {error?.errors?.email}
                </FormDescription>
              )}
              <FormMessage className='pt-1' />
            </FormItem>
          )}
        />

        <FormField
          name='password'
          render={({ field }) => (
            <FormItem className='py-3 space-y-2'>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  variant='rawrr'
                  type={showPassword ? "text" : "password"}
                  placeholder='Masukkan password...'
                  {...field}
                >
                  <div onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <LuEyeOff className='absolute text-xl right-3 opacity-60 cursor-pointer top-[10px] md:text-2xl md:top-[8px]' />
                    ) : (
                      <LuEye className='absolute text-xl right-3 opacity-60 cursor-pointer top-[10px] md:text-2xl md:top-[8px]' />
                    )}
                  </div>
                </Input>
              </FormControl>
              {error?.errors?.password && (
                <FormDescription className='pt-1 text-red-500'>
                  {error?.errors?.password}
                </FormDescription>
              )}
              <FormMessage className='max-w-xs pt-1' />
            </FormItem>
          )}
        />

        <div className='flex items-center gap-1 pt-5 pb-2'>
          <p className='text-sm'>Already have an account?</p>
          <Link
            to='/'
            className='text-sm font-semibold text-blue-700'
          >
            Sign In
          </Link>
        </div>

        <div className='pt-1'>
          {isPending ? (
            <Button
              disabled
              type='button'
              name='loading'
              variant='primary'
              className='flex items-center w-full gap-1'
            >
              <LuLoader2 className='text-xl animate-spin' />
              loading....
            </Button>
          ) : (
            <Button
              type='submit'
              name='register'
              variant='primary'
              className='w-full'
            >
              Register
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
};

RegisterForm.propTypes = {
  onSubmit: func,
  error: object,
  isPending: bool,
};

export { RegisterForm };
