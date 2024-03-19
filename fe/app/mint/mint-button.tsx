import React from "react";
import Link from "next/link";

// lib
import { PATH } from "@/lib/routes";

// components
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

function MintButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} size={"lg"} className="min-w-full">
          Mint NFT
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex flex-col items-center gap-5 text-center">
          <Image
            src={"https://placehold.co/200x200"}
            alt={"DAO Banner"}
            width={200}
            height={200}
            className="max-h-[40rem] rounded-2xl object-cover shadow-2xl"
          />
          <p className="text-xl font-semibold">Thank you for minting</p>
          <p className="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo sit
            unde in quos excepturi, eos deleniti! Voluptate cumque odit
            asperiores
          </p>
          <Link href={PATH.fleetCreate}>
            <Button variant={"outline"}>Create your Fleet</Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default MintButton;
