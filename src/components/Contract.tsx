"use client";

import { Button } from "@/components/ui/button";
import { ClipboardCopy } from "lucide-react";
import { toast } from "sonner";

export const Contract = () => {
  const contractAddress: string =
    "BdTEJq3yEp68SNmeBfqBbDDy7nbSGftkDhDkVef6pump";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      toast("Contract copied to clipboard!");
    } catch {
      toast("Failed to copy to clipboard!");
    }
  };

  return (
    <Button
      variant="outline"
      className="py-8 sm:py-6 font-mono   cursor-pointer transition-transform hover:scale-102 active:scale-98 whitespace-normal break-all"
      onClick={copyToClipboard}
    >
      <ClipboardCopy className="mr-1 sm:mr-4 size-6 shrink-0" />
      <span className="text-sm">{contractAddress}</span>
    </Button>
  );
};
