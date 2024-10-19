import { clsx, type ClassValue } from "clsx";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const toastMessage = (msg: string) => {
  toast(msg || "Something went wrong", {
    action: {
      label: "Close",
      onClick: () => {},
    },
  });
};
