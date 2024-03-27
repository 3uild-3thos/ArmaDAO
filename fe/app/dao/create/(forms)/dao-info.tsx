"use client";

// react next
import Image from "next/image";
import { useState } from "react";

// lib
import getBase64 from "@/lib/helpers/getBase64";
import {
  FleetInfoDefaults,
  FleetInfoSchema,
  IFleetInfo,
} from "@/lib/schema/fleet.schema";

// hookform
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// components
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ImagePlus } from "lucide-react";

function DaoInfo() {
  const [uploadedLogo, setUploadedLogo] = useState<string>("");
  const [uploadedBanner, setUploadedBanner] = useState<string>("");

  const form = useForm<IFleetInfo>({
    resolver: zodResolver(FleetInfoSchema),
    defaultValues: FleetInfoDefaults,
  });

  function onSubmit(values: IFleetInfo) {
    console.log(values);
  }

  const handleSelectLogo = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    const file = e.target.files[0];

    try {
      form.setValue("logoUri", file);
      setUploadedLogo(await getBase64(file));
    } catch (error: any) {
      console.error("Error selecting media: ", error);
    }
  };

  const handleSelectBanner = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    const file = e.target.files[0];

    try {
      form.setValue("bannerUri", file);
      setUploadedBanner(await getBase64(file));
    } catch (error: any) {
      console.error("Error selecting media: ", error);
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="col-span-2 flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-sm text-gray-500">Files</p>
              <p className="">Fleet Banner</p>
              {/* TODO: Add proper text color */}
              <p className="text-xs font-light text-gray-500">
                We suggest using 1200px (w) by 250px (h) with a 250px (w) by
                250px (h) safezone.
              </p>

              {/* TODO: Add proper bg color */}
              {/* TODO: Add proper border color */}
              {/* TODO: Add proper border radius */}
              <div className="rounded-xl border-dashed border-2 bg-muted/5 border-gray-500 flex flex-col justify-center items-center gap-3 bg-card p-20 ">
                <div className="">
                  <ImagePlus size={64} />
                </div>
                <div className="text-center">
                  <p className="">Click or drag an image here to upload.</p>
                  <p className="">Maximum file size: 5MB</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col gap-7">
                <p className="text-sm text-gray-500">Basic Information</p>

                <FormField
                  control={form.control}
                  name="logoUri"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormControl>
                          <div className="grid grid-cols-4 gap-3 items-center">
                            <p>Logo</p>
                            <div className="flex flex-col gap-2 w-full">
                              <Input
                                type="file"
                                className="col-span-3 hover:bg-muted/5 cursor-pointer"
                                {...field}
                              />
                              <Image
                                src={uploadedLogo}
                                alt={"Uploaded Logo"}
                                width={500}
                                height={500}
                                className="absolute left-0 object-cover h-16 rounded-tl-lg rounded-bl-lg md:h-24 w-fit"
                              />
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid grid-cols-4 gap-3 items-center">
                          <p>Name</p>
                          <Input
                            className="col-span-3"
                            placeholder="Your Fleet's Name"
                            {...field}
                          />
                        </div>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid grid-cols-4 gap-3">
                          <p>Description</p>
                          <Textarea
                            className="col-span-3 max-h-[200px]"
                            placeholder="description"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col gap-7">
                <p className="text-sm text-gray-500">Links</p>

                <FormField
                  control={form.control}
                  name="twitter"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid grid-cols-4 gap-3 items-center">
                          <div className="flex flex-col">
                            <p>Twitter</p>
                            <p className="text-xs font-light text-gray-500">
                              Optional
                            </p>
                          </div>
                          <Input
                            className="col-span-3"
                            placeholder="Twitter"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="linkedIn"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid grid-cols-4 gap-3 items-center">
                          <div className="flex flex-col">
                            <p>LinkedIn</p>
                            <p className="text-xs font-light text-gray-500">
                              Optional
                            </p>
                          </div>
                          <Input
                            className="col-span-3"
                            placeholder="LinkedIn"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="github"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid grid-cols-4 gap-3 items-center">
                          <div className="flex flex-col">
                            <p>Github</p>
                            <p className="text-xs font-light text-gray-500">
                              Optional
                            </p>
                          </div>
                          <Input
                            className="col-span-3"
                            placeholder="Github"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid grid-cols-4 gap-3 items-center">
                          <div className="flex flex-col">
                            <p>Website</p>
                            <p className="text-xs font-light text-gray-500">
                              Optional
                            </p>
                          </div>
                          <Input
                            className="col-span-3"
                            placeholder="Website"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
}

export default DaoInfo;
