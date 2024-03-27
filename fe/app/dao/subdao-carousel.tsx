// components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// mock
import { daos } from "@/mock/daos";
import SubdaoCard from "@/dao/subdao-card";

function SubDaoCarouselList() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs font-medium">Your Sub-Fleets</p>
      <Carousel>
        <CarouselContent className="ml-4">
          {daos.map((dao) => {
            return (
              <CarouselItem key={dao.id} className="basis-1/5">
                <SubdaoCard dao={dao} owned={true} />
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

export default SubDaoCarouselList;
