"use client";

// components
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import InfoTooltip from "@/components/ui/info-tooltip";
import FungibleForm from "@/create/(forms)/(membership-types)/fungible-form";
import HybridForm from "@/create/(forms)/(membership-types)/hybrid-form";
import MembershipTypes from "@/create/(forms)/(membership-types)/membership-types";
import NFTForm from "@/create/(forms)/(membership-types)/nft-form";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useForm } from "react-hook-form";

// zustand
import { useCreateFleet } from "@/lib/zustand/create-fleet.store";
import { zodResolver } from "@hookform/resolvers/zod";

// schema
import {
  EMembershipType,
  FleetConfigSchema,
  IFleetConfig,
} from "@/lib/schema/fleet.schema";

function FleetConfig() {
  const { handleBackPage, handleNextPage, fleetConfig, setFleetConfig } =
    useCreateFleet();

  const form = useForm<IFleetConfig>({
    resolver: zodResolver(FleetConfigSchema),
    defaultValues: fleetConfig,
  });

  function onSubmit(values: IFleetConfig) {
    setFleetConfig(values);
    handleNextPage();
  }

  const handleSelectMembershipType = (type: EMembershipType) => {
    form.setValue("membershipType", type);
  };

  const watchMembershipType = form.watch("membershipType");

  return (
    <>
      <Form {...form}>
        <form className="space-y-8 min-h-[30rem]">
          <div className="flex flex-col gap-8">
            <p className="text-sm text-gray-500">
              How to be a member of your DAO?
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex">
                  Membership Type
                  <InfoTooltip
                    content={
                      "You can change from one membership type to another through proposals."
                    }
                  />
                </div>
                <FormField
                  name="membershipType"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormControl>
                          <MembershipTypes
                            selected={field.value}
                            onSelect={handleSelectMembershipType}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>

              {watchMembershipType === EMembershipType.Fungible && (
                <FungibleForm form={form} />
              )}

              {watchMembershipType === EMembershipType.NFT && (
                <NFTForm form={form} />
              )}

              {watchMembershipType === EMembershipType.Hybrid && (
                <HybridForm form={form} />
              )}
            </div>
          </div>
        </form>
      </Form>
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

export default FleetConfig;
