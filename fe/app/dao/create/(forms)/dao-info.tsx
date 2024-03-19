"use client";

import React from "react";

// lib
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ISubDaoInfo,
  SubDaoInfoDefaults,
  SubDaoInfoSchema,
} from "@/lib/schema/subdao-info.schema";
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

function DaoInfo() {
  const form = useForm<ISubDaoInfo>({
    resolver: zodResolver(SubDaoInfoSchema),
    defaultValues: SubDaoInfoDefaults,
  });

  function onSubmit(values: ISubDaoInfo) {
    console.log(values);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="col-span-2 flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-sm text-gray-500">Files</p>
              <p className="">Cover Photo</p>
              {/* TODO: Add proper text color */}
              <p className="text-xs font-light text-gray-500">
                We suggest using 1200px (w) by 250px (h) with a 250px (w) by
                250px (h) safezone.
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
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid grid-cols-4 gap-3 items-center">
                          <p>Title</p>
                          <Input
                            className="col-span-3"
                            placeholder="title"
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
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid grid-cols-4 gap-3 items-center">
                          <p>Category</p>
                          <Input
                            className="col-span-3"
                            placeholder="category"
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
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid grid-cols-4 gap-3 items-center">
                          <div className="flex flex-col gap-2">
                            <p>Location</p>
                            <p className="text-xs font-light text-gray-500">
                              Optional
                            </p>
                          </div>
                          <Input
                            className="col-span-3"
                            placeholder="location"
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
                            className="col-span-3"
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
                  name="pitchdeck"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid grid-cols-4 gap-3 items-center">
                          <p>Pitchdeck</p>
                          <Input
                            className="col-span-3"
                            placeholder="pitchdeck"
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
                  name="demoVideo"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid grid-cols-4 gap-3 items-center">
                          <div className="flex flex-col gap-2">
                            <p>Demo Video</p>
                            <p className="text-xs font-light text-gray-500">
                              Optional
                            </p>
                          </div>
                          <Input
                            className="col-span-3"
                            placeholder="demoVideo"
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
                  name="twitter"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid grid-cols-4 gap-3 items-center">
                          <div className="flex flex-col gap-2">
                            <p>Twitter / X</p>
                            <p className="text-xs font-light text-gray-500">
                              Optional
                            </p>
                          </div>
                          <Input
                            className="col-span-3"
                            placeholder="twitter"
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
                          <div className="flex flex-col gap-2">
                            <p>LinkedIn</p>
                            <p className="text-xs font-light text-gray-500">
                              Optional
                            </p>
                          </div>
                          <Input
                            className="col-span-3"
                            placeholder="linkedIn"
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
                          <div className="flex flex-col gap-2">
                            <p>Github</p>
                            <p className="text-xs font-light text-gray-500">
                              Optional
                            </p>
                          </div>
                          <Input
                            className="col-span-3"
                            placeholder="github"
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
                          <div className="flex flex-col gap-2">
                            <p>Website</p>
                            <p className="text-xs font-light text-gray-500">
                              Optional
                            </p>
                          </div>
                          <Input
                            className="col-span-3"
                            placeholder="website"
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
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
}

export default DaoInfo;
