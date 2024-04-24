import { AxiosError } from "axios";
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const formatRupiah = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(price);
};

export const handleValidationErrors = (error) => {
  if (error instanceof AxiosError) {
    const err = error;
    return err.response.data;
  }
};

export const removeDuplicateArray = (data) => {
  return [...new Set(data)];
};