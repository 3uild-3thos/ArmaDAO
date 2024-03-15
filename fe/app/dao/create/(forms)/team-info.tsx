"use client";
import { Textarea } from "@/components/ui/textarea";
import { ImagePlus } from "lucide-react";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  ITeamInfo,
  TeamInfoDefaults,
  TeamInfoSchema,
} from "@/lib/schema/team-info.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

function TeamInfo() {
  const form = useForm<ITeamInfo>({
    resolver: zodResolver(TeamInfoSchema),
    defaultValues: TeamInfoDefaults,
  });

  function onSubmit(values: ITeamInfo) {
    console.log(values);
  }

  const handleChange = (e: any) => {};
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-2 gap-8">
            <p className="text-sm text-gray-500 col-span-2">Team Information</p>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex flex-col justify-center gap-3">
                      <p>Team Name</p>
                      <Input
                        className="col-span-3"
                        placeholder="name"
                        {...field}
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="linkedIn"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex flex-col justify-center gap-3">
                      <div className="flex items-center gap-2">
                        <p>LinkedIn Profile</p>
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
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="twitter"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex flex-col justify-center gap-3">
                      <p>Twitter / X Profile</p>
                      <Input
                        className="col-span-3"
                        placeholder="twitter"
                        {...field}
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="github"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex flex-col justify-center gap-3">
                      <div className="flex items-center gap-2">
                        <p>Github Profile</p>
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
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex flex-col justify-center gap-3">
                      <div className="flex items-center gap-2">
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
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>

      <div className="grid grid-cols-2 gap-8 border border-gray-500 py-3 px-4 rounded-xl">
        <div className="col-span-2 flex items-center justify-between">
          <p className="text-xl font-medium">Team Member</p>

          <div className="flex items-center gap-3">
            <p className="text-sm">Clear</p>
            <p className="text-sm">Cancel</p>
            <p className="text-sm">Done</p>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-3">
          <p>Name</p>
          <Input name="title" onChange={handleChange} />
        </div>

        <div className="flex flex-col justify-center gap-3">
          <p>Postion</p>
          <Input className="col-span-3" name="title" onChange={handleChange} />
        </div>

        <div className="flex flex-col justify-center gap-3">
          <p>LinkedIn Profile</p>
          <Input className="col-span-3" name="title" onChange={handleChange} />
        </div>

        <div className="flex flex-col justify-center gap-3">
          <p>Twitter / X Profile</p>
          <Input name="title" onChange={handleChange} />
        </div>

        <div className="flex flex-col justify-center gap-3">
          <div className="flex items-center gap-2">
            <p>Website</p>
            <p className="text-xs font-light text-gray-500">Optional</p>
          </div>
          <Input className="col-span-3" name="title" onChange={handleChange} />
        </div>

        <div className="flex flex-col justify-center gap-3">
          <div className="flex items-center gap-2">
            <p>Github Profile</p>
            <p className="text-xs font-light text-gray-500">Optional</p>
          </div>
          <Input className="col-span-3" name="title" onChange={handleChange} />
        </div>

        <div className="flex flex-col justify-center gap-3 self-start">
          <div className="flex items-center gap-2">
            <p>Description</p>
            <p className="text-xs font-light text-gray-500">Optional</p>
          </div>
          <Textarea
            className="col-span-3"
            name="description"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col justify-center gap-3">
          <div className="flex items-center gap-2">
            <p>Profile Picture</p>
            <p className="text-xs font-light text-gray-500">Optional</p>
          </div>
          <p className="text-xs font-light text-gray-500">
            We suggest using 250px (w) by 250px (h) resolution.
          </p>

          <div className="border-dashed border-2 rounded border-gray-500 flex flex-col justify-center items-center gap-3 bg-card p-10 ">
            <div className="">
              <ImagePlus size={50} />
            </div>
            <div className="text-center flex flex-col justify-center items-center gap-2">
              <p className="text-xs font-medium">
                Click or drag an image here to upload.
              </p>
              <p className="text-[10px] font-normal text-gray-500">
                Maximum file size: 5MB
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Button variant={"ghost"}>Add a team member</Button>
      </div>
    </>
  );
}

export default TeamInfo;
