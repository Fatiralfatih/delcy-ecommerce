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
} from "@/components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { bool, func } from "prop-types";
import { Switch } from "@/components/ui/switch";
import { LuLoader2 } from "react-icons/lu";
import { variant } from "@/lib";
import { productCreateFormSchema } from "../form/product-create-schema";
import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const ProductCreateForm = ({ handleSubmit, isPending }) => {
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const colorOptions = variant.color.map((color) => ({
    value: color,
    label: color,
  }));

  const sizeOptions = variant.size.map((size) => ({
    value: size,
    label: size,
  }));

  const form = useForm({
    resolver: zodResolver(productCreateFormSchema),
    defaultValues: {
      title: "",
      category: "",
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

        {/* category */}
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input
                  variant="rawrr"
                  placeholder="Masukkan category..."
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

        {/* variant */}
        <div className="flex flex-col gap-y-7 md:flex-row md:gap-x-5 md:items-center">
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
                    options={colorOptions}
                    components={animatedComponents}
                    className={`shadow-intervaless-button rounded-lg ${
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
                    value={colorOptions.filter((option) =>
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
                    options={sizeOptions}
                    className={`shadow-intervaless-button rounded-lg ${
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
                    value={sizeOptions.filter((option) =>
                      selectedSizes.includes(option.value)
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
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
                  placeholder="Masukkan stock..."
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
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
};

export { ProductCreateForm };
