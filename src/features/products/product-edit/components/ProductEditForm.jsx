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
  Select as RadixSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "@/components/ui";
import { variants } from "@/libs";
import { zodResolver } from "@hookform/resolvers/zod";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Switch } from "@/components/ui/switch";
import { bool, func, object } from "prop-types";
import { productEditSchema } from "../form/product-edit-schema";
import { LuLoader2 } from "react-icons/lu";
import { Link } from "react-router-dom";

const ProductEditForm = ({
  categories,
  onSubmit,
  product,
  errorMutationInProduct,
  isPendingInMutationProduct,
}) => {
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const form = useForm({
    resolver: zodResolver(productEditSchema),
    defaultValues: {
      title: product?.data.title,
      price: product?.data.price,
      stock: product?.data.stock,
      color: product?.data?.variant?.color || null,
      size: product?.data?.variant?.size || null,
      category_id: product?.data.category_id.toString(),
      description: product?.data.description,
      status: product?.data.status ? true : false,
    },
  });

  // console.log(form.formState.defaultValues.color);
  const animatedComponents = makeAnimated();
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-7'
        encType='multipart/form-data'
      >
        {/* title */}
        <FormField
          name='title'
          control={form.control}
          defaultValue={form.formState.defaultValues.title}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Title</FormLabel>
              <FormControl>
                <Input
                  variant='rawrr'
                  placeholder='Masukkan title...'
                  {...field}
                  required
                />
              </FormControl>
              {errorMutationInProduct?.errors && (
                <FormDescription className='text-red-500'>
                  {errorMutationInProduct?.errors.title}
                </FormDescription>
              )}

              <FormMessage />
            </FormItem>
          )}
        />

        {/* price */}
        <FormField
          name='price'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input
                  variant='rawrr'
                  type='number'
                  placeholder='Masukkan price...'
                  required
                  {...field}
                />
              </FormControl>
              {errorMutationInProduct?.errors && (
                <FormDescription className='text-red-500'>
                  {errorMutationInProduct?.errors.price}
                </FormDescription>
              )}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* stock */}
        <FormField
          name='stock'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Stock</FormLabel>
              <FormControl>
                <Input
                  type='number'
                  variant='rawrr'
                  placeholder='Masukkan stock...'
                  {...field}
                  required
                />
              </FormControl>
              {errorMutationInProduct?.errors && (
                <FormDescription className='text-red-500'>
                  {errorMutationInProduct?.errors.stock}
                </FormDescription>
              )}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* variant */}
        <div className='flex flex-col gap-y-7 md:flex-row md:gap-x-5 '>
          {/* color */}
          <FormField
            control={form.control}
            name='color'
            render={({ field }) => (
              <FormItem className='md:w-full'>
                <FormLabel>Color</FormLabel>
                <FormControl>
                  <Select
                    isMulti
                    options={variants.color}
                    components={animatedComponents}
                    required
                    className={`shadow-intervaless-button rounded-lg text-sm ${
                      selectedColors.length >= 1 &&
                      "shadow-intervaless-button-active"
                    }
                    `}
                    onChange={(selectedOptions) => {
                      setSelectedColors(
                        selectedOptions.map((option) => option.value)
                      );
                      field.onChange(
                        selectedOptions.map((option) => option.value)
                      );
                    }}
                    value={
                      field.value &&
                      field.value.map((value) => ({
                        label: value,
                        value: value,
                      }))
                    }
                    defaultValue={{ label: field.value, value: field.value }}
                  />
                </FormControl>
                {errorMutationInProduct?.errors && (
                  <FormDescription className='text-red-500'>
                    {errorMutationInProduct?.errors["variant.color"]}
                  </FormDescription>
                )}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* size */}
          <FormField
            control={form.control}
            name='size'
            render={({ field }) => (
              <FormItem className='md:w-full'>
                <FormLabel>size</FormLabel>
                <FormControl>
                  <Select
                    isMulti
                    components={animatedComponents}
                    options={variants.size}
                    required
                    className={`shadow-intervaless-button rounded-lg text-sm ${
                      selectedSizes.length >= 1 &&
                      "shadow-intervaless-button-active"
                    }
                    `}
                    onChange={(selectedOptions) => {
                      setSelectedSizes(
                        selectedOptions.map((option) => option.value)
                      );
                      field.onChange(
                        selectedOptions.map((option) => option.value)
                      );
                    }}
                    value={
                      field.value &&
                      field.value.map((value) => ({
                        label: value,
                        value: value,
                      }))
                    }
                    defaultValue={{ label: field.value, value: field.value }}
                  />
                </FormControl>
                {errorMutationInProduct?.errors && (
                  <FormDescription className='text-red-500'>
                    {errorMutationInProduct?.errors["variant.size"]}
                  </FormDescription>
                )}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* category */}
        <FormField
          control={form.control}
          name='category_id'
          render={({ field }) => (
            <FormItem ref={field.ref}>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <RadixSelect
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  required
                >
                  <SelectTrigger className='shadow-intervaless-button'>
                    <SelectValue placeholder='pilih category' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Pilih Category</SelectLabel>
                      {categories?.data.map((category) => (
                        <SelectItem
                          key={category.id}
                          value={category.id.toString()}
                        >
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </RadixSelect>
              </FormControl>
              {errorMutationInProduct?.errors && (
                <FormDescription className='text-red-500'>
                  {errorMutationInProduct?.errors.category_id}
                </FormDescription>
              )}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* description */}
        <FormField
          name='description'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  variant='rawrr'
                  placeholder='Masukkan description...'
                  {...field}
                  required
                />
              </FormControl>
              {errorMutationInProduct?.errors && (
                <FormDescription className='text-red-500'>
                  {errorMutationInProduct?.errors.description}
                </FormDescription>
              )}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* status */}
        <FormField
          name='status'
          control={form.control}
          render={({ field }) => (
            <FormItem className='flex space-y-0 flex-col gap-4'>
              <FormLabel>Status</FormLabel>
              <FormControl>
                <Switch
                  checked={Boolean(field.value)}
                  onCheckedChange={field.onChange}
                  aria-readonly
                />
              </FormControl>
              {errorMutationInProduct?.errors ? (
                <FormDescription className='text-red-500'>
                  {errorMutationInProduct?.errors.status}
                </FormDescription>
              ) : (
                <FormDescription>
                  {field.value ? "aktif" : "tidak aktif"}
                </FormDescription>
              )}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* action submit and discard */}
        <div className='flex gap-5'>
          <Link
            to={"/admin/product"}
            className='w-full'
          >
            <Button
              type='button'
              variant='secondary'
              className='w-full'
            >
              Cancel
            </Button>
          </Link>
          {isPendingInMutationProduct ? (
            <Button
              disabled
              type='button'
              variant='warning'
              className='w-full flex gap-1 items-center'
            >
              <LuLoader2 className='text-xl animate-spin' />
              loading....
            </Button>
          ) : (
            <Button
              type='submit'
              variant='warning'
              className='w-full'
            >
              Edit
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
};

ProductEditForm.propTypes = {
  categories: object,
  onSubmit: func,
  errorMutationInProduct: object,
  isPendingInMutationProduct: bool,
  product: object,
};

export { ProductEditForm };
