"use client";

// react next
import Image from "next/image";

// lib
import getBase64 from "@/lib/helpers/getBase64";
import { FleetInfoSchema, IFleetInfo } from "@/lib/schema/fleet.schema";

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
import { ArrowRightIcon, ImagePlus } from "lucide-react";

// zustand
import { useCreateFleet } from "@/lib/zustand/create-fleet.store";

function FleetInfo() {
  const {
    handleNextPage,
    fleetInfo,
    setFleetInfo,
    logoPreview,
    setLogoPreview,
    bannerPreview,
    setBannerPreview,
  } = useCreateFleet();

  const form = useForm<IFleetInfo>({
    resolver: zodResolver(FleetInfoSchema),
    defaultValues: fleetInfo,
  });

  function onSubmit(values: IFleetInfo) {
    setFleetInfo(values);
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
      form.clearErrors("logoUri");
      setLogoPreview(await getBase64(file));
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
      setBannerPreview(await getBase64(file));
    } catch (error: any) {
      console.error("Error selecting media: ", error);
    }
  };

  return (
    <>
      <Form {...form}>
        <form className="space-y-8 min-h-[30rem]">
          <div className="flex flex-col col-span-2 gap-10">
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
                        <div className="relative flex flex-col items-center justify-center gap-3 p-20 duration-200 border border-gray-500 border-dashed cursor-pointer h-80 rounded-xl hover:bg-muted/5 hover:brightness-125 bg-card">
                          {bannerPreview ? (
                            <Image
                              src={bannerPreview}
                              alt={"Banner Preview"}
                              layout="fill"
                              className="object-cover w-full h-fit rounded-xl"
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
                            className="absolute bottom-0 left-0 z-10 w-full h-full overflow-hidden opacity-0 cursor-pointer whitespace-nowrap"
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
              <div className="flex flex-col gap-8">
                <p className="text-sm text-gray-500">Basic Information</p>

                <FormField
                  name="logoUri"
                  render={() => {
                    return (
                      <FormItem>
                        <FormControl>
                          <div className="grid grid-cols-4 gap-3">
                            <p>Logo</p>
                            <div className="flex flex-col w-full col-span-3 gap-4">
                              <Button
                                variant={"outline"}
                                className="relative justify-start py-6 cursor-pointer border-default text-muted/50"
                              >
                                Select File
                                <Input
                                  type="file"
                                  accept="image/png"
                                  className="absolute bottom-0 left-0 z-10 w-full h-full overflow-hidden opacity-0 cursor-pointer whitespace-nowrap"
                                  onChange={handleSelectLogo}
                                />
                              </Button>

                              {logoPreview && (
                                <Image
                                  src={logoPreview}
                                  alt={"Uploaded Logo"}
                                  width={500}
                                  height={500}
                                  className="w-24 h-24 border-dashed rounded-xl border-default"
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
                        <div className="grid items-start grid-cols-4 gap-3">
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

              <div className="flex flex-col gap-8">
                <p className="text-sm text-gray-500">Links</p>

                <FormField
                  control={form.control}
                  name="twitter"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid items-center grid-cols-4 gap-3">
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
                        <div className="grid items-center grid-cols-4 gap-3">
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
                        <div className="grid items-center grid-cols-4 gap-3">
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
                        <div className="grid items-center grid-cols-4 gap-3">
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
      </Form>
      {/* TODO: Create a reusable component with all the variants */}
      <div className="flex justify-end">
        <Button variant={"white"} onClick={form.handleSubmit(onSubmit)}>
          Next <ArrowRightIcon size={16} className="ml-2" />
        </Button>
      </div>
    </>
  );
}

export default FleetInfo;
