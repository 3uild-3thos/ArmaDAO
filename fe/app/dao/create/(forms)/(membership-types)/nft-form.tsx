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

// lib
import { IFleetConfig } from "@/lib/schema/fleet.schema";

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
          name="config.collectionMint"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center">
                    Collection Mint Address
                    <InfoTooltip
                      content={"The mint address of the NFT collection."}
                    />
                  </div>
                  <div className="col-span-2 space-y-2">
                    <Input placeholder="6cut...cDU" {...field} />
                    <FormMessage />
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      ) : (
        <p className="text-sm text-muted-light p-4 rounded-lg border-default">
          NFT collection creation is coming soon...
        </p>
      )}

      <p className="text-sm text-gray-500 mt-8">
        Initial Fleet DAO Configurations
      </p>

      <div className="grid grid-cols-2 gap-16">
        <div className="flex flex-col gap-8">
          <FormField
            control={form.control}
            name="config.proposalFee"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="grid grid-cols-5 gap-4">
                    <div className="inline col-span-3">
                      Proposal Fee
                      <InfoTooltip
                        content={"The payment for each proposal made."}
                        className="mt-1"
                      />
                    </div>
                    <div className="col-span-2 space-y-2">
                      <Input type="number" {...field} />
                      <FormMessage />
                    </div>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="config.minQuorum"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="grid grid-cols-5 gap-4">
                    <div className="inline col-span-3">
                      Min. Quorum
                      <InfoTooltip
                        content={
                          "The minimum amount of participation required for a vote to be considered valid."
                        }
                        className="mt-1"
                      />
                    </div>
                    <div className="col-span-2 space-y-2">
                      <Input type="number" {...field} />
                      <FormMessage />
                    </div>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="config.minThreshold"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="grid grid-cols-5 gap-4">
                    <div className="inline col-span-3">
                      Min. Threshold
                      <InfoTooltip
                        content={"Minimum amount of staked assets to vote."}
                        className="mt-1"
                      />
                    </div>
                    <div className="col-span-2 space-y-2">
                      <Input type="number" {...field} />
                      <FormMessage />
                    </div>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="config.maxExpiry"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="grid grid-cols-5 gap-4">
                    <div className="inline col-span-3">
                      Max Expiry
                      <InfoTooltip
                        content={"Max expiry is..."}
                        className="mt-1"
                      />
                    </div>
                    <div className="col-span-2 space-y-2">
                      <Input type="number" {...field} />
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
            name="config.evaluationPhasePeriod"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="grid grid-cols-5 gap-4">
                    <div className="inline col-span-3">
                      Evaluation Phase Period
                      <InfoTooltip
                        content={
                          "Minimum duration for the evaluation phase of a proposal."
                        }
                        className="mt-1"
                      />
                    </div>
                    <div className="col-span-2 space-y-2">
                      <Input type="number" {...field} />
                      <FormMessage />
                    </div>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="config.minStakedRequiredProposal"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="grid grid-cols-5 gap-4">
                    <div className="inline col-span-3">
                      <span>Min. Staked</span>
                      <InfoTooltip
                        content={
                          "Minimum amount of staked assets to create a proposal."
                        }
                        className="mt-1"
                      />
                      <p className="text-sm font-light text-muted-light">
                        To Create Proposals
                      </p>
                    </div>
                    <div className="col-span-2 space-y-2">
                      <Input type="number" {...field} />
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
                    <div className="inline col-span-3">
                      Allow Subfleet Creation?
                      <InfoTooltip
                        content={
                          "Allow members to create their own Subfleet DAO under your Fleet."
                        }
                        className="mt-1"
                      />
                    </div>
                    <div className="col-span-2 space-y-2">
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
                      <div className="inline col-span-3">
                        <span>Min. Staked</span>
                        <InfoTooltip
                          content={
                            "The proposal fee is the payment for bounty proposal."
                          }
                          className="mt-1"
                        />
                        <p className="text-sm font-light text-muted-light">
                          To Create Subfleet DAO
                        </p>
                      </div>
                      <div className="col-span-2 space-y-2">
                        <Input type="number" {...field} />
                        <FormMessage />
                      </div>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default NFTForm;
