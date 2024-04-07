// components
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import InfoTooltip from "@/components/ui/info-tooltip";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { slotsToTime } from "@/lib/helpers/slotsToTime";

// lib
import { hoursToSlots, minutesToSlots } from "@/lib/helpers/timeToSlots";
import { IFleetConfig } from "@/lib/schema/fleet.schema";
import { createFleet } from "@/lib/tooltips/fleet.tooltip";
import { ChangeEventHandler, useState } from "react";

// react hook form
import { UseFormReturn } from "react-hook-form";

interface IBaseConfigForm {
  form: UseFormReturn<IFleetConfig>;
  children?: React.ReactNode;
}

const BaseConfigForm = ({ form, children }: IBaseConfigForm) => {
  const { hours: expirySlotsToHours, minutes: expirySlotsMinutes } =
    slotsToTime(form.getValues("config.maxExpiry"));
  const [expiryHours, setExpiryHours] = useState<number>(
    expirySlotsToHours || (null as unknown as number)
  );
  const [expiryMinutes, setExpiryMinutes] = useState<number>(
    expirySlotsMinutes || (null as unknown as number)
  );

  const { hours: evaluationSlotsToHours, minutes: evaluationSlotsMinutes } =
    slotsToTime(form.getValues("config.evaluationPhasePeriod"));
  const [evaluationHours, setEvaluationHours] = useState<number>(
    evaluationSlotsToHours || (null as unknown as number)
  );
  const [evaluationMinutes, setEvaluationMinutes] = useState<number>(
    evaluationSlotsMinutes || (null as unknown as number)
  );

  const handleExpiryHourChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const hours: number = Number(event.target.value);
    setExpiryHours(hours);
    const minutesSlots = minutesToSlots(expiryMinutes);
    const hoursSlots = hoursToSlots(hours);

    form.setValue("config.maxExpiry", hoursSlots + minutesSlots);
    form.clearErrors("config.maxExpiry");
  };

  const handleExpiryMinuteChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const minutes: number = Number(event.target.value);
    setExpiryMinutes(minutes);
    const minutesSlots = minutesToSlots(minutes);
    const hoursSlots = hoursToSlots(expiryHours);

    form.setValue("config.maxExpiry", hoursSlots + minutesSlots);
    form.clearErrors("config.maxExpiry");
  };

  const handleEvaluationHourChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const hours: number = Number(event.target.value);
    setEvaluationHours(hours);
    const minutesSlots = minutesToSlots(evaluationMinutes);
    const hoursSlots = hoursToSlots(hours);

    form.setValue("config.evaluationPhasePeriod", hoursSlots + minutesSlots);
    form.clearErrors("config.evaluationPhasePeriod");
  };

  const handleEvaluationMinuteChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const minutes: number = Number(event.target.value);
    setEvaluationMinutes(minutes);
    const minutesSlots = minutesToSlots(minutes);
    const hoursSlots = hoursToSlots(evaluationHours);

    form.setValue("config.evaluationPhasePeriod", hoursSlots + minutesSlots);
    form.clearErrors("config.evaluationPhasePeriod");
  };

  return (
    <>
      <div className="flex flex-col gap-8">
        <FormField
          control={form.control}
          name="config.proposalFee"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <div className="grid grid-cols-5 gap-4">
                  <div className="inline col-span-2">
                    Proposal Fee
                    <InfoTooltip
                      content={createFleet.config.proposalFee}
                      className="mt-1"
                    />
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
          name="config.minQuorum"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <div className="grid grid-cols-5 gap-4">
                  <div className="inline col-span-2">
                    Quorum
                    <InfoTooltip
                      content={createFleet.config.quorum}
                      className="mt-1"
                    />
                  </div>
                  <div className="flex flex-col col-span-3 space-y-2">
                    <Slider
                      defaultValue={[0]}
                      max={100}
                      step={1}
                      min={0}
                      {...field}
                      value={[field.value]}
                      onValueChange={(value) => field.onChange(value[0])}
                    />
                    <FormMessage />
                    <span className="self-end text-sm text-muted">
                      {field.value}%
                    </span>
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
                  <div className="inline col-span-2">
                    Threshold
                    <InfoTooltip
                      content={createFleet.config.threshold}
                      className="mt-1"
                    />
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
          name="config.maxExpiry"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <div className="grid grid-cols-5 gap-4">
                  <div className="inline col-span-2">
                    Proposal Expiry
                    <InfoTooltip
                      content={createFleet.config.maxExpiry}
                      className="mt-1"
                    />
                  </div>
                  <div className="col-span-3 space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex flex-col gap-2">
                        <Input
                          type="number"
                          {...field}
                          onChange={handleExpiryHourChange}
                          value={expiryHours}
                        />
                        <span className="text-xs text-muted">hours</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Input
                          type="number"
                          {...field}
                          onChange={handleExpiryMinuteChange}
                          value={expiryMinutes}
                        />
                        <span className="text-xs text-muted">minutes</span>
                      </div>
                    </div>
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
                  <div className="inline col-span-2">
                    Proposal Evaluation
                    <InfoTooltip
                      content={createFleet.config.evaluationPhasePeriod}
                      className="mt-1"
                    />
                  </div>
                  <div className="col-span-3 space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex flex-col gap-2">
                        <Input
                          type="number"
                          {...field}
                          onChange={handleEvaluationHourChange}
                          value={evaluationHours}
                        />
                        <span className="text-xs text-muted">hours</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Input
                          type="number"
                          {...field}
                          onChange={handleEvaluationMinuteChange}
                          value={evaluationMinutes}
                        />
                        <span className="text-xs text-muted">minutes</span>
                      </div>
                    </div>
                    <FormMessage />
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        {children}
      </div>
    </>
  );
};

export default BaseConfigForm;
