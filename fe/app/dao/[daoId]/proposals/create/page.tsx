"use client";

// react
import { useState } from "react";
import { useForm } from "react-hook-form";

// components
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
import TiptapEditor from "@/components/ui/tiptap-editor";
import { useToast } from "@/components/ui/use-toast";
import {
  EProposalType,
  IProposal,
  ProposalDefaults,
  ProposalSchema,
} from "@/lib/schema/proposals.schema";
import { cn } from "@/lib/utils";
import ProposalTypesSelectComponent from "@/proposals/create/proposal-types-select";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

const DAOProposalCreatePage = () => {
  /* * * * * *
   * States
   * * * * * */
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null | undefined>(
    ""
  );
  const [isPageReady, setIsPageReady] = useState<boolean>(false);
  const [hasAlreadySubmitted, setHasAlreadySubmitted] = useState(false);
  const [selectedType, setSelectedType] = useState<EProposalType>(
    EProposalType.VOTE
  );
  const { toast } = useToast();

  const form = useForm<IProposal>({
    resolver: zodResolver(ProposalSchema),
    defaultValues: ProposalDefaults,
  });

  /* * * * * *
   * Functions
   * * * * * */
  const onSubmit = async (values: IProposal) => {
    setIsLoading(true);
    setErrorMessage("");

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

  return (
    <>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-medium text-muted">Create a Proposal</h3>
      </div>
      <div className="grid grid-cols-12 gap-8">
        <Card className="col-span-8">
          <CardContent className="flex flex-col gap-4">
            <Form {...form}>
              <form className="flex flex-col col-span-2 gap-6 my-4">
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
                          description={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex gap-8 w-full">
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
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
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
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
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
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
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
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
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
              Submit
            </Button>
          </CardContent>
        </Card>
        <div className="flex flex-col col-span-4 gap-8"></div>
      </div>
    </>
  );
};

export default DAOProposalCreatePage;
