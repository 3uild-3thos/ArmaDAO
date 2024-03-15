"use client";
import { Textarea } from "@/components/ui/textarea";
import { ImagePlus } from "lucide-react";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";

function DaoInfo() {
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

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((state) => ({ ...state, [name]: value }));
  };

  return (
    <>
      {" "}
      <div className="col-span-2 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <p className="text-sm text-gray-500">Files</p>
          <p className="">Cover Photo</p>
          {/* TODO: Add proper text color */}
          <p className="text-xs font-light text-gray-500">
            We suggest using 1200px (w) by 250px (h) with a 250px (w) by 250px
            (h) safezone.
          </p>

          {/* TODO: Add proper bg color */}
          {/* TODO: Add proper border color */}
          {/* TODO: Add proper border radius */}
          <div className="border-dashed border-2 rounded border-gray-500 flex flex-col justify-center items-center gap-3 bg-card p-20 ">
            <div className="">
              <ImagePlus size={64} />
            </div>
            <div className="text-center">
              <p className="">Click or drag an image here to upload.</p>
              <p className="">Maximum file size: 5MB</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 ">
          <div className="flex flex-col gap-7">
            <p className="text-sm text-gray-500">Basic Information</p>
            <div className="grid grid-cols-4 gap-3 items-center">
              <p>Title</p>
              <Input
                className="col-span-3"
                name="title"
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-4 gap-3 items-center">
              <p>Category</p>
              <Input
                className="col-span-3"
                name="category"
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-4 gap-3 items-center">
              <div className="flex flex-col gap-2">
                <p>Location</p>
                <p className="text-xs font-light text-gray-500">Optional</p>
              </div>
              <Input
                className="col-span-3"
                name="location"
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-4 gap-3">
              <p>Description</p>
              <Textarea
                className="col-span-3"
                name="description"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col gap-7">
            <p className="text-sm text-gray-500">Links</p>
            <div className="grid grid-cols-4 gap-3 items-center">
              <p>Pitchdeck</p>
              <Input
                className="col-span-3"
                name="pitchdeck"
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-4 gap-3 items-center">
              <div className="flex flex-col gap-2">
                <p>Demo Video</p>
                <p className="text-xs font-light text-gray-500">Optional</p>
              </div>
              <Input
                className="col-span-3"
                name="demoVideo"
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-4 gap-3 items-center">
              <div className="flex flex-col gap-2">
                <p>Twitter / X</p>
                <p className="text-xs font-light text-gray-500">Optional</p>
              </div>
              <Input
                className="col-span-3"
                name="twitter"
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-4 gap-3 items-center">
              <div className="flex flex-col gap-2">
                <p>LinkedIn</p>
                <p className="text-xs font-light text-gray-500">Optional</p>
              </div>
              <Input
                className="col-span-3"
                name="linkedIn"
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-4 gap-3 items-center">
              <div className="flex flex-col gap-2">
                <p>Github</p>
                <p className="text-xs font-light text-gray-500">Optional</p>
              </div>
              <Input
                className="col-span-3"
                name="github"
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-4 gap-3 items-center">
              <div className="flex flex-col gap-2">
                <p>Website</p>
                <p className="text-xs font-light text-gray-500">Optional</p>
              </div>
              <Input
                className="col-span-3"
                name="website"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default DaoInfo;
