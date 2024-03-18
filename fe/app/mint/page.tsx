import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRightToLine } from "lucide-react";
import shortenAddress from "@/lib/helpers/shortenAddress";

function Mint() {
  return (
    <div className="flex flex-col gap-10">
      <p className="text-xl font-bold">Armada NFT</p>
      <div className="grid grid-cols-2 gap-10">
        <div className="flex justify-center">
          <Image
            src={"https://placehold.co/500x1920"}
            alt={"DAO Banner"}
            width={500}
            height={1920}
            className="max-h-[40rem] rounded-2xl object-cover shadow-2xl"
          />
        </div>

        <div className="flex items-center justify-center">
          <Card className="min-w-[40rem] p-2">
            <CardContent>
              <Card>
                <CardContent className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <p>Mint Stages</p>
                    <Countdown />
                  </div>
                  <p className="text-sm text-gray-500">
                    MAX 1 TOKEN | Free Mint
                  </p>
                </CardContent>
              </Card>

              <div className="p-3 flex flex-col gap-8">
                <div className="text-green-500 text-2xl">Live</div>
                <div className="flex flex-col">
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="text-xl font-semibold">Free</p>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm">
                    Email Address{" "}
                    <span className="text-gray-500">(Optional)</span>
                  </p>
                  <Input className="col-span-3" name="title" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{" "}
                    <span className="underline font-medium">
                      General Terms of Service
                    </span>
                  </label>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant={"outline"} size={"lg"} className="min-w-full">
                Private Mint
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xl font-bold">Overview</p>

          <div className="flex flex-col gap-3">
            <p>Armada NFT</p>

            <div className="flex items-center gap-1">
              <p className="text-sm text-gray-500">
                Contract{" "}
                {shortenAddress("EzhM1Anf8sNxMPJwSVdUf5SCtULkhpKDuzWxocBsF2cA")}{" "}
              </p>
              {/* TODO: Add new tabs icon  */}
              <ArrowRightToLine className="text-gray-500" />
            </div>

            <div className="flex flex-col gap-2">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Cupiditate soluta explicabo, maiores eligendi dolore aspernatur
                asperiores dolorem fugit suscipit assumenda at, alias repellat
                porro! Delectus porro dolor quisquam laudantium placeat.
              </p>{" "}
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Cupiditate soluta explicabo, maiores eligendi dolore aspernatur
              </p>{" "}
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Cupiditate soluta explicabo, maiores eligendi dolore aspernatur
              </p>{" "}
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Cupiditate soluta explicabo, maiores eligendi dolore aspernatur
                asperiores dolorem fugit suscipit assumenda at, alias repellat
                porro! Delectus porro dol
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mint;

function Countdown() {
  return (
    <div className="flex items-center gap-4">
      <p>Ends In</p>
      <p>02</p>
      <p>16</p>
      <p>16</p>
      <p>03</p>
    </div>
  );
}
