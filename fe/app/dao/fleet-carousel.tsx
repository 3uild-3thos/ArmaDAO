// components
import FleetCard from "@/app/dao/fleet-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// mock
import { fleets } from "@/mock/fleets";

function FleetCarouselList() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs font-medium">Your Fleets</p>
      <Carousel>
        <CarouselContent className="ml-4">
          {fleets.map((fleet) => {
            return (
              <CarouselItem key={fleet.info.id} className="basis-1/4">
                <FleetCard fleet={fleet} owned={true} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default FleetCarouselList;
