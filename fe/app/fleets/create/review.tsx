// next
import Image from "next/image";

// components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

// zustand
import shortenAddress from "@/lib/helpers/shortenAddress";
import {
  EMembershipType,
  IFTMembership,
  IHybridMembership,
  INFTMembership,
} from "@/lib/schema/fleet.schema";
import { useStore } from "@/lib/zustand/store";
import { ArrowLeftIcon } from "lucide-react";

function Review() {
  const {
    fleetInfo,
    logoPreview,
    bannerPreview,
    fleetConfig,
    fleetTeam,
    handleBackPage,
  } = useStore();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    /**
     * TODO: Submit the form to the backend
     * 1. Create the FT or NFT as necessary
     * 2. Create the DAO on the Solana program
     */
    alert("submit");
  };

  return (
    <div className="flex flex-col items-center gap-5 mt-8 md:mt-0">
      <div className="flex flex-col items-center justify-start w-full">
        <p className="text-xl font-medium">
          Your Fleet DAO is ready to launch!
        </p>
        <p className="text-sm font-medium text-gray-500">
          Make sure that all of the information below are correct.
        </p>
      </div>

      <Accordion
        type="multiple"
        className="w-full"
        defaultValue={["fleet-review-1", "fleet-review-2", "fleet-review-3"]}
      >
        <AccordionItem value="fleet-review-1">
          <AccordionTrigger>Fleet DAO Info</AccordionTrigger>
          <AccordionContent>
            <div className="md:px-8 pt-4 pb-8">
              <div className="flex flex-col gap-8">
                {bannerPreview && (
                  <div className="relative h-32 md:h-64">
                    <Image
                      src={bannerPreview}
                      alt={"Banner Preview"}
                      layout="fill"
                      className="object-cover w-full h-fit rounded-xl border-default"
                    />
                  </div>
                )}
                <div className="flex gap-8">
                  <Image
                    src={logoPreview}
                    alt={"Uploaded Logo"}
                    width={500}
                    height={500}
                    className="w-24 h-24 md:w-40 md:h-40 rounded-xl border-default"
                  />
                  <div className="flex flex-col">
                    <p className="text-2xl font-semibold text-muted">
                      {fleetInfo.name}
                    </p>
                    <p className="text-base text-gray-500">
                      {fleetInfo.description}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-8">
                    <div className="grid grid-cols-6 gap-4">
                      <div className="col-span-2">Twitter Link</div>
                      <div className="col-span-4 p-4 overflow-x-auto border-default">
                        {fleetInfo.twitter || "-"}
                      </div>
                    </div>

                    <div className="grid grid-cols-6 gap-4">
                      <div className="col-span-2">Website Link</div>
                      <div className="col-span-4 p-4 overflow-x-auto border-default">
                        {fleetInfo.website || "-"}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-8">
                    <div className="grid grid-cols-6 gap-4">
                      <div className="col-span-2">Github Link</div>
                      <div className="col-span-4 p-4 overflow-x-auto border-default">
                        {fleetInfo.github || "-"}
                      </div>
                    </div>

                    <div className="grid grid-cols-6 gap-4">
                      <div className="col-span-2">LinkedIn Link</div>
                      <div className="col-span-4 p-4 overflow-x-auto border-default">
                        {fleetInfo.linkedIn || "-"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="fleet-review-2">
          <AccordionTrigger>Fleet DAO Config</AccordionTrigger>
          <AccordionContent>
            <div className="md:px-8 pt-4 pb-8">
              <div className="flex flex-col gap-8">
                <div className="flex gap-8">
                  <div className="flex flex-col">
                    <p className="text-base text-gray-500">Membership Type</p>
                    <p className="text-2xl font-semibold text-muted">
                      {fleetConfig.membershipType}
                    </p>
                  </div>

                  <div className="flex flex-col">
                    <p className="text-base text-gray-500">Has Mint Address?</p>
                    <p className="text-2xl font-semibold text-muted">
                      {fleetConfig.hasExistingMintAddress ? "Yes" : "None"}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-8">
                    <div className="grid grid-cols-6 gap-4">
                      <div className="col-span-2">
                        {fleetConfig.membershipType === EMembershipType.NFT
                          ? "Collection Address"
                          : "Mint Address"}
                      </div>
                      {fleetConfig.membershipType ===
                        EMembershipType.Fungible && (
                        <div className="col-span-4 p-4 overflow-x-auto border-default">
                          {(fleetConfig.config as IFTMembership)?.mint || "-"}
                        </div>
                      )}
                      {fleetConfig.membershipType === EMembershipType.NFT && (
                        <div className="col-span-4 p-4 overflow-x-auto border-default">
                          {(fleetConfig.config as INFTMembership)?.mint || "-"}
                        </div>
                      )}
                      {fleetConfig.membershipType ===
                        EMembershipType.Hybrid && (
                        <div className="col-span-4 p-4 overflow-x-auto border-default">
                          {(fleetConfig.config as IHybridMembership)?.mint ||
                            "-"}
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-6 gap-4">
                      <div className="col-span-2">Proposal Fee</div>
                      <div className="col-span-4 p-4 overflow-x-auto border-default">
                        {fleetConfig.config?.proposalFee || "-"}
                      </div>
                    </div>

                    <div className="grid grid-cols-6 gap-4">
                      <div className="col-span-2">Min. Quorum</div>
                      <div className="col-span-4 p-4 overflow-x-auto border-default">
                        {fleetConfig.config?.minQuorum || "-"}
                      </div>
                    </div>

                    <div className="grid grid-cols-6 gap-4">
                      <div className="col-span-2">Min. Threshold</div>
                      <div className="col-span-4 p-4 overflow-x-auto border-default">
                        {fleetConfig.config?.minThreshold || "-"}
                      </div>
                    </div>

                    <div className="grid grid-cols-6 gap-4">
                      <div className="col-span-2">Max Expiry</div>
                      <div className="col-span-4 p-4 border-default">
                        {fleetConfig.config?.maxExpiry || "-"}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-8">
                    <div className="grid grid-cols-6 gap-4">
                      <div className="col-span-2">Evaluation Phase Period</div>
                      <div className="col-span-4 p-4 border-default">
                        {fleetConfig.config?.evaluationPhasePeriod || "-"}
                      </div>
                    </div>

                    <div className="grid grid-cols-6 gap-4">
                      <div className="col-span-2">
                        <span>Min. Staked</span>
                        <p className="text-sm font-light text-muted-light">
                          To Create Proposals
                        </p>
                      </div>
                      <div className="col-span-4 p-4 border-default">
                        {fleetConfig.config?.minStakedRequiredProposal || "-"}
                      </div>
                    </div>

                    <div className="grid grid-cols-6 gap-4">
                      <div className="col-span-2">Evaluation Phase Period</div>
                      <div className="col-span-4 p-4 border-default">
                        {fleetConfig.config?.allowSubfleetCreation
                          ? "Yes"
                          : "No"}
                      </div>
                    </div>

                    <div className="grid grid-cols-6 gap-4">
                      <div className="col-span-2">
                        <span>Min. Staked</span>
                        <p className="text-sm font-light text-muted-light">
                          To Create Subfleets
                        </p>
                      </div>
                      <div className="col-span-4 p-4 border-default">
                        {fleetConfig.config?.minStakedToCreateSubfleet || "-"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="fleet-review-3">
          <AccordionTrigger>Team Details</AccordionTrigger>
          <AccordionContent>
            <div className="md:px-8 pt-4 pb-8">
              <div className="flex flex-col gap-8">
                <div className="flex gap-8">
                  <div className="flex flex-col">
                    <p className="text-base text-gray-500">Team Wallet</p>
                    <p className="text-2xl font-semibold text-muted">
                      {shortenAddress(fleetTeam.teamWallet)}
                    </p>
                  </div>

                  <div className="flex flex-col">
                    <p className="text-base text-gray-500">Stay Anonymous?</p>
                    <p className="text-2xl font-semibold text-muted">
                      {fleetTeam.stayAnonymous ? "Yes" : "None"}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-8">
                    <div className="grid grid-cols-6 gap-4">
                      <div className="col-span-2">Team Name</div>
                      <div className="col-span-4 p-4 overflow-x-auto border-default">
                        {fleetTeam?.name || "-"}
                      </div>
                    </div>
                  </div>
                </div>

                {!fleetTeam.stayAnonymous && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col gap-8">
                        <div className="grid grid-cols-6 gap-4">
                          <div className="col-span-2">Twitter Profile</div>
                          <div className="col-span-4 p-4 overflow-x-auto border-default">
                            {fleetTeam?.twitter || "-"}
                          </div>
                        </div>

                        <div className="grid grid-cols-6 gap-4">
                          <div className="col-span-2">LinkedIn Profile</div>
                          <div className="col-span-4 p-4 overflow-x-auto border-default">
                            {fleetTeam?.linkedIn || "-"}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-8">
                        <div className="grid grid-cols-6 gap-4">
                          <div className="col-span-2">Github Profile</div>
                          <div className="col-span-4 p-4 overflow-x-auto border-default">
                            {fleetTeam?.github || "-"}
                          </div>
                        </div>
                        <div className="grid grid-cols-6 gap-4">
                          <div className="col-span-2">Team Website</div>
                          <div className="col-span-4 p-4 overflow-x-auto border-default">
                            {fleetTeam?.website || "-"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* TODO: Create a reusable component with all the variants */}
      <div className="flex justify-between w-full mt-8">
        <Button variant={"outline"} onClick={handleBackPage}>
          <ArrowLeftIcon size={16} className="mr-2" /> Back
        </Button>
        <Button variant={"white"} onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Review;
