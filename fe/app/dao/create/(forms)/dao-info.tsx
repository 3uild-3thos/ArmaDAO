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
import { Button } from "@/components/ui/button";
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

// zustand
import useCreateFleet from "@/lib/zustand/create-fleet.store";

function DaoInfo() {
  const [uploadedLogo, setUploadedLogo] = useState<string>("");
  const [uploadedBanner, setUploadedBanner] = useState<string>("");
  const { page, handleNextPage, handleBackPage } = useCreateFleet();

  const form = useForm<IFleetInfo>({
    resolver: zodResolver(FleetInfoSchema),
    defaultValues: FleetInfoDefaults,
  });

  function onSubmit(values: IFleetInfo) {
    console.log(values);
    handleNextPage();
  }

  const handleSelectLogo = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    const file = e.target.files[0];

    try {
      form.setValue("logoUri", file);
      console.log("logo file", file);
      form.clearErrors("logoUri");
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
      form.clearErrors("bannerUri");
      setUploadedBanner(await getBase64(file));
    } catch (error: any) {
      console.error("Error selecting media: ", error);
    }
  };

  console.log("form", form.getValues());

  return (
    <>
      <Form {...form}>
        <form className="space-y-8">
          <div className="col-span-2 flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-sm text-gray-500">Files</p>
              <p className="">Fleet Banner</p>
              {/* TODO: Add proper text color */}
              <p className="text-xs font-light text-gray-500">
                We suggest using 1200px (w) by 250px (h) with a 250px (w) by
                250px (h) safezone.
              </p>

              <FormField
                name="bannerUri"
                render={() => {
                  return (
                    <FormItem>
                      <FormControl>
                        <div className="relative h-80 rounded-xl border-dashed border-2 hover:bg-muted/5 duration-200 cursor-pointer border-gray-500 flex flex-col justify-center items-center gap-3 bg-card p-20">
                          {uploadedBanner ? (
                            <Image
                              src={uploadedBanner}
                              alt={"Uploaded Logo"}
                              layout="fill"
                              className="h-fit w-full object-cover rounded-xl"
                            />
                          ) : (
                            <>
                              <ImagePlus size={64} />
                              <div className="text-center">
                                <div className="">Click here to upload</div>
                                <div className="">Maximum file size: 2MB</div>
                              </div>
                            </>
                          )}
                          <Input
                            type="file"
                            accept="image/png"
                            className="opacity-0 absolute bottom-0 left-0 w-full h-full overflow-hidden whitespace-nowrap z-10 cursor-pointer"
                            onChange={handleSelectBanner}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col gap-7">
                <p className="text-sm text-gray-500">Basic Information</p>

                <FormField
                  name="logoUri"
                  render={() => {
                    return (
                      <FormItem>
                        <FormControl>
                          <div className="grid grid-cols-4 gap-3">
                            <p>Logo</p>
                            <div className="col-span-3 flex flex-col gap-4 w-full">
                              <Button
                                variant={"outline"}
                                className="relative py-6 justify-start border-default text-muted/50 cursor-pointer"
                              >
                                Choose a Logo
                                <Input
                                  type="file"
                                  accept="image/png"
                                  className="opacity-0 absolute bottom-0 left-0 w-full h-full overflow-hidden whitespace-nowrap z-10 cursor-pointer"
                                  onChange={handleSelectLogo}
                                />
                              </Button>

                              {uploadedLogo && (
                                <Image
                                  src={uploadedLogo}
                                  alt={"Uploaded Logo"}
                                  width={500}
                                  height={500}
                                  className="h-24 rounded-xl w-24"
                                />
                              )}
                              <FormMessage />
                            </div>
                          </div>
                        </FormControl>
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
                          <div className="col-span-3 space-y-2">
                            <Input {...field} />
                            <FormMessage />
                          </div>
                        </div>
                      </FormControl>
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
                          <div className="col-span-3 space-y-2">
                            <Textarea
                              className="col-span-3 max-h-[200px]"
                              maxLength={250}
                              {...field}
                            />
                            <FormMessage />
                          </div>
                        </div>
                      </FormControl>
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
                          <Input className="col-span-3" {...field} />
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
                          <Input className="col-span-3" {...field} />
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
                          <Input className="col-span-3" {...field} />
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
                          <Input className="col-span-3" {...field} />
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
        <div className="flex justify-end">
          <Button variant={"white"} onClick={form.handleSubmit(onSubmit)}>
            Next
          </Button>
        </div>
      </Form>
    </>
  );
}

export default DaoInfo;
