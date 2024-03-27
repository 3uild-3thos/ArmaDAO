"use client";
import { useState } from "react";

// components
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface IFilterButtonProps {
  title: string;
  callback?: () => void;
}

function FilterButton({ title, callback = () => {} }: IFilterButtonProps) {
  const [up, setUp] = useState(true);

  const onToggle = () => {
    callback();
    setUp((state) => !state);
  };

  return (
    <Button
      variant={"outline"}
      className="rounded-full flex gap-2 items-center"
      onClick={onToggle}
    >
      <p className="font-medium text-sm">{title}</p>
      {up ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
    </Button>
  );
}

export default FilterButton;
