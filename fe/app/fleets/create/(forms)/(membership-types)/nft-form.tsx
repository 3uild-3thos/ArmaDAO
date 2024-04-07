// components
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import InfoTooltip from "@/components/ui/info-tooltip";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import BaseConfigForm from "@/create/(forms)/(membership-types)/base-config-form";

// lib
import { IFleetConfig } from "@/lib/schema/fleet.schema";
import { createFleet } from "@/lib/tooltips/fleet.tooltip";

// react hook form
import { UseFormReturn } from "react-hook-form";

interface INFTForm {
  form: UseFormReturn<IFleetConfig>;
}

const NFTForm = ({ form }: INFTForm) => {
  const watchHasExistingMintAddress = form.watch("hasExistingMintAddress");
  const watchAllowSubfleetCreation = form.watch("config.allowSubfleetCreation");

  return (
    <>
      <FormField
        control={form.control}
        name="hasExistingMintAddress"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <p>Do you have an existing NFT collection?</p>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value as unknown as string}
                className="flex flex-col space-y-1"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value={true as unknown as string} />
                  </FormControl>
                  <p>Yes, I have.</p>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value={false as unknown as string} />
                  </FormControl>
                  <p>No, I don&apos;t and let&apos;s create one.</p>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {watchHasExistingMintAddress ? (
        <FormField
          control={form.control}
          name="config.mint"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center">
                    Collection Mint Address
                    <InfoTooltip
                      content={createFleet.config.collectionMintAddress}
                    />
                  </div>
                  <div className="col-span-2 space-y-2">
                    <Input
                      placeholder="6cut...cDU"
                      {...field}
                      value={field.value}
                    />
                    <FormMessage />
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      ) : (
        <p className="p-4 text-sm rounded-lg text-muted-light border-default">
          NFT collection creation is coming soon...
        </p>
      )}

      <p className="inline mt-8 text-sm text-gray-500">
        Initial Fleet DAO Configurations{" "}
        <InfoTooltip
          content={createFleet.config.initialDaoConfig}
          className="mt-2"
        />
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <BaseConfigForm form={form}>
          <FormField
            control={form.control}
            name="config.minStakedRequiredProposal"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="grid grid-cols-5 gap-4">
                    <div className="inline col-span-2">
                      <span>Min. Staked</span>
                      <InfoTooltip
                        content={createFleet.config.minStakedRequiredProposal}
                        className="mt-1"
                      />
                      <p className="text-sm font-light text-muted-light">
                        To Create Proposals
                      </p>
                    </div>
                    <div className="col-span-3 space-y-2">
                      <Input
                        type="number"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        value={String(field.value)}
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
            name="config.allowSubfleetCreation"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="grid grid-cols-5 gap-4">
                    <div className="inline col-span-2">
                      Allow Subfleet Creation?
                      <InfoTooltip
                        content={createFleet.config.allowSubfleetCreation}
                        className="mt-1"
                      />
                    </div>
                    <div className="col-span-3 space-y-2">
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

          {watchAllowSubfleetCreation && (
            <FormField
              control={form.control}
              name="config.minStakedToCreateSubfleet"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <div className="grid grid-cols-5 gap-4">
                      <div className="inline col-span-2">
                        <span>Min. Staked</span>
                        <InfoTooltip
                          content={createFleet.config.minStakedToCreateSubfleet}
                          className="mt-1"
                        />
                        <p className="text-sm font-light text-muted-light">
                          To Create Subfleet DAO
                        </p>
                      </div>
                      <div className="col-span-3 space-y-2">
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                          value={String(field.value)}
                        />
                        <FormMessage />
                      </div>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          )}
        </BaseConfigForm>
      </div>
    </>
  );
};

export default NFTForm;
