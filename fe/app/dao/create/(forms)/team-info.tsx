"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import {
  ITeamInfo,
  TeamInfoDefaults,
  TeamInfoSchema,
} from "@/lib/schema/team-info.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import TeamMember from "@/create/(forms)/team-member";

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
      <TeamMember />
    </>
  );
}

export default TeamInfo;
