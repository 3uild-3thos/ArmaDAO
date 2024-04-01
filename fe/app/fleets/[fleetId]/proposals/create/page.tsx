"use client";

// react
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

// components
import ProposalSuccessCardComponent from "@/app/fleets/[fleetId]/proposals/create/proposal-success-card";
import ProposalTypesSelectComponent from "@/app/fleets/[fleetId]/proposals/create/proposal-types-select";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TiptapEditor from "@/components/ui/tiptap-editor";
import { useToast } from "@/components/ui/use-toast";

// lib
import {
  EExecutableType,
  EProposalType,
  IProposal,
  ProposalDefaults,
  ProposalSchema,
} from "@/lib/schema/proposals.schema";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, Plus, XSquareIcon } from "lucide-react";

const DAOProposalCreatePage = () => {
  /* * * * * *
   * States
   * * * * * */
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedType, setSelectedType] = useState<EProposalType>(
    EProposalType.VOTE
  );
  const [choiceValue, setChoiceValue] = useState<string>("");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);
  const { toast } = useToast();

  const form = useForm<IProposal>({
    resolver: zodResolver(ProposalSchema),
    defaultValues: ProposalDefaults,
  });

  const choiceRef = useRef(null);

  const {
    fields: choicesFields,
    append: choicesAppend,
    remove: choicesRemove,
  } = useFieldArray({
    name: "choices",
    control: form.control,
  });

  /* * * * * *
   * Functions
   * * * * * */
  const onSubmit = async (values: IProposal) => {
    setIsLoading(true);

    try {
      const {} = values;

      /**
       * TODO:
       * 1. Apply loading state
       * 2. Create a tx-id for Irys upload
       * 3. Send the metadata URI together with creating the proposal
       * 4. If the proposal is created, start uploading the metadata to the tx-id
       * 5. End loading state
       * 6. Handle errors when necessary; show toast.
       * 7. Show successful modal when necessary
       *
       */
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error?.message || error || "Something went wrong.",
      });
      console.log(error?.message || error);
    }
  };

  const handleProposalTypeSelect = (type: EProposalType) =>
    setSelectedType(type);

  // TODO: Add debounce
  const handleChoiceOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChoiceValue(event?.target?.value || "");
  };

  const handleChoiceRemove = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    choiceIndex: number
  ) => {
    event.preventDefault();
    choicesRemove(choiceIndex);
  };

  const handleAddChoice = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    if (choiceValue !== "") {
      choicesAppend({
        id: crypto.randomUUID(),
        name: choiceValue,
        votes: 0,
      });

      setChoiceValue("");
    }
  };

  const handleSuccessModalClose = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setIsSuccessModalOpen(false);
  };

  return (
    <>
      {isSuccessModalOpen && (
        <ProposalSuccessCardComponent onClose={handleSuccessModalClose} />
      )}
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-medium text-muted">Create a Proposal</h3>
      </div>
      <div className="grid grid-cols-12 gap-8">
        <Card className="w-full col-span-8">
          <CardContent className="flex flex-col gap-4">
            <Form {...form}>
              <form className="relative flex flex-col col-span-2 gap-6 my-4">
                <ProposalTypesSelectComponent
                  onSelect={handleProposalTypeSelect}
                  selected={selectedType}
                />

                {/* Title */}
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem autoFocus>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Allow ZK Voting..."
                          className="h-20 text-2xl font-medium placeholder:font-normal"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Description */}
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem autoFocus>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <TiptapEditor
                          {...field}
                          description={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex w-full gap-8">
                  {/* Start Date */}
                  <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col w-full">
                        <FormLabel>Start Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                size={"lg"}
                                className={cn(
                                  "text-left px-3 text-base bg-background border-default",
                                  !field.value && "text-muted-light"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="w-4 h-4 ml-auto opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={new Date(field.value)}
                              onSelect={field.onChange}
                              disabled={(date: Date) => date < new Date()}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* End Date */}
                  <FormField
                    control={form.control}
                    name="endDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col w-full">
                        <FormLabel>End Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                size={"lg"}
                                className={cn(
                                  "text-left px-3 border-default text-base bg-background",
                                  !field.value && "text-muted-light"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="w-4 h-4 ml-auto opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={new Date(field.value)}
                              onSelect={field.onChange}
                              disabled={(date: Date) => date < new Date()}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Quorum */}
                <FormField
                  control={form.control}
                  name="quorum"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quorum</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="1000"
                          type="number"
                          required
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Threshold */}
                <FormField
                  control={form.control}
                  name="threshold"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Threshold</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="1000"
                          type="number"
                          required
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex gap-8">
                  {/* Expiry */}
                  <FormField
                    control={form.control}
                    name="expiry"
                    render={({ field }) => (
                      <FormItem className="flex flex-col w-full">
                        <FormLabel>Expiry</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                size={"lg"}
                                className={cn(
                                  "text-left px-3 border-default text-base bg-background",
                                  !field.value && "text-muted-light"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="w-4 h-4 ml-auto opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={new Date(field.value)}
                              onSelect={field.onChange}
                              disabled={(date: Date) => date < new Date()}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Evaluation Period */}
                  <FormField
                    control={form.control}
                    name="evaluationPeriod"
                    render={({ field }) => (
                      <FormItem className="flex flex-col w-full">
                        <FormLabel>Evaluation Period</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                size={"lg"}
                                className={cn(
                                  "text-left px-3 border-default text-base bg-background",
                                  !field.value && "text-muted-light"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="w-4 h-4 ml-auto opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={new Date(field.value)}
                              onSelect={field.onChange}
                              disabled={(date: Date) => date < new Date()}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* === BOUNTY === */}
                {selectedType === EProposalType.BOUNTY && (
                  <>
                    {/* Bounty Recipient */}
                    <FormField
                      control={form.control}
                      name="bountyRecipient"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bounty Recipient</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="5vkS...S0kl"
                              required
                              {...field}
                              value={field?.value || ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Bounty Amount */}
                    <FormField
                      control={form.control}
                      name="bountyAmount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bounty Amount (in SOL)</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="1000"
                              required
                              type="number"
                              {...field}
                              value={field?.value || ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}

                {/* === EXECUTABLE === */}
                {selectedType === EProposalType.EXECUTABLE && (
                  <FormField
                    control={form.control}
                    name="executableType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Executable Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={String(field.value || "")}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a configuration to change" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {Object.values(EExecutableType).map((execType) => (
                              <SelectItem
                                key={`exec-type-${execType}`}
                                value={execType}
                              >
                                {execType}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
                <FormLabel>Choices</FormLabel>
                <div className="flex items-center">
                  <Input
                    ref={choiceRef}
                    placeholder="Choice A"
                    value={choiceValue}
                    onChange={handleChoiceOnChange}
                  />
                  <Button
                    variant={"ghost"}
                    disabled={isLoading}
                    onClick={handleAddChoice}
                    className="h-full text-muted-light"
                  >
                    <Plus />
                  </Button>
                </div>
                <FormMessage>
                  {form?.formState?.errors?.choices?.message}
                </FormMessage>

                <div className="flex gap-4">
                  {choicesFields.map((choice, index) => {
                    return (
                      <div
                        key={`choice-${index}`}
                        className="flex items-center justify-between gap-2 px-3 text-center bg-muted text-muted-foreground"
                      >
                        {choice?.name}
                        <Button
                          variant={"ghost"}
                          onClick={(event) => handleChoiceRemove(event, index)}
                          className="p-0"
                        >
                          <XSquareIcon className="text-destructive" />
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </form>
            </Form>
            <Button
              onClick={form.handleSubmit(onSubmit)}
              type="submit"
              // disabled={
              //   !form.getValues("wallet") ||
              //   !form.getValues("email") ||
              //   !form.getValues("twitter") ||
              //   !form.getValues("user_type") ||
              //   !form.getValues("category")
              // }
              isLoading={isLoading}
              className="self-end w-fit"
              variant={"white"}
            >
              Submit Proposal
            </Button>
          </CardContent>
        </Card>
        <div className="flex flex-col col-span-4 gap-8"></div>
      </div>
    </>
  );
};

export default DAOProposalCreatePage;
