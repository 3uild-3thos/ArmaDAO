"use client";

// lib
import {
  ITeamInfo,
  TeamInfoDefaults,
  TeamInfoSchema,
} from "@/lib/schema/team-info.schema";
import { useCreateFleet } from "@/lib/zustand/create-fleet.store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// components
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import TeamMember from "@/create/(forms)/team-member";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

function TeamInfo() {
  const { handleBackPage, handleNextPage } = useCreateFleet();

  const form = useForm<ITeamInfo>({
    resolver: zodResolver(TeamInfoSchema),
    defaultValues: TeamInfoDefaults,
  });

  function onSubmit(values: ITeamInfo) {
    console.log(values);
    handleNextPage();
  }

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
      {/* TODO: Create a reusable component with all the variants */}
      <div className="flex justify-between">
        <Button variant={"outline"} onClick={handleBackPage}>
          <ArrowLeftIcon size={16} className="mr-2" /> Back
        </Button>
        <Button variant={"white"} onClick={form.handleSubmit(onSubmit)}>
          Next <ArrowRightIcon size={16} className="ml-2" />
        </Button>
      </div>
    </>
  );
}

export default TeamInfo;
