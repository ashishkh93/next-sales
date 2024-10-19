"use client";

import * as React from "react";
import { CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface SingleParty {
  value: string;
  label: string;
}

interface ComboboxDemoProps {
  setSingleParty: React.Dispatch<React.SetStateAction<string>>;
  singleParty: string;
}

const default_parties = [
  { value: "John Doe - P-JOHN", label: "John Doe - P-JOHN" },
  { value: "Jane Smith - P-JANE", label: "Jane Smith - P-JANE" },
];

export function ComboboxDemo({
  setSingleParty,
  singleParty,
}: ComboboxDemoProps) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [parties, setParties] = React.useState<SingleParty[]>(default_parties);

  const fetchParties = async (search: string) => {
    if (search) {
      const response = await fetch(`/api/parties?search=${search}`);
      const result = (await response.json()) as { entity: Party[] };
      const data = result?.entity;
      const reducesParties = data?.map((item: Party) => ({
        value: `${item.name} - ${item.code}`,
        label: `${item.name} - ${item.code}`,
      }));

      setParties(reducesParties);
    } else {
      setParties(default_parties);
    }
  };

  const debounceCall = (func: (value: string) => void, delay: number) => {
    let timer: NodeJS.Timeout;
    return (value: string) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(value);
      }, delay);
    };
  };

  const debouncedFetchParties = debounceCall(fetchParties, 500);

  const handleSearch = (value: string) => {
    debouncedFetchParties(value);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between rounded-r-none"
        >
          <div className="text-[#9ca3af]">
            {singleParty
              ? parties?.find((party) => party.value === singleParty)?.label
              : "Select party..."}
          </div>
          {/* <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" /> */}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="!w-[100] p-0">
        <Command>
          <CommandInput
            placeholder="Search Party..."
            className="h-9"
            onValueChange={handleSearch}
          />
          <CommandList>
            <CommandEmpty>No Party found.</CommandEmpty>
            <CommandGroup>
              {parties?.map((party) => (
                <CommandItem
                  key={party.value}
                  value={party.value}
                  onSelect={(currentValue: string) => {
                    setSingleParty(
                      currentValue === singleParty ? "" : currentValue
                    );
                    setOpen(false);
                  }}
                >
                  {party.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      singleParty === party.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
