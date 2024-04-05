import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
  Select as RadixSelect,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { bool, func, object } from "prop-types";
import { Switch } from "@/components/ui/switch";
import { LuLoader2 } from "react-icons/lu";
import { productCreateFormSchema } from "../form/product-create-schema";
import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { variants } from "@/lib";

const ProductCreateForm = ({ handleSubmit, isPending, categories }) => {
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const form = useForm({
    resolver: zodResolver(productCreateFormSchema),
    defaultValues: {
      title: "",
      category_id: "",
      price: "",
      stock: "",
      description: "",
      status: false,
      thumbnail: undefined,
      color: [],
      size: [],
    },
  });

  const animatedComponents = makeAnimated();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-7"
        encType="multipart/form-data"
      >
        {/* product name */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Title</FormLabel>
              <FormControl>
                <Input
                  variant="rawrr"
                  placeholder="Masukkan Product title..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* price */}
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  variant="rawrr"
                  placeholder="Masukkan price..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* stock */}
        <FormField
          control={form.control}
          name="stock"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Stock</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  variant="rawrr"
                  inputMode="numeric"
                  placeholder="Masukkan stock..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* variant */}
        <div className="flex flex-col gap-y-7 md:flex-row md:gap-x-5 ">
          {/* color */}
          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem className="md:w-full">
                <FormLabel>Color</FormLabel>
                <FormControl>
                  <Select
                    isMulti
                    options={variants.color}
                    components={animatedComponents}
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
                    value={variants.color.filter((option) =>
                      selectedColors.includes(option.value)
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* size */}
          <FormField
            control={form.control}
            name="size"
            render={({ field }) => (
              <FormItem className="md:w-full">
                <FormLabel>size</FormLabel>
                <FormControl>
                  <Select
                    isMulti
                    components={animatedComponents}
                    options={variants.size}
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
                    value={variants.size.filter((option) =>
                      selectedSizes.includes(option.value)
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* category */}
        <FormField
          control={form.control}
          name="category_id"
          render={({ field }) => (
            <FormItem ref={field.ref}>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <RadixSelect
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="shadow-intervaless-button">
                    <SelectValue placeholder="pilih category" />
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
              <FormMessage />
            </FormItem>
          )}
        />

        {/* description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  variant="rawrr"
                  placeholder="Masukkan description..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* status */}
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <>
              {/* {console.log(field)} */}
              <FormItem className="space-y-0 flex flex-col gap-3">
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <Switch
                    checked={Boolean(field.value)}
                    onCheckedChange={field.onChange}
                    aria-readonly
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />

        {/* thumbnail */}
        <FormField
          control={form.control}
          name="thumbnail"
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>Thumbnail</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    variant="rawrr"
                    onBlur={field.onBlur}
                    name={field.name}
                    ref={field.ref}
                    onChange={(e) => {
                      field.onChange(e.target.files);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />

        {/* action submit and discard */}
        <div className="flex gap-5">
          <Button
            type="button"
            variant="danger"
            className="w-full"
            onClick={() =>
              form.reset({
                size: setSelectedSizes(""),
                color: setSelectedColors(""),
              })
            }
          >
            Discard
          </Button>
          {isPending ? (
            <Button
              disabled
              type="button"
              variant="warning"
              className="w-full flex gap-1 items-center"
            >
              <LuLoader2 className="text-xl animate-spin" />
              loading....
            </Button>
          ) : (
            <Button
              type="submit"
              variant="warning"
              className="w-full"
            >
              Create
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
};

ProductCreateForm.propTypes = {
  handleSubmit: func,
  isPending: bool,
  categories: object,
};

export { ProductCreateForm };
