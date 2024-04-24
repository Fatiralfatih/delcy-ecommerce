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
import { useForm } from "react-hook-form";
import { LuEye, LuEyeOff, LuLoader2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import { loginSchema } from "../form";
import { bool, func, object } from "prop-types";
import { useState } from "react";

const LoginForm = ({ onSubmit, error, isPending }) => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* username */}
        <FormField
          name='username'
          render={({ field }) => (
            <FormItem className='space-y-2 py-3'>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  variant='rawrr'
                  placeholder='Masukkan username...'
                  required
                  autoFocus
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

        {/* password */}
        <FormField
          name='password'
          render={({ field }) => (
            <FormItem className='space-y-2 py-3'>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  variant='rawrr'
                  type={showPassword ? "text" : "password"}
                  required
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
              <FormMessage className='pt-1' />
            </FormItem>
          )}
        />

        <div className='flex items-center pt-5 pb-2 gap-1'>
          <p className='text-sm'>Don`t have an account?</p>
          <Link
            to='/register'
            className='text-sm text-blue-700 font-semibold'
          >
            Sign Up
          </Link>
        </div>

        <div className='pt-1'>
          {isPending ? (
            <Button
              disabled
              type='button'
              name='loading'
              variant='primary'
              className='w-full flex gap-1 items-center'
            >
              <LuLoader2 className='text-xl animate-spin' />
              loading....
            </Button>
          ) : (
            <Button
              type='submit'
              variant='primary'
              className='w-full'
            >
              login
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
};

LoginForm.propTypes = {
  onSubmit: func,
  error: object,
  isPending: bool,
};

export { LoginForm };
