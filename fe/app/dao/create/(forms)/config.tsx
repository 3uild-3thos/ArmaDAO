"use client";
import React, { useState } from "react";

// components
import { Textarea } from "@/components/ui/textarea";
import { ImagePlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { EMembershipType } from "@/lib/schema/subdao.schema";

function Config() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
    pitchdeck: "",
    demoVideo: "",
    twitter: "",
    linkedIn: "",
    github: "",
    website: "",
  });

  const [type, setType] = useState<EMembershipType>(EMembershipType.Fungible);

  const [mintId, setMintId] = useState("");

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | undefined
  ) => {
    if (e) {
      const { name, value } = e.target;
      setFormData((state) => ({ ...state, [name]: value }));
    }
  };

  return (
    <>
      <div className="col-span-2  gap-10">
        <div className="flex flex-col gap-7">
          <p className="text-sm text-gray-500">Membership Information</p>

          <div className="grid grid-cols-2 gap-10">
            <div className="flex flex-col gap-3 ">
              <p>Mint Address</p>
              <Input
                className="col-span-3"
                name="title"
                onChange={(e) => {
                  setMintId(e.target.value);
                }}
              />
            </div>

            <div className="flex flex-col gap-3">
              <p>Membership Type</p>
              {/* TODO: Make the radio button orientation horizontal */}
              <RadioGroup
                defaultValue="fungible"
                onValueChange={(e) => {
                  setType(e as EMembershipType);
                }}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fungible" id="option-one" />
                  <Label htmlFor="option-one">Fungible Token</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="nft" id="option-two" />
                  <Label htmlFor="option-two">NFT</Label>
                </div>
              </RadioGroup>
            </div>
            {type === EMembershipType.Fungible && mintId !== "" && (
              <div className="flex flex-col gap-3 ">
                <p>Holding amount</p>
                <Input
                  type="number"
                  className="col-span-3"
                  name="title"
                  onChange={handleChange}
                />
              </div>
            )}

            {type === EMembershipType.NFT && mintId === "" && (
              <div className="col-span-2 grid grid-cols-2 gap-8 border border-gray-500 py-6 px-4 rounded-xl">
                <div className="col-span-2">
                  <p className="text-xl font-medium">NFT Creation</p>
                </div>
                <div className="flex flex-col gap-3 col-span-2">
                  <div className="flex flex-col gap-3">
                    <p>Image</p>

                    {/* TODO: Add proper bg color */}
                    {/* TODO: Add proper border color */}
                    {/* TODO: Add proper border radius */}
                    <div className="border-dashed border-2 rounded border-gray-500 flex flex-col justify-center items-center gap-3 bg-card p-20 ">
                      <div className="">
                        <ImagePlus size={64} />
                      </div>
                      <div className="text-center">
                        <p className="">
                          Click or drag an image here to upload.
                        </p>
                        <p className="">Maximum file size: 5MB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 ">
                  <p>Name</p>
                  <Input
                    className="col-span-3"
                    name="title"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-3 ">
                  <p>Seller Basis Point</p>
                  <Input
                    type="number"
                    className="col-span-3"
                    name="title"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-3 col-span-2">
                  <p>Description</p>
                  <Textarea
                    className="col-span-3"
                    name="title"
                    onChange={handleChange}
                  />
                </div>{" "}
                {/* TODO: Add appropriate input for metadata */}
                <div className="flex flex-col gap-3 col-span-2">
                  <p>Metadata</p>
                  <Textarea
                    className="col-span-3"
                    name="title"
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}
            {type === EMembershipType.Fungible && mintId === "" && (
              <div className="col-span-2 grid grid-cols-2 gap-8 border border-gray-500 py-6 px-4 rounded-xl">
                <div className="col-span-2">
                  <p className="text-xl font-medium">Fungible Token Creation</p>
                </div>
                <div className="flex flex-col gap-3 col-span-2">
                  <div className="flex flex-col gap-3">
                    <p>Image</p>

                    {/* TODO: Add proper bg color */}
                    {/* TODO: Add proper border color */}
                    {/* TODO: Add proper border radius */}
                    <div className="border-dashed border-2 rounded border-gray-500 flex flex-col justify-center items-center gap-3 bg-card p-20 ">
                      <div className="">
                        <ImagePlus size={64} />
                      </div>
                      <div className="text-center">
                        <p className="">
                          Click or drag an image here to upload.
                        </p>
                        <p className="">Maximum file size: 5MB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 ">
                  <p>Name</p>
                  <Input
                    className="col-span-3"
                    name="title"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-3 ">
                  <p>Total Supply</p>
                  <Input
                    type="number"
                    className="col-span-3"
                    name="title"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-3 col-span-2">
                  <p>Description</p>
                  <Textarea
                    className="col-span-3"
                    name="title"
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Config;
