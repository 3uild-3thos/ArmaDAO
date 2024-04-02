"use client";

// lib
import { FleetTeamSchema, IFleetTeam } from "@/lib/schema/fleet.schema";
import { createFleet } from "@/lib/tooltips/fleet.tooltip";
import { useCreateFleet } from "@/lib/zustand/create-fleet.store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// components
import { Button } from "@/components/ui/button";
import { ConnectWallet } from "@/components/ui/connect-wallet";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import InfoTooltip from "@/components/ui/info-tooltip";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useWallet } from "@solana/wallet-adapter-react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useEffect } from "react";

function TeamInfo() {
  const { handleBackPage, handleNextPage, fleetTeam, setFleetTeam } =
    useCreateFleet();

  const { publicKey } = useWallet();

  const form = useForm<IFleetTeam>({
    resolver: zodResolver(FleetTeamSchema),
    defaultValues: fleetTeam,
  });

  function onSubmit(values: IFleetTeam) {
    setFleetTeam(values);
    handleNextPage();
  }

  const watchStayAnonymous = form.watch("stayAnonymous");

  useEffect(() => {
    if (publicKey) {
      form.setValue("teamWallet", publicKey.toBase58());
    }
  }, [form, publicKey]);

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <p className="inline text-sm text-gray-500">
            Who&apos;s the main team behind this Fleet DAO?{" "}
            <InfoTooltip content={createFleet.team.title} className="mt-2" />
          </p>

          <div className="grid grid-cols-2 gap-16">
            <div className="flex flex-col gap-8">
              <FormField
                control={form.control}
                name="stayAnonymous"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <div className="grid grid-cols-5 gap-4">
                        <div className="inline col-span-4">
                          Do you want to stay anonymous?
                          <InfoTooltip
                            content={createFleet.team.stayAnonymous}
                            className="mt-1"
                          />
                        </div>
                        <div className="col-span-1 space-y-2 place-self-end">
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                          <FormMessage />
                        </div>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="teamWallet"
                render={() => (
                  <FormItem className="w-full">
                    <FormControl>
                      <div className="grid grid-cols-5 gap-4">
                        <div className="inline col-span-2">
                          Team Wallet{" "}
                          <InfoTooltip
                            content={createFleet.team.teamWallet}
                            className="mt-2"
                          />
                        </div>
                        <div className="col-span-3 space-y-2">
                          {publicKey ? (
                            <Input
                              disabled
                              readOnly
                              value={String(publicKey)}
                            />
                          ) : (
                            <ConnectWallet />
                          )}

                          <FormMessage />
                        </div>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <div className="grid grid-cols-5 gap-4">
                        <div className="inline col-span-2">Team Name</div>
                        <div className="col-span-3 space-y-2">
                          <Input {...field} />
                          <FormMessage />
                        </div>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>

          {!watchStayAnonymous && (
            <div className="grid grid-cols-2 gap-16">
              <div className="flex flex-col gap-8">
                <FormField
                  control={form.control}
                  name="twitter"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <div className="grid grid-cols-5 gap-4">
                          <div className="inline col-span-2">
                            Twitter Profile
                          </div>
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
                  name="linkedIn"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <div className="grid grid-cols-5 gap-4">
                          <div className="inline col-span-2">
                            LinkedIn Profile
                          </div>
                          <div className="col-span-3 space-y-2">
                            <Input {...field} />
                            <FormMessage />
                          </div>
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col gap-8">
                <FormField
                  control={form.control}
                  name="github"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <div className="grid grid-cols-5 gap-4">
                          <div className="inline col-span-2">
                            Github Profile
                          </div>
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
                  name="website"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <div className="grid grid-cols-5 gap-4">
                          <div className="inline col-span-2">Team Website</div>
                          <div className="col-span-3 space-y-2">
                            <Input {...field} />
                            <FormMessage />
                          </div>
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
          )}
        </form>
      </Form>
      {/* TODO: Bring back once we can add team members */}
      {/* <TeamMember /> */}
      {/* TODO: Create a reusable component with all the variants */}
      <div className="flex justify-between mt-8">
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
